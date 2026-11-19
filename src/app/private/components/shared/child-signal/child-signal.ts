import { Component, inject, input, model, output, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
     imports: [FormsModule, ReactiveFormsModule, MatDialogModule],
     selector: 'app-child-signal',
     styleUrl: './child-signal.scss',
     templateUrl: './child-signal.html'
})
export class ChildSignal {
     public userName = input.required<string>();

     public saved = output();

     public selected = output<string>();

     public quantity = model(1);

     public onSave() {
          this.saved.emit();
     }

     public selectUser() {
          this.selected.emit('John');
     }

     public increase() {
          this.quantity.update(value => value + 1);
     }

     // Practice

     // public userName = input.required<string>();

     public userForm!: FormGroup;
     private formBuilder = inject(FormBuilder);

     public userFormData = output<{ username: string; age: number | null }>();

     constructor() {
          this.createUserForm();
     }

     public createUserForm() {
          this.userForm = this.formBuilder.group({
               username: new FormControl(''),
               age: new FormControl(null)
          })
     }

     public submit() {
          if (this.userForm.valid) {
               let fData = this.userForm.getRawValue();
               this.userFormData.emit(fData);
               this.userForm.reset();
          }
     }

     public count = signal<number>(0);

     public increment() {
          this.count.update(value => value + 1);
     }

     public decrement() {
          this.count.update(value => Math.max(0, value - 1));
     }

     public reset() {
          this.count.set(0);
     }
}
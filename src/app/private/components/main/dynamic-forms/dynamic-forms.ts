import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsService } from '../../../shared/services/dynamic-forms.service';
import { CommonModule } from '@angular/common';
import { DYNAMIC_FORM_CONFIG } from '../../../shared/configs/dynamic-form.config';

@Component({
     imports: [FormsModule, ReactiveFormsModule, CommonModule],
     selector: 'app-dynamic-forms',
     styleUrl: './dynamic-forms.scss',
     templateUrl: './dynamic-forms.html'
})
export class DynamicForms {
     private dynamicFormService = inject(DynamicFormsService);

     public config = DYNAMIC_FORM_CONFIG;
     public dynamicForm = this.dynamicFormService.createForm(
          this.config.fields
     );

     ngOnInit(): void { }

     public submitForm() {
          if (this.dynamicForm.invalid) {
               this.dynamicForm.markAllAsTouched();
               alert('Please fill all required fields correctly.');
               return;
          }
          console.log('Form Data:', this.dynamicForm.value);
          alert('Form submitted successfully!');
     }

     public resetForm(): void {
          this.dynamicForm.reset();
          alert('Form has been reset.');
     }
}
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../../shared/interfaces/common.interface';
import { MatButtonModule } from '@angular/material/button';

@Component({
     imports: [CommonModule, FormsModule, MatButtonModule],
     selector: 'app-template-driven-forms',
     styleUrl: './template-driven-forms.scss',
     templateUrl: './template-driven-forms.html'
})
export class TemplateDrivenForms {
     public formModel: User = {
          name: '',
          email: '',
          password: '',
          isChecked: false
     };

     public submit(formValue: NgForm) {
          console.log(formValue.value);
     }
}
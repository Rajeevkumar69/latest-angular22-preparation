import { Component, signal } from '@angular/core';
import { form, FormField, required, email, minLength, FormRoot } from '@angular/forms/signals'
import { MatButtonModule } from '@angular/material/button';

@Component({
     imports: [FormField, FormRoot, MatButtonModule],
     selector: 'app-signal-forms',
     styleUrl: './signal-forms.scss',
     templateUrl: './signal-forms.html'
})
export class SignalForms {
     public formModel = signal({
          name: '',
          email: '',
          password: ''
     });

     public profileForm = form(
          this.formModel,
          (schemaPath) => {
               required(schemaPath.name, {
                    message: 'Name is required'
               });

               required(schemaPath.email, {
                    message: 'Email is required'
               });

               email(schemaPath.email, {
                    message: 'Please enter a valid email address'
               });

               required(schemaPath.password, {
                    message: 'Password is required'
               });

               minLength(schemaPath.password, 6, {
                    message: 'Password must be at least 6 characters'
               });
          },
          {
               submission: {
                    action: async (fields) => {
                         console.log('Form Submitted', fields().value());
                         alert('Form Submitted');
                         fields().reset({
                              name: '',
                              email: '',
                              password: ''
                         });
                    }
               }
          }
     );
}
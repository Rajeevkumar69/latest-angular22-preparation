import { DynamicFormConfig } from "../interfaces/common.interface";

export const DYNAMIC_FORM_CONFIG: DynamicFormConfig = {
     title: 'Employee Registration',
     description: 'Complete the employee information below.',
     fields: [
          {
               key: 'firstName',
               label: 'First Name',
               type: 'text',
               placeholder: 'Enter first name',
               defaultValue: '',
               validators: {
                    required: true,
                    minLength: 3,
                    maxLength: 50
               }
          },
          {
               key: 'lastName',
               label: 'Last Name',
               type: 'text',
               placeholder: 'Enter last name',
               defaultValue: '',
               validators: {
                    required: true,
                    minLength: 2,
                    maxLength: 50
               }
          },
          {
               key: 'email',
               label: 'Email Address',
               type: 'email',
               placeholder: 'name@company.com',
               defaultValue: '',
               validators: {
                    required: true,
                    email: true
               }
          },
          {
               key: 'phone',
               label: 'Phone Number',
               type: 'tel',
               placeholder: 'Enter 10 digit mobile number',
               defaultValue: '',
               validators: {
                    required: true,
                    pattern: '^[6-9][0-9]{9}$'
               }
          },
          {
               key: 'department',
               label: 'Department',
               type: 'select',
               placeholder: 'Select department',
               defaultValue: '',
               options: [
                    { label: 'Engineering', value: 'engineering' },
                    { label: 'Human Resources', value: 'hr' },
                    { label: 'Finance', value: 'finance' },
                    { label: 'Marketing', value: 'marketing' },
                    { label: 'Operations', value: 'operations' }
               ],
               validators: {
                    required: true
               }
          },
          {
               key: 'joiningDate',
               label: 'Joining Date',
               type: 'date',
               defaultValue: '',
               validators: {
                    required: true
               }
          },
          {
               key: 'experience',
               label: 'Experience (Years)',
               type: 'number',
               placeholder: 'Enter experience',
               defaultValue: 0,
               validators: {
                    required: true,
                    min: 0,
                    max: 40
               }
          },
          {
               key: 'terms',
               label: 'I accept the Terms and Conditions',
               type: 'checkbox',
               defaultValue: false,
               validators: {
                    required: true
               }
          }
     ]
};
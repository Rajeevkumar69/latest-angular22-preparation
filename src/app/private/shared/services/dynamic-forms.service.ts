import { Service } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { DynamicField } from '../interfaces/common.interface';

@Service()
export class DynamicFormsService {
     public createForm(fields: DynamicField[]): FormGroup {
          const controls: Record<string, FormControl> = {};
          fields.forEach(field => {
               const rules = field.validators;
               const validators = [];
               if (rules?.required) {
                    validators.push(
                         field.type === 'checkbox'
                              ? Validators.requiredTrue
                              : Validators.required
                    );
               }
               if (rules?.email) {
                    validators.push(Validators.email);
               }
               if (rules?.minLength !== undefined) {
                    validators.push(Validators.minLength(rules.minLength));
               }
               if (rules?.maxLength !== undefined) {
                    validators.push(Validators.maxLength(rules.maxLength));
               }
               if (rules?.pattern) {
                    validators.push(Validators.pattern(rules.pattern));
               }
               if (rules?.min !== undefined) {
                    validators.push(Validators.min(rules.min));
               }
               if (rules?.max !== undefined) {
                    validators.push(Validators.max(rules.max));
               }
               controls[field.key] = new FormControl(
                    field.defaultValue ?? '',
                    validators
               );
          });
          return new FormGroup(controls);
     }
}
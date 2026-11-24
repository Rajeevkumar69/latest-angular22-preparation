import { CanDeactivateFn } from '@angular/router';

export const topicCompletionGuard: CanDeactivateFn<any> = (component) => {

     if (component.isCompleted) {
          return true;
     }

     alert('Please acknowledge');
     component.navigationBlocked = true;

     return false;
};
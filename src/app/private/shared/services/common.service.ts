import { Service } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Service()
export class CommonService {
     public $userTypeBehaviourSubject = new BehaviorSubject<string>('');

     public setUserType(userType: 'Admin' | 'Tenant'): void {
          this.$userTypeBehaviourSubject.next(userType);
     }
}
import { inject, Service } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Service()
export class UserFacade {
     private userDataService = inject(UsersDataService);

     public getPosts() {
          return this.userDataService.getPosts();
     }
}
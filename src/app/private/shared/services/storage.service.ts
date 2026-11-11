import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
     providedIn: 'root'
})
export class StorageService {
     private readonly USER_LOGGED_IN = 'userLoggedIn';
     private loggedIn = new BehaviorSubject<boolean>(this.isUserLoggedIn());

     isLoggedIn$ = this.loggedIn.asObservable();

     constructor() { }

     public setUserLoggedIn(value: boolean) {
          localStorage.setItem(this.USER_LOGGED_IN, String(value));
          this.loggedIn.next(true);
     }

     public isUserLoggedIn(): boolean {
          return localStorage.getItem(this.USER_LOGGED_IN) === 'true';
     }

     public logout() {
          localStorage.removeItem(this.USER_LOGGED_IN);
          this.loggedIn.next(false);
     }

     public clearAll() {
          localStorage.clear();
          sessionStorage.clear();
     }
}
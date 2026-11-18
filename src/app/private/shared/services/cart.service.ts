
import { Injectable, signal } from '@angular/core';

@Injectable({
     providedIn: 'root'
})
export class CartService {

     public count = signal(0);

     public price = signal(100);
     public quantity = signal(2);

     public theme = signal('light');

     public readOnlyCount = this.count.asReadonly();

     public incrementCount(): void {
          this.count.update(value => value + 1);
     }

     public toggleTheme(): void {
          this.theme.update(value => value === 'light' ? 'dark' : 'light');
     }
}

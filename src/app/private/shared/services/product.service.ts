import { Service, signal } from '@angular/core';

@Service()

export class ProductService {
     public productInCart = signal<number>(0);

     public addToCart() {
          this.productInCart.update(product => product + 1);
     }

     public removeFromCart() {
          this.productInCart.update(product => Math.max(0, product - 1));
     }
}
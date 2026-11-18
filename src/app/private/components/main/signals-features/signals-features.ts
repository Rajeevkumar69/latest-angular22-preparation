import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { Router } from '@angular/router';

@Component({
     selector: 'app-signals-features',
     styleUrl: './signals-features.scss',
     templateUrl: './signals-features.html',
     imports: [CommonModule,],
})
export class SignalsFeatures {
     private router = inject(Router);

     public count = signal(0);

     public price = signal(100);
     public quantity = signal(2);

     public total = computed(() => this.price() * this.quantity());

     public theme = signal('light');

     public readOnlyCount = this.count.asReadonly();

     public cartService = inject(CartService);

     constructor() {
          effect(() => {
               localStorage.setItem('theme', this.theme());
          });
     }

     public setCount(): void {
          this.count.set(10);
     }

     public updateCount(): void {
          this.count.update(value => value + 1);
     }

     public increment(): void {
          this.count.update(value => value + 1);
     }

     public decrement(): void {
          this.count.update(value => Math.max(0, value - 1));
     }

     public reset(): void {
          this.count.set(0);
     }

     public updatePrice(event: Event): void {
          const value = Number((event.target as HTMLInputElement).value);
          this.price.set(Math.max(0, value));
     }

     public updateQuantity(event: Event): void {
          const value = Number((event.target as HTMLInputElement).value);
          this.quantity.set(Math.max(0, value));
     }

     public goToAdvanceSignalPage() {
          this.router.navigate(['/signal', 'advance-signal']);
     }
}
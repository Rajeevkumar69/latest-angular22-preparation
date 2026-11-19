import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal, viewChild } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { Router } from '@angular/router';
import { ChildSignal } from '../../shared/child-signal/child-signal';
import { DataModel } from '../../shared/data-model/data-model';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

@Component({
     selector: 'app-signals-features',
     styleUrl: './signals-features.scss',
     templateUrl: './signals-features.html',
     imports: [CommonModule, ChildSignal, MatButtonModule],
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

     public setCount() {
          this.count.set(10);
     }

     public updateCount() {
          this.count.update(value => value + 1);
     }

     // public increment() {
     //      this.count.update(value => value + 1);
     // }

     // public decrement() {
     //      this.count.update(value => Math.max(0, value - 1));
     // }

     // public reset() {
     //      this.count.set(0);
     // }

     public updatePrice(event: Event) {
          const value = Number((event.target as HTMLInputElement).value);
          this.price.set(Math.max(0, value));
     }

     public updateQuantity(event: Event) {
          const value = Number((event.target as HTMLInputElement).value);
          this.quantity.set(Math.max(0, value));
     }

     public goToAdvanceSignalPage(): void {
          this.router.navigate(['/signal/advance-signal']);
     }

     // Practice

     public userData: any = null;

     public receiveUserData(data: any) {
          this.userData = data;
     }

     public isModalOpen = signal(false);
     private dialog = inject(MatDialog);

     public openModal() {
          this.isModalOpen.set(true);

          const dialogRef = this.dialog.open(DataModel, {
               width: '500px',
               maxWidth: '95vw',
               autoFocus: false
          });

          dialogRef.componentInstance.isOpen.subscribe(value => {
               this.isModalOpen.set(value);
          });

          dialogRef.afterClosed().subscribe(() => {
               this.isModalOpen.set(false);
          });
     }

     public childComponent = viewChild(ChildSignal);

     public increment() {
          this.childComponent()?.increment();
     }

     public decrement() {
          this.childComponent()?.decrement();
     }

     public reset() {
          this.childComponent()?.reset();
     }
}
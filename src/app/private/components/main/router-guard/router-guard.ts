import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
     imports: [],
     selector: 'app-router-guard',
     styleUrl: './router-guard.scss',
     templateUrl: './router-guard.html'
})
export class RouterGuard {
     public isCompleted: boolean = false;
     public navigationBlocked: boolean = false;
     private router = inject(Router);

     public markAsCompleted(): void {
          this.isCompleted = !this.isCompleted;
          this.navigationBlocked = true;
     }

     public goToNextPage() {
          this.router.navigate(['/control-flow']);
     }
}
import { Component, signal } from '@angular/core';
import { ChildSignal } from '../../shared/child-signal/child-signal';
import { CommonModule } from '@angular/common';

@Component({
     selector: 'app-advance-signal',
     styleUrl: './advance-signal.scss',
     templateUrl: './advance-signal.html',
     imports: [ChildSignal, CommonModule],
})
export class AdvanceSignal {
     public userName = 'Angular 22 Signal';

     public quantity = signal(1);

     public handleSave() {
          console.log('Saved event occurred from child');
     }

     public handleSelection(user: string) {
          console.log('Selected User:', user);
     }
}
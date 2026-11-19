import { Component, input, model, output } from '@angular/core';

@Component({
     imports: [],
     selector: 'app-child-signal',
     styleUrl: './child-signal.scss',
     templateUrl: './child-signal.html'
})
export class ChildSignal {
     public userName = input.required<string>();

     public saved = output();

     public selected = output<string>();

     public quantity = model(1);

     public onSave() {
          this.saved.emit();
     }

     public selectUser() {
          this.selected.emit('John');
     }

     public increase() {
          this.quantity.update(value => value + 1);
     }
}
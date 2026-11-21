
import { Component, input } from '@angular/core';

@Component({
     selector: 'app-child-component',
     standalone: true,
     template: `
          <div class="child-component">
               <span class="text-secondary small">Child Component</span>
               <p class="fw-semibold mb-0">This is the child component.</p>
          </div>
     `
})
export class ChildComponent {

     public name = input();

     public showMessage() {
          alert('Hello from Child Component!');
     }

}
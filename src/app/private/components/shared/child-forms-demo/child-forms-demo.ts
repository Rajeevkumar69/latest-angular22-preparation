import { Component } from '@angular/core';

@Component({
     imports: [],
     selector: 'app-child-forms-demo',
     styleUrl: './child-forms-demo.scss',
     template: `
    <div class="p-3 bg-success-subtle rounded">
      <h6 class="fw-semibold text-success">Angular Forms Loaded</h6>
      <p class="mb-0 text-secondary">
        This component was loaded when its placeholder entered the viewport.
      </p>
    </div>
  `
})
export class ChildFormsDemo { }
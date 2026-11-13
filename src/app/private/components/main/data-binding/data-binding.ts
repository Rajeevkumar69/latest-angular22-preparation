import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
     imports: [FormsModule, ReactiveFormsModule, CommonModule],
     selector: 'app-data-binding',
     styleUrl: './data-binding.scss',
     templateUrl: './data-binding.html'
})

export class DataBinding {
     public productName: string = "Mobile";
     public productNumber: string = "ABC123";
     public productPrice: number = 12000;

     public maxAllowedChar: number = 5;

     public formDynamicType: string = "checkbox";

     public showMessage() {
          alert("Welcome From Angular Team!");
     }

     public onSelectChange(event: Event) {
          let value = (event.target as HTMLSelectElement).value;
          alert(`Hey You're watching ${value}`);
     }

     public mouseEnter() {
          console.log('Mouse Enter');
     }

     public mouseLeave() {
          console.log('Mouse Leave');
     }
}
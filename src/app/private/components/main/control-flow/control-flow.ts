import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
     imports: [CommonModule, FormsModule],
     selector: 'app-control-flow',
     styleUrl: './control-flow.scss',
     templateUrl: './control-flow.html'
})

export class ControlFlow {
     public isDivVisible: boolean = true;
     public isOfferCodeAvailable: boolean = false;

     public orderStatus: string = 'placed';
     public paymentStatus: string = 'success';

     public cityList: string[] = [
          "Delhi",
          "Punjab",
          "Kolkata",
          "Bangalore",
          "Karnataka"
     ];

     public toogleDiv() {
          this.isDivVisible = !this.isDivVisible;
     }

     public resetCities() {
          this.cityList = [
               "Delhi",
               "Punjab",
               "Kolkata",
               "Bangalore",
               "Karnataka"
          ];
     }

     public clearCity() {
          this.cityList = [];
     }
}
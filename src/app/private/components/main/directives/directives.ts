import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
     imports: [CommonModule, FormsModule],
     selector: 'app-directives',
     styleUrl: './directives.scss',
     templateUrl: './directives.html'
})
export class Directives {
     public defaultBgColor: string = 'bg-warning';
     public isCheckActive: boolean = true;
     public globalColor: string = 'bg-primary';

     public dynamicColor: string = '#0d6efd';
     public userName: string = '';
     public elementType: any = {};

     public setGlobalColor(colorName: string): void {
          this.globalColor = colorName;
     }

     public changeElementType(typeParam: string) {
          if (typeParam == 'circle') {
               this.elementType = {
                    'background-color': 'red',
                    'height': '100px',
                    'width': '100px',
                    'border-radius': '50%'
               }
          } else if (typeParam == 'tringle') {
               this.elementType = {
                    'width': '100px',
                    'height': '100px',
                    'background-color': 'yellow',
                    'clip-path': 'polygon(50% 0%, 0% 100%, 100% 100%)'
               }
          } else {
               this.elementType = {
                    'background-color': 'green',
                    'height': '100px',
                    'width': '100px',
                    'border-radius': '5px'
               }
          }
     }
}
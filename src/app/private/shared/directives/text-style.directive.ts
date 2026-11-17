import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
     selector: '[appTextStyle]'
})
export class TextStyle {
     public el = inject(ElementRef);

     constructor() {
          this.el.nativeElement.style.color = 'orange';
          this.el.nativeElement.style.fontWidth = 'bold';
     }

     public changeStyle() {
          this.el.nativeElement.style.color = 'pink';
     }
}
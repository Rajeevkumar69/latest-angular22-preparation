import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { ChildComponent } from '../../shared/child-component/child-component';
import { CommonModule } from '@angular/common';

@Component({
     selector: 'app-template-features',
     imports: [ChildComponent, CommonModule],
     styleUrl: './template-features.scss',
     templateUrl: './template-features.html'
})
export class TemplateFeatures {

     @ViewChild('email') email!: ElementRef<HTMLInputElement>;

     public title: string = 'Template Features Page';
     public amount: number = 200;
     public quantity: number = 2;

     public undefinedValue: number | null | undefined = undefined;

     public inputValue: string = '';
     public lastKey: string = '';
     public searchMessage: string = '';
     public escapeValue: string = '';
     public displayName: string = '';

     public showMessage(event: Event) {
          console.log(event.target);
     }

     public getValue(event: Event) {
          this.inputValue = (event.target as HTMLInputElement).value;
     }

     public getInputValue(event: Event): string {
          return (event.target as HTMLInputElement).value;
     }

     public keyPressed(event: KeyboardEvent) {
          this.lastKey = event.key;
     }

     public enterSearch(event: Event) {
          console.log(`Inside Search`);
     }

     public clear() {
          this.escapeValue = '';
     }

     public showName(value: string) {
          this.displayName = value.trim() ? `Hello ${value}!` : 'Please enter your name.';
     }

     public focusInput() {
          this.email?.nativeElement.focus();
     }

     public showTemplate(template: TemplateRef<unknown>) {
          this.showMessageTemplate = !this.showMessageTemplate;
     }

     public showMessageTemplate: boolean = false;

}
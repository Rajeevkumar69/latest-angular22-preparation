import { AfterContentChecked, AfterContentInit, afterEveryRender, afterNextRender, AfterViewChecked, AfterViewInit, Component, DoCheck, input, OnChanges, OnDestroy, OnInit, signal, SimpleChanges } from '@angular/core';

@Component({
     imports: [],
     selector: 'app-lifecycle-hooks',
     styleUrl: './lifecycle-hooks.scss',
     templateUrl: './lifecycle-hooks.html'
})
export class LifecycleHooks implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

     constructor() {
          console.log('Construtor');

          afterNextRender(() => {
               console.log('First Render Complete');
          })

          afterEveryRender(() => {
               console.log('Angular Render Complete');
          })
     }
     public name = input('Rajeev');

     ngOnChanges(changes: SimpleChanges): void {
          console.log('1. ngOnChange Called', changes['name']);
     }

     ngOnInit(): void {
          console.log('2. ngOnInit Called');
     }

     ngDoCheck(): void {
          console.log('3. ngDoCheck Called');
     }

     ngAfterContentInit(): void {
          console.log('4. ngAfterContentInit Called');
     }

     ngAfterContentChecked(): void {
          console.log('5. ngAfterContentChecked Called');
     }

     ngAfterViewInit(): void {
          console.log('6. ngAfterViewInit Called');
     }

     ngAfterViewChecked(): void {
          console.log('7. ngAfterViewChecked Called');
     }

     // afterNextRender() & afterEveryRender()

     public counter = signal<number>(0);

     ngOnDestroy(): void {
          console.log('8. ngOnDestroy Called');
     }
}
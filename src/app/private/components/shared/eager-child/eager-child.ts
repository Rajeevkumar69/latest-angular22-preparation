import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
     imports: [],
     selector: 'app-eager-child',
     styleUrl: './eager-child.scss',
     templateUrl: './eager-child.html',
     changeDetection: ChangeDetectionStrategy.Eager
})
export class EagerChild {

     get renderCheck(): string {
          console.log('EAGER: Template evaluated');
          return 'I am checks whenever angular checks my component'
     }
}
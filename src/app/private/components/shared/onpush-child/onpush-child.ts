import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
     imports: [],
     selector: 'app-onpush-child',
     styleUrl: './onpush-child.scss',
     templateUrl: './onpush-child.html',
     changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushChild {

     public count = input.required();

     get renderCheck(): string {
          console.log('ONPUSH: Template evualated');
          return 'I am checkded initially & skipped when no relevant changes occour.'
     }
}
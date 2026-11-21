import { Component, signal } from '@angular/core';
import { EagerChild } from '../../shared/eager-child/eager-child';
import { OnpushChild } from '../../shared/onpush-child/onpush-child';

@Component({
     selector: 'app-change-detections',
     styleUrl: './change-detections.scss',
     templateUrl: './change-detections.html',
     imports: [EagerChild, OnpushChild]
})
export class ChangeDetections {
     public counter = signal<number>(0);

}

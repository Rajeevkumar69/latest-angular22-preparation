import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { UsersDataService } from '../../../shared/services/users-data.service';
import { RolePipe } from '../../../shared/pipes/role.pipe';

@Component({
     imports: [CommonModule, RolePipe],
     selector: 'app-pipe-features',
     styleUrl: './pipe-features.scss',
     templateUrl: './pipe-features.html'
})
export class PipeFeatures {
     // uppercase / lowercase / titlecase pipe
     public title = signal<string>('Angular Preperation v22');

     // async pipe
     private userDataService = inject(UsersDataService);
     public users = this.userDataService.getPosts();

     // Currency Pipe
     public amount = signal<number>(220);

     // Date Pipe
     public today = signal<Date>(new Date());

     // Decimal Pipe
     public price = signal<number>(232);

     // i18Plural Pipe
     public items = signal<number>(3);

     // i18Select Pipe
     public gender = signal<string>('male');

     // JSON Pipe
     public userData = signal({ name: 'Abc', age: 25, email: 'abc@abc.com' });

     // KeyValue Pipe

     // Percent Pipe
     public discount = signal<number>(0.2);

     // Slice Pipe
     public userName = signal<string>('John Adam');

     // Custom Pipe
     public employeeData = signal([
          { id: 101, name: 'Martin', role: 'developer' },
          { id: 101, name: 'Aline', role: 'manager' },
          { id: 101, name: 'Cardx', role: 'designer' },
     ])

}
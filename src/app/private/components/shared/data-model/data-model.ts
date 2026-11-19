import { Component, inject, model } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
     selector: 'app-data-model',
     standalone: true,
     styleUrl: './data-model.scss',
     templateUrl: './data-model.html',
     imports: [MatDialogModule, MatButtonModule],
})
export class DataModel {
     public isOpen = model(false);
     private dialogRef = inject(MatDialogRef<DataModel>);

     closeDialog() {
          this.isOpen.set(false);
          this.dialogRef.close();
     }
}
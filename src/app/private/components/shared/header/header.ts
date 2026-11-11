import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageService } from '../../../shared/services/storage.service';

@Component({
     imports: [CommonModule, FormsModule, ReactiveFormsModule],
     selector: 'app-header',
     styleUrl: './header.scss',
     templateUrl: './header.html'
})
export class Header implements OnInit {

     constructor(
          private storageService: StorageService
     ) { }

     ngOnInit(): void { }

     public logout() {
          this.storageService.logout();
     }
}
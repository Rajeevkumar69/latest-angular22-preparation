import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageService } from '../../../shared/services/storage.service';
import { Router } from '@angular/router';

@Component({
     imports: [CommonModule, FormsModule, ReactiveFormsModule],
     selector: 'app-header',
     styleUrl: './header.scss',
     templateUrl: './header.html'
})
export class Header implements OnInit {

     constructor(
          private storageService: StorageService,
          private router: Router
     ) { }

     ngOnInit(): void { }

     public logout() {
          this.storageService.logout();
          this.router.navigateByUrl('/login', {
               replaceUrl: true
          });
     }
}
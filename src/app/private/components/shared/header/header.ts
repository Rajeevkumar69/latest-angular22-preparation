import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageService } from '../../../shared/services/storage.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonService } from '../../../shared/services/common.service';

@Component({
     imports: [CommonModule, FormsModule, ReactiveFormsModule, MatIconModule],
     selector: 'app-header',
     styleUrl: './header.scss',
     templateUrl: './header.html'
})
export class Header implements OnInit {
     public selectedUserType: 'Admin' | 'Tenant' | null = null;

     private commonService = inject(CommonService);

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

     public toogleUserType(userType: 'Admin' | 'Tenant') {
          this.selectedUserType = userType;
          this.commonService.setUserType(userType);
     }
}
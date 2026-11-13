import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuItem } from '../../../shared/interfaces/common.interface';

@Component({
     imports: [CommonModule, RouterModule],
     selector: 'app-sidebar',
     styleUrl: './sidebar.scss',
     templateUrl: './sidebar.html'
})
export class Sidebar implements OnInit {
     public menuItems: MenuItem[] = [
          {
               label: 'Dashboard',
               route: '/dashboard',
               icon: 'bi bi-ui-checks'
          },
          {
               label: 'Component',
               route: '/component',
               icon: 'bi bi-ui-checks'
          },
          {
               label: 'Data Binding',
               route: '/data-binding',
               icon: 'bi bi-ui-checks'
          },
          {
               label: 'Routing',
               route: '/routing',
               icon: 'bi bi-ui-checks'
          },
          {
               label: 'Reactive Forms',
               route: '/reactive-form',
               icon: 'bi bi-ui-checks'
          },
     ];

     constructor(private router: Router) { }

     ngOnInit(): void {

     }

     public navigate(route: string): void {
          this.router.navigate([route]);
     }

     public isActive(route: string): boolean {
          return this.router.url === route;
     }
}
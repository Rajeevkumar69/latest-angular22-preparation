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
               label: 'Control Flow',
               route: '/control-flow',
               icon: 'bi bi-ui-checks'
          },
          {
               label: 'Directive',
               route: '/directive',
               icon: 'bi bi-ui-checks'
          },
          {
               label: 'Template Features',
               route: '/template-features',
               icon: 'bi bi-ui-checks'
          },
          {
               label: 'Signal',
               route: '/signal',
               icon: 'bi bi-ui-checks'
          },
          {
               label: 'Service & Dependency Injection',
               route: '/service-dependency-injection',
               icon: 'bi bi-ui-checks'
          },
          {
               label: 'Users',
               route: '/users',
               icon: 'bi bi-ui-checks'
          },
          {
               label: 'HTTP Interceptor',
               route: '/error-handling',
               icon: 'bi bi-ui-checks'
          },
          {
               label: 'Signal Form',
               route: '/signal-form',
               icon: 'bi bi-ui-checks'
          },
          {
               label: 'Reactive Forms',
               route: '/reactive-form',
               icon: 'bi bi-ui-checks'
          },
          {
               label: 'Template Driven Forms',
               route: '/template-driven-form',
               icon: 'bi bi-ui-checks'
          },
          {
               label: 'Pipe Features',
               route: '/pipe',
               icon: 'bi bi-ui-checks'
          },
          {
               label: 'Lifecycle Hooks',
               route: '/lifecycle-hooks',
               icon: 'bi bi-ui-checks'
          },
          {
               label: 'Change Detection',
               route: '/change-detection',
               icon: 'bi bi-ui-checks'
          },
          {
               label: 'Performance Optimization',
               route: '/performance-optimization',
               icon: 'bi bi-ui-checks'
          },
          {
               label: 'Animation Features',
               route: '/animation-features',
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
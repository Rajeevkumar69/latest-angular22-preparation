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
               icon: ''
          },
          {
               label: 'Component',
               route: '/component',
               icon: ''
          },
          {
               label: 'Data Binding',
               route: '/data-binding',
               icon: ''
          },
          {
               label: 'Routing',
               route: '/routing',
               icon: ''
          },
          {
               label: 'Control Flow',
               route: '/control-flow',
               icon: ''
          },
          {
               label: 'Directive',
               route: '/directive',
               icon: ''
          },
          {
               label: 'Template Features',
               route: '/template-features',
               icon: ''
          },
          {
               label: 'Signal',
               route: '/signal',
               icon: ''
          },
          {
               label: 'Service & Dependency Injection',
               route: '/service-dependency-injection',
               icon: ''
          },
          {
               label: 'Users',
               route: '/users',
               icon: ''
          },
          {
               label: 'HTTP Interceptor',
               route: '/error-handling',
               icon: ''
          },
          {
               label: 'Signal Form',
               route: '/signal-form',
               icon: ''
          },
          {
               label: 'Reactive Forms',
               route: '/reactive-form',
               icon: ''
          },
          {
               label: 'Template Driven Forms',
               route: '/template-driven-form',
               icon: ''
          },
          {
               label: 'Pipe Features',
               route: '/pipe',
               icon: ''
          },
          {
               label: 'Lifecycle Hooks',
               route: '/lifecycle-hooks',
               icon: ''
          },
          {
               label: 'Change Detection',
               route: '/change-detection',
               icon: ''
          },
          {
               label: 'Performance Optimization',
               route: '/performance-optimization',
               icon: ''
          },
          {
               label: 'Animation Features',
               route: '/animation-features',
               icon: ''
          },
          {
               label: 'Zoneless Change Detection',
               route: '/zoneless-change-detection',
               icon: ''
          },
          {
               label: 'SSR & Hydration',
               route: '/ssr-hydration',
               icon: ''
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
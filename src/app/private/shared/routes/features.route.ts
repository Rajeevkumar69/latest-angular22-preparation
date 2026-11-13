import { Routes } from '@angular/router';
import { ComponentFeature } from '../../components/main/component-feature/component-feature';
import { DataBinding } from '../../components/main/data-binding/data-binding';

export const featuresRoutes: Routes = [
     {
          path: 'dashboard',
          loadComponent: () => import('../../components/main/dashboard/dashboard').then((c) => c.Dashboard)
     },
     {
          path: 'component',
          loadComponent: () => import('../../components/main/component-feature/component-feature').then((c) => c.ComponentFeature)
     },
     {
          path: 'data-binding',
          loadComponent: () => import('../../components/main/data-binding/data-binding').then((c) => c.DataBinding)
     }
];
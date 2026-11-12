import { Routes } from '@angular/router';
import { ComponentFeature } from '../../components/main/component-feature/component-feature';

export const featuresRoutes: Routes = [
     {
          path: 'dashboard',
          loadComponent: () => import('../../components/main/dashboard/dashboard').then((c) => c.Dashboard)
     },
     {
          path: 'component',
          loadComponent: () => import('../../components/main/component-feature/component-feature').then((c) => ComponentFeature)
     }
];
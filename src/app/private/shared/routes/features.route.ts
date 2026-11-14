import { Routes } from '@angular/router';

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
     },
     {
          path: 'routing',
          loadComponent: () => import('../../components/main/routings/routings').then((c) => c.Routings)
     },
     {
          path: 'control-flow',
          loadComponent: () => import('../../components/main/control-flow/control-flow').then((c) => c.ControlFlow)
     },
     {
          path: 'directive',
          loadComponent: () => import('../../components/main/directives/directives').then((c) => c.Directives)
     },
     {
          path: '**',
          redirectTo: 'dashboard',
          pathMatch: 'full'
     }
];
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
          path: 'template-features',
          loadComponent: () => import('../../components/main/template-features/template-features').then((c) => c.TemplateFeatures)
     },
     {
          path: 'signal',
          loadComponent: () =>
               import('../../components/main/signals-features/signals-features')
                    .then(c => c.SignalsFeatures),
     },
     {
          path: 'signal/advance-signal',
          loadComponent: () =>
               import('../../components/main/advance-signal/advance-signal')
                    .then(c => c.AdvanceSignal)
     },
     {
          path: 'service-dependency-injection',
          loadComponent: () => import('../../components/main/service-dependency-injection/service-dependency-injection').then((c) => c.ServiceDependencyInjection)
     },
     {
          path: 'users',
          loadComponent: () => import('../../components/main/users-data/users-data').then((c) => c.UsersData)
     },
     {
          path: 'error-handling',
          loadComponent: () => import('../../components/main/http-interceptors/http-interceptors').then((c) => c.HttpInterceptors)
     },
     {
          path: '**',
          redirectTo: 'dashboard',
          pathMatch: 'full'
     }
];
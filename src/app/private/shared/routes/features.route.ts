import { Routes } from '@angular/router';
import { topicCompletionGuard } from '../guards/topic-completion.guard';

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
          path: 'roter-guard',
          loadComponent: () => import('../../components/main/router-guard/router-guard').then((c) => c.RouterGuard),
          canDeactivate: [topicCompletionGuard]
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
          path: 'signal-form',
          loadComponent: () => import('../../components/main/signal-forms/signal-forms').then((c) => c.SignalForms)
     },
     {
          path: 'reactive-form',
          loadComponent: () => import('../../components/main/reactive-forms/reactive-forms').then((c) => c.ReactiveForms)
     },
     {
          path: 'template-driven-form',
          loadComponent: () => import('../../components/main/template-driven-forms/template-driven-forms').then((c) => c.TemplateDrivenForms)
     },
     {
          path: 'pipe',
          loadComponent: () => import('../../components/main/pipe-features/pipe-features').then((c) => c.PipeFeatures)
     },
     {
          path: 'lifecycle-hooks',
          loadComponent: () => import('../../components/main/lifecycle-hooks/lifecycle-hooks').then((c) => c.LifecycleHooks)
     },
     {
          path: 'change-detection',
          loadComponent: () => import('../../components/main/change-detections/change-detections').then((c) => c.ChangeDetections)
     },
     {
          path: 'performance-optimization',
          loadComponent: () => import('../../components/main/performance-optimization/performance-optimization').then((c) => c.PerformanceOptimization)
     },
     {
          path: 'facade-features',
          loadComponent: () => import('../../components/main/facade-features/facade-features').then((c) => c.FacadeFeatures)
     },
     {
          path: 'animation-features',
          loadComponent: () => import('../../components/main/view-transition-features/view-transition-features').then((c) => c.ViewTransitionFeatures)
     },
     {
          path: 'zoneless-change-detection',
          loadComponent: () => import('../../components/main/zoneless-change-detection/zoneless-change-detection').then((c) => c.ZonelessChangeDetection)
     },
     {
          path: 'ssr-hydration',
          loadComponent: () => import('../../components/main/ssr-and-hydration/ssr-and-hydration').then((c) => c.SsrAndHydration)
     },
     {
          path: 'rxjs-overview',
          loadComponent: () => import('../../components/main/rxjs-overview/rxjs-overview').then((c) => c.RxjsOverview)
     },
     {
          path: '**',
          redirectTo: 'dashboard',
          pathMatch: 'full'
     }
];
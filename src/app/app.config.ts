import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { provideOptimus } from '@openng/optimus-ui/config';
import Aura from '@openng/optimus-ui-themes/aura';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { appVersionInterceptor } from './private/shared/interceptors/app-version.interceptor';
import { authTokenInterceptor } from './private/shared/interceptors/auth-token.interceptor';
import { globalErrorInterceptor } from './private/shared/interceptors/global-error.interceptor';
import { apiLoggingInterceptor } from './private/shared/interceptors/api-logging.interceptor';

export const appConfig: ApplicationConfig = {
     providers: [
          provideBrowserGlobalErrorListeners(),
          provideAnimationsAsync(),
          provideRouter(routes),
          provideHttpClient(
               withInterceptors([appVersionInterceptor, authTokenInterceptor, globalErrorInterceptor, apiLoggingInterceptor])
          ),
          provideOptimus({
               theme: {
                    preset: Aura
               }
          })
     ]
};
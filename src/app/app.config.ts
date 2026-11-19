import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { provideOptimus } from '@openng/optimus-ui/config';
import Aura from '@openng/optimus-ui-themes/aura';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
     providers: [
          provideBrowserGlobalErrorListeners(),
          provideAnimationsAsync(),
          provideRouter(routes),
          provideHttpClient(),
          provideOptimus({
               theme: {
                    preset: Aura
               }
          })
     ]
};
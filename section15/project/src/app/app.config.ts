import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';

import { routes } from './app.routes';
import { CustomPreLoadingStrategy } from './custom-preloading';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // provideRouter(routes, withPreloading(PreloadAllModules)),
    provideRouter(routes, withPreloading(CustomPreLoadingStrategy)),
  ],
};

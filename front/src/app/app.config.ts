import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [  provideHttpClient(),
    // provider to inject routes, preload all modules and trace route change events
    provideRouter(routes, withPreloading(PreloadAllModules), withDebugTracing())
  ]
};

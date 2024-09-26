import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './modules/my-first-module/my-first-module.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

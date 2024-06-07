import { ApplicationConfig } from '@angular/core';

  import { provideHttpClient } from '@angular/common/http';
  import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

 
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

  export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};

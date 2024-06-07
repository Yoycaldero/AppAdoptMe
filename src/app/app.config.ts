  import { ApplicationConfig } from '@angular/core';

  import { provideHttpClient } from '@angular/common/http';
  import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';


  export const appConfig: ApplicationConfig = {
    providers:  [ { provide: JWT_OPTIONS, useValue:{ 
      issuer: 'https://your-jwt-issuer.com', // Replace with your actual issuer URL
      tokenName: 'jwt',
    }}, JwtHelperService, provideHttpClient(), provideAnimationsAsync(), ],

  };

 
 
// src/app/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { ConexionService } from './service/conexion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: ConexionService, private router: Router) { }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()){
        console.log ('bye');
        this.router.navigate(['/login']);
        return false;
    }
    console.log ('Welcome');
    return true;
  }
}

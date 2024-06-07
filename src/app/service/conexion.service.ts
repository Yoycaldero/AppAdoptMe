import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnimalI, } from '../../interfaces/animals.interface';
import { DataUserI } from '../../interfaces/dataUser.interface';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root' // Avoid `providedIn: 'root'` unless necessary
})
export class ConexionService {

  link: string = environment.url + '/api/';

  private apiUrl = 'https://localhost:7178/api/Auth/'

  constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) { }


  register(user: any) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(user: any) {
    return this.http.post(`${this.apiUrl}/login`, user);
      }
    
      logout() {

        localStorage.removeItem('token');

        this.router.navigate(['login']);
  }

  isAuthenticated(): boolean {
    console.log (localStorage['token']);
    const token = localStorage.getItem('token');

    return !this.jwtHelper.isTokenExpired(token);
  }
      

  getUsers(): Observable<AnimalI[]> {
    const url: string = this.link + 'DataAnimals';
    return this.http.get<AnimalI[]>(url);
  };



  getDataUsers(): Observable<DataUserI[]> {
    const url: string = this.link + 'DataUsers';
    return this.http.get<DataUserI[]>(url);
};
}


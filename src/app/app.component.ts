import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimalI } from '../interfaces/animals.interface';
import { ConexionService } from './service/conexion.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, BrowserModule, JwtModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webVeteri';

  animal: AnimalI[] = [];
  

  constructor(private service: ConexionService) {
    this.service.getUsers().subscribe({
      next: (animal) => {
        this.animal = animal
      },
      error: (r) => {
        console.log(r);
      },
    });

    
  }
  
}

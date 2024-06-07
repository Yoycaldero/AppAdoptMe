import { Component, OnInit } from '@angular/core';

import { AnimalI } from '../../interfaces/animals.interface';
import { ConexionService } from '../service/conexion.service';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';


@Component({
  selector: 'app-animals',
  standalone: true,
  imports: [NavBarComponent,],
  templateUrl: './animals.component.html',
  styleUrl: './animals.component.css'
})
export class AnimalsComponent implements OnInit {
  animals: AnimalI[] = [];

  constructor(private conexionService: ConexionService) {} 

  
  ngOnInit(): void {
    this.getAnimals();
  }

  

  getAnimals(): void {
    this.conexionService.getUsers() 
      .subscribe(animals => {
        this.animals = animals;
      });
  }
}

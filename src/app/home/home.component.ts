import { ConexionService } from './../service/conexion.service';
import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { TextHomeComponent } from '../components/text-home/text-home.component';
import { FooterComponent } from '../components/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent,TextHomeComponent,FooterComponent,BrowserModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'HomePage';

 
  

  
}



import { Component, OnInit } from '@angular/core';
import { DataUserI } from '../../interfaces/dataUser.interface';
import { ConexionService } from '../service/conexion.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Form } from 'react-router-dom';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,BrowserModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: ConexionService,
    private router: Router
  ) {}
     
 

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required, Validators.name]],
      password: ['', [Validators.required]]
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((response: any) => {

        localStorage.setItem('token', response.token); // Consider using a more secure storage mechanism
        this.router.navigate(['']);
      }, (error) => {
        // Implement user-friendly error handling (e.g., display an error message)
        console.error('Error during login', error);
      });
    }
  }
}

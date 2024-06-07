import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConexionService } from '../service/conexion.service';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, BrowserModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: ConexionService,
    private router: Router  
  ) { 
    
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.name]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(() => {
        this.router.navigate(['login']);
      }, error => {
        console.error('Error during registration', error);
      });
    }
  }
}
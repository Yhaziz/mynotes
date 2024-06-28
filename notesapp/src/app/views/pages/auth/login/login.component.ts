import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../shared/service/auth.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { toast, NgxSonnerToaster } from 'ngx-sonner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, NgxSonnerToaster, CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {


    loginForm!: FormGroup;
    submitted: boolean = false;
    loading: boolean = false;
    private role: 'user' | 'admin' = 'user'; 
  
    constructor(
      private fb: FormBuilder,
      private router: Router,
      private authService: AuthService,
    ) {}
  
    ngOnInit(): void {
      this.loginForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
      });
    }
  
    get f() {
      return this.loginForm.controls;
    }
  
    setRole(role: 'user' | 'admin') {
      this.role = role;
    }
  
    onsubmit() {
      this.submitted = true;
  
      if (this.loginForm.invalid) {
        return;
      }
  
      this.loading = true;
  
   
      this.authService.logins(this.loginForm.value).subscribe({
        next: () => {
          if (this.role === 'admin') {
            this.router.navigate(['/admin/overview']);
            toast.success('hello Admin')
          } else {
            this.router.navigate(['/user/overview']);
            toast.success('hello User')
          }
        },
        error: (error) => {
          toast.error('An error occurred', error.message || error);
          this.loading = false;
          
        }
      });
    }
  }
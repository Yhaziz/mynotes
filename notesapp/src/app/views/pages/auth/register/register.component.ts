import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../shared/service/auth.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { toast, NgxSonnerToaster } from 'ngx-sonner';
import { first } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, NgxSonnerToaster, CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  
  registerForm!: FormGroup;
  submitted:boolean =false;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onsubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.register(this.registerForm.value)
      .pipe(first())
      .subscribe({
        next: (data) => {
          toast.success('Register done!');
          setTimeout(() => {
            this.router.navigate(['/auth/login']);
          }, 1000);

        },
        error: (err) => {
          toast.error('An error occurred', err.message || err);
          this.loading = false;
        }
      });
  }
}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OverviewComponent } from '../overview/overview/overview.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LoginComponent,
    RegisterComponent,
    ReactiveFormsModule,
    FormsModule,
    OverviewComponent,

  ]
})
export class AuthModule { }

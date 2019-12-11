import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from "./register/register.component";
import { AuthService } from './auth.service';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule
  ],
  providers:[AuthService]
})
export class AuthModule { }

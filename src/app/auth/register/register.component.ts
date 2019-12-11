

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private name: string = "";
  private email: string = "";
  private password: string = "";
  private confirmPassword: string = "";
  private isDisabledRegisterButton: boolean = true;
  constructor(private authService: AuthService) { }
  ngOnInit() {
  }
  checkConfirmPassword() {
    this.isDisabledRegisterButton =
      (this.password !== this.confirmPassword) || !this.password.length || !this.confirmPassword.length;
  }
  submitForm() {
    this.authService.register({
      name: this.name,
      email: this.email,
      password: this.password,
      savedImages: {
        id: 0
      }
    });
  }
}

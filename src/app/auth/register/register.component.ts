import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { AuthService } from '../auth.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  private form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {

   }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  isConfirmedPassword(){
    return this.form.value.password === this.form.value.confirmPassword;
  }

  onSubmit(){
    const user = new UserModel().build(this.form.value);
    this.authService.register(user);
  }
  
}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;
  hide = true;
  errorLogin = '';

  constructor(private fBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
    this.initForm();
  }

  getErrorMessageEmail() {
    if (this.loginForm.get('email')?.invalid) {
      return 'Email invalido';
    }
    return ''
  }

  getErrorMessagePassword() {
    if (this.loginForm.get('password')?.invalid) {
      return 'Contraseña obligatoria';
    }
    return ''
  }

  initForm() {

    this.loginForm = this.fBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })

  }

  login() {
    this.errorLogin = '';

    const user: User = {
      email: this.loginForm.get("email")?.value,
      password: this.loginForm.get("password")?.value
    }
    
    if(this.loginService.validateUser(user)) {
      this.loginService.setSession(user);
      setTimeout(() => {
        this.router.navigateByUrl('/users');
      }, 1000);
      
    } else {
      this.errorLogin = 'Datos incorrectos'
    }

  }

}

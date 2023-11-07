import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;
  hide = true;

  constructor(private fBuilder: FormBuilder) {
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

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Observer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    if (this.loginForm.valid) {

      const observer: Observer<any> = {
        next: (response) => {
          this.router.navigate(['/tasks']);
        },
        error: (error) => {
          this.errorMessage = 'Nombre de usuario o contraseña incorrectos.';
        },
        complete: () => {}
      };

      this.authService.login(this.loginForm.value).subscribe(observer);
    }
  }
}

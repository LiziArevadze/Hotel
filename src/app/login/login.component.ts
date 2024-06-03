import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  async onSubmit() {
    try {
      const response = await this.authService.login(this.email, this.password);
      console.log('Login successful:', response);
      this.router.navigate(['/home']);
    } catch (error: any) {
      console.error('Login error:', error);
      this.message = 'Invalid email or password. Please try again.';

      if (error.error && error.error.message) {
        this.message = error.error.message;
      }
    }
  }
}

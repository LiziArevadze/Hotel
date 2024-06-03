
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from './registration.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  name: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private registrationService: RegistrationService) {}

  async onSubmit() {
    try {
      const response = await this.registrationService.register(this.name, this.lastname, this.email, this.password);
      console.log('Registration successful:', response);
      this.router.navigate(['/home']);
    } catch (error: any) {
      console.error('Registration error:', error);
      this.errorMessage = 'Registration failed. Please try again.';
    }
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  constructor(private router: Router) { };
  username: string = '';
  password: string = '';

  onLoginButtonClick() {
    console.log(this.username);
    console.log(this.password);
    this.router.navigate(['/landing']);
  }

  onSignUpButtonClick() {
    this.router.navigate(['/reg']);
  }
} 

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginRequestModel} from "../../model/loginRequest.model";
import {LoginService} from "./login.service";
import {AuthenticationResponse} from "../../model/uthenticationResponse.model";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginRequest!: LoginRequestModel;
  isSubmitting = false;
  submitError: string | null = null;
  submitSuccess = false;
  authResponse: AuthenticationResponse | null = null;

  constructor(private loginService: LoginService, private router: Router) {
    this.loginRequest = {
      username: '',
      password: ''
    }
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isSubmitting = true;
      this.submitError = null;
      this.submitSuccess = false;
      this.authResponse = null;

      this.loginRequest.username = this.loginForm.get('username')!.value;
      this.loginRequest.password = this.loginForm.get('password')!.value;

      console.log(this.loginRequest);

      this.loginService.login(this.loginRequest).subscribe({
        next: (response: AuthenticationResponse) => {
          console.log(response);
          if (response && response.authenticationToken) {
            this.submitSuccess = true;
            this.authResponse = response;
            localStorage.setItem('authToken', response.authenticationToken);
            localStorage.setItem('refreshToken', response.refreshToken);
            localStorage.setItem('expiresAt', response.expiresAt);
            this.router.navigate(['/posts']); // Redirect to posts page

          } else {
            this.submitError = 'Ongeldige response van de server.';
          }
        },
        error: (error: Error) => {
          console.error('Login error:', error);
          this.submitError = error.message;
        },
        complete: () => {
          this.isSubmitting = false;
        }
      });

      console.log("Login request submitted.", localStorage.getItem('authToken'), localStorage.getItem('refreshToken'));
    }
  }
}

import {Component, OnInit} from '@angular/core';
import {SignupRequestModel} from "../../model/signupRequest.model";
import {SignUpService} from "./signup.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  signupRequest!: SignupRequestModel;
  isSubmitting = false;
  submitError: string | null = null;
  submitSuccess = false;

  constructor(private signUpService: SignUpService) {
    this.signupRequest = {
      email: '',
      username: '',
      password: ''

    }


  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }


  onSubmit() {

    this.signupRequest.email = this.signUpForm.get('email')!.value;
    this.signupRequest.username = this.signUpForm.get('username')!.value;
    this.signupRequest.password = this.signUpForm.get('password')!.value;

    console.log(this.signupRequest);

    this.signUpService.singUp(this.signupRequest).subscribe(data => {
      console.log(data);
    });

  }
}

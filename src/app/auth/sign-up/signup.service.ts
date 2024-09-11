import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SignupRequestModel} from "../../model/signupRequest.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private httpClient: HttpClient) { }

  singUp(signupRequest: SignupRequestModel) : Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/auth/signup', signupRequest, {responseType: 'text'});
  }
}

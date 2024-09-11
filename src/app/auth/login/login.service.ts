import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {LoginRequestModel} from "../../model/loginRequest.model";
import {HttpClient} from "@angular/common/http";
import {AuthenticationResponse} from "../../model/uthenticationResponse.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  // login(loginRequest: LoginRequestModel) : Observable<any> {
  //   return this.httpClient.post('http://localhost:8080/api/auth/login', loginRequest, {responseType: 'text'});
  // }

  login(loginRequest: LoginRequestModel) : Observable<AuthenticationResponse> {
    return this.httpClient.post<AuthenticationResponse>('http://localhost:8080/api/auth/login', loginRequest);
  }
}

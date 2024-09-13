import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {RefreshTokenRequest} from "../../model/refreshTokenRequest.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  private logoutUrl = 'http://localhost:8080/api/auth/logout';

  constructor(private http: HttpClient) {}

  logout(refreshTokenRequest: RefreshTokenRequest): Observable<string> {
    return this.http.post(this.logoutUrl, refreshTokenRequest, { responseType: 'text' });
  }
}

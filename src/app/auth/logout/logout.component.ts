import { Component } from '@angular/core';
import {LogoutService} from "./logout.service";
import {Router} from "@angular/router";
import {RefreshTokenRequest} from "../../model/refreshTokenRequest.model";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private logoutService: LogoutService, private router: Router) {}

  // logout() {
  //   const refreshToken = localStorage.getItem('refreshToken');
  //   const username = localStorage.getItem('username'); // Assuming you store the username
  //
  //   if (refreshToken) {
  //     const refreshTokenRequest: RefreshTokenRequest = {
  //       refreshToken: refreshToken,
  //       username: username || undefined
  //     };
  //
  //     this.logoutService.logout(refreshTokenRequest).subscribe({
  //       next: (response) => {
  //         console.log(response);
  //         // Clear local storage
  //         localStorage.removeItem('authToken');
  //         localStorage.removeItem('refreshToken');
  //         localStorage.removeItem('expiresAt');
  //         localStorage.removeItem('username');
  //
  //         // Redirect to login page
  //         this.router.navigate(['/login']);
  //       },
  //       error: (error) => {
  //         console.error('Logout failed', error);
  //         // You might want to handle the error, perhaps show a message to the user
  //       }
  //     });
  //   } else {
  //     console.error('No refresh token found');
  //     // Handle the case where there's no refresh token
  //     // You might still want to clear localStorage and redirect
  //   }
  // }
}

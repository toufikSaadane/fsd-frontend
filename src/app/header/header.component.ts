import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LogoutService} from "../auth/logout/logout.service";
import {RefreshTokenRequest} from "../model/refreshTokenRequest.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  constructor(private logoutService: LogoutService, private router: Router) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }




  navigateToDiscussionForum() {
    if (this.isLoggedIn()) {
      this.router.navigate(['/posts']);
    } else {
      this.router.navigate(['/login']);
    }
  }


  logout() {
    const refreshToken = localStorage.getItem('refreshToken');
    const username = localStorage.getItem('username'); // Assuming you store the username

    if (refreshToken) {
      const refreshTokenRequest: RefreshTokenRequest = {
        refreshToken: refreshToken,
        username: username || undefined
      };

      this.logoutService.logout(refreshTokenRequest).subscribe({
        next: (response) => {
          console.log(response);
          // Clear local storage
          localStorage.removeItem('authToken');
          localStorage.removeItem('refreshToken');
          localStorage.removeItem('expiresAt');
          localStorage.removeItem('username');

          // Redirect to login page
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Logout failed', error);
          // Handle the error, perhaps show a message to the user
        }
      });
    } else {
      console.error('No refresh token found');
      // Handle the case where there's no refresh token
      // You might still want to clear localStorage and redirect
      this.router.navigate(['/login']);
    }
  }
}

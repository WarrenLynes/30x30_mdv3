import { Component } from '@angular/core';
import { AuthService } from '@mdv3/core-data';
import { Router } from '@angular/router';

@Component({
  selector: 'mdv3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kicks';
  authenticated;

  constructor(private authService: AuthService, private router: Router) {
    this.authenticated = authService.authenticated;
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}

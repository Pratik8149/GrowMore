import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private auth: AuthenticationService,
    private router: Router) { }
  /**
   * */
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['register']);
      return false;
    }
    return true;
  }
}

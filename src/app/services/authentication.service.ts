import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  /**
   * */
  isAuthenticated(): boolean {
    if (localStorage.getItem('access_token')) {
      return true;
    }
    return false;
  }
  /**
 * Log out the user from the system by destroying token from local storage
 * */
  Logout() {
    localStorage.removeItem('access_token');
  }


}

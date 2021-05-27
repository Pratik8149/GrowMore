import { Component, OnInit } from '@angular/core';
import { User } from '../../model/userModel';
import { ToastrService } from 'ngx-toastr';
import { GrowmoreApiService } from '../../services/growmore-api.service';
import { Router } from '@angular/router';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
  MicrosoftLoginProvider
} from 'angularx-social-login';
import { Local } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  public user: User;
  public safeToProceed: boolean;
  socialUser: SocialUser;

  constructor(private toastr: ToastrService,
    private growmoreApi: GrowmoreApiService,
    private socialAuthService: SocialAuthService,
    private router: Router  ) {
    this.user = new User();
  }

  ngOnInit(): void {
    // Navigate the user to start page if the user is already logged in
    if (localStorage.getItem('access_token')) {
      this.router.navigate(['smelist']);
    }

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.router.navigate(['smelist']);
    });
  }
  /**
   * Login with google SSO
   * */
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(res => {
      localStorage.setItem('access_token', res.authToken);
      location.reload();
    });
  }
  /**
  * Login with Microsoft SSO
  * */
  loginWithMicrosoft(): void {
    this.socialAuthService.signIn(MicrosoftLoginProvider.PROVIDER_ID).then(res => {
      localStorage.setItem('access_token', res.authToken);
      location.reload();
    });
  }
  /***
   * Validate all form fields
   * */
  validateFields() {
    if (
      !this.user.emailAddress ||
      !this.user.password) {
      this.safeToProceed = false;
      this.toastr.error('All the fields are required to proceed!', 'Stop');
    } else {
      this.safeToProceed = true;
      // Validate email address field
      this.validateEmailAddress();
    }

    if (this.safeToProceed === true) {
      this.growmoreApi.getUserByEmail(this.user).toPromise().then(user => {
        if (user.user.emailAddress === this.user.emailAddress) {
          localStorage.setItem('access_token', user.user.emailAddress);
          location.reload();
          this.router.navigate(['/smelist']);
        }
      });
      this.toastr.success('All good!! Please proceed...', 'Success');
    }
  }
  /*
   * Validate email address
   * **/
  validateEmailAddress() {
    const originalEmail = (<HTMLInputElement>document.getElementById('email')).value;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (emailReg.test(originalEmail)) {
      this.safeToProceed = true;
    } else {
      this.safeToProceed = false;
      this.toastr.error('Invalid email address!', 'Stop');
    }
  }
}



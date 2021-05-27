import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../model/userModel';
import { GrowmoreApiService } from '../../services/growmore-api.service';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
  MicrosoftLoginProvider
} from 'angularx-social-login';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: User;
  public safeToProceed: boolean;

  constructor(private toastr: ToastrService,
    private growmoreApi: GrowmoreApiService,
    private router: Router,
    private socialAuthService: SocialAuthService,) {
    this.user = new User();
  }

  ngOnInit(): void {
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
    if (!this.user.firstName ||
      !this.user.lastName ||
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
      this.growmoreApi.createUser(this.user).toPromise().then(user => {
        if (user) {
          localStorage.setItem('access_token', user.createdUser.emailAddress);
          this.router.navigate(['/smelist']);
        }
      });
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

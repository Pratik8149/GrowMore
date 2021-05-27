import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SMEInfoComponent } from './components/sme-info/sme-info.component';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from './components/register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { TableauModule } from 'ngx-tableau';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SmeListComponent } from './components/sme-list/sme-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VisualisationComponent } from './components/visualisation/visualisation.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GeneralInfoComponent } from './components/general-info/general-info.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { HttpClientModule } from '@angular/common/http';
import { InvestmentComponent } from './components/investment/investment.component';
import { MarketinsightComponent } from './components/marketinsight/marketinsight.component';
import { ProfitplusComponent } from './components/profitplus/profitplus.component';
import { ProfitComponent } from './components/profit/profit.component';
import { environment } from '../environments/environment';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
  MicrosoftLoginProvider
} from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutUsComponent,
    LandingPageComponent,
    SMEInfoComponent,
    RegisterComponent,
    LoginPageComponent,
    SmeListComponent,
    SMEInfoComponent,
    LoginPageComponent,
    VisualisationComponent,
    HeaderComponent,
    FooterComponent,
    GeneralInfoComponent,
    InvestmentComponent,
    MarketinsightComponent,
    ProfitplusComponent,
    GeneralInfoComponent,
    CalculatorComponent,
    ProfitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    ToastrModule.forRoot(),
    MatButtonModule,
    MatFormFieldModule,
    MatButtonModule, 
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    TableauModule,
    HttpClientModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            environment.googleClientId
          )
        },
        {
          id: MicrosoftLoginProvider.PROVIDER_ID,
          provider: new MicrosoftLoginProvider(
            environment.microsoftAppId
          )
        }
      ]
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

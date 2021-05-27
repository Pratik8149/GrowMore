import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SMEInfoComponent } from './components/sme-info/sme-info.component';
import { SmeListComponent } from './components/sme-list/sme-list.component';
import { VisualisationComponent } from './components/visualisation/visualisation.component';
import { GeneralInfoComponent } from './components/general-info/general-info.component';
import { InvestmentComponent } from './components/investment/investment.component';
import { MarketinsightComponent } from './components/marketinsight/marketinsight.component';
import { ProfitplusComponent } from './components/profitplus/profitplus.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ProfitComponent } from './components/profit/profit.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'smeinfo',
    component: SMEInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'smelist',
    component: SmeListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'viz',
    component: VisualisationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'general',
    component: GeneralInfoComponent
  },
  {
    path: 'profitplus',
    component: ProfitplusComponent
  },
  {
    path: 'insight',
    component: MarketinsightComponent
  },
  {
    path: 'investment',
    component: InvestmentComponent
  },
  {
    path: 'calc',
    component: CalculatorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'prediction',
    component: ProfitComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

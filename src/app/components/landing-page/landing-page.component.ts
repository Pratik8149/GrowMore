import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { GrowmoreApiService } from '../../services/growmore-api.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  url: string;
  
  constructor(public location: Location,
    private router: Router,
    private growApi: GrowmoreApiService  ) { }

  ngOnInit(): void {
    const top = document.getElementById('page-top');
    top.scrollIntoView(true);

  }
  /**
   *
   * @param id
   */
  openVisualizaion(id: number) {

    if (id === 1) {
      this.url = 'https://public.tableau.com/views/Tableau-IFN711Project/Sales2019-Sect?:language=en&:display_count=y&publish=yes&:origin=viz_share_link';
    }

    if (id === 2) {
      this.url = 'https://public.tableau.com/views/SMEs_Sales2020/Sales2020-Sector?:language=en&:display_count=y&publish=yes&:origin=viz_share_link';
    }

    if (id === 3) {
      this.url = 'https://public.tableau.com/views/SMEs_Profit2019/2019-Profit?:language=en&:display_count=y&publish=yes&:origin=viz_share_link';
    }

    if (id === 4) {
      this.url = 'https://public.tableau.com/views/SMEs_Profit2020/2020-Profit?:language=en&:display_count=y&publish=yes&:origin=viz_share_link';
    }

    if (id === 5) {
      this.url = 'https://public.tableau.com/views/Profit2019_Bar/Profit2019?:language=en&:display_count=y&publish=yes&:origin=viz_share_link';
    }

    if (id === 6) {
      this.url = 'https://public.tableau.com/views/Subsidies_Bar/GovtSubsidiesGraph?:language=en&:display_count=y&publish=yes&:origin=viz_share_link';
    }

    this.router.navigate(['/viz', { URL: this.url }]);    
  }

  /**
   * */
  isHome() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }
    if (titlee === '/home') {
      return true;
    }
    else {
      return false;
    }

  }
  /**
   * */
  detail_info() {
    this.router.navigate(['/profitplus']);
  }
  /**
   * */
  market_inslights() {
    this.router.navigate(['/insight']);
  }
  /**
   * */
  investment() {
    this.router.navigate(['/investment']);
  }
  /**
   * */
  prediction() {
    this.router.navigate(['/prediction']);
  }
  /**
   * */
  ShowSMEList() {
    this.router.navigate(['/smelist']);
  }
}

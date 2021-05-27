import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profitplus',
  templateUrl: './profitplus.component.html',
  styleUrls: ['./profitplus.component.css']
})
export class ProfitplusComponent implements OnInit {
  url: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    const top = document.getElementById('target');
    top.scrollIntoView(true);
  }

  openViz(id: number) {
    if (id == 1) {
      this.url = 'https://public.tableau.com/views/P2019_Pie_AUStates/PROFITFOR2019-AUSTRALIANSTATES?:language=en&:display_count=y&publish=yes&:origin=viz_share_link';
    }

    if (id == 2) {
      this.url = 'https://public.tableau.com/views/P2020_Pie_AUStates/PROFITFOR2020-AUSTRALIANSTATES?:language=en&:display_count=y&publish=yes&:origin=viz_share_link';
    }

    this.router.navigate(['/viz', { URL: this.url }]);
  }

}

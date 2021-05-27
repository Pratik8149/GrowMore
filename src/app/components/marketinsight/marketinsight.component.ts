import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketinsight',
  templateUrl: './marketinsight.component.html',
  styleUrls: ['./marketinsight.component.css']
})
export class MarketinsightComponent implements OnInit {
  url: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    const top = document.getElementById('target');
    top.scrollIntoView(true);
  }

  openViz(id: number) {
    if (id == 1) {
      this.url = 'https://public.tableau.com/views/Mrkt_InsghtQ2/Mrkt_InsghtQ2?:language=en&:display_count=y&publish=yes&:origin=viz_share_link';
    }

    if (id == 2) {
      this.url = 'https://public.tableau.com/views/Mrkt_InsghtQ3/Mrkt_InsghtQ3?:language=en&:display_count=y&publish=yes&:origin=viz_share_link';
    }

    this.router.navigate(['/viz', { URL: this.url }]);
  }

  

}

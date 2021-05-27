import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visualisation',
  templateUrl: './visualisation.component.html',
  styleUrls: ['./visualisation.component.css']
})
export class VisualisationComponent implements OnInit {
  url: string;
    
  constructor(private route: ActivatedRoute) {
    this.url = this.route.snapshot.paramMap.get('URL'); 

  }

  ngOnInit(): void {
  }

}

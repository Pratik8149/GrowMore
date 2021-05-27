import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profit',
  templateUrl: './profit.component.html',
  styleUrls: ['./profit.component.css']
})
export class ProfitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const top = document.getElementById('target');
    top.scrollIntoView(true);
  }

}

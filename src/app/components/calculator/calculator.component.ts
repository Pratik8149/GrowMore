import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public var1: number;
  public var2: number;
  salePrice: any;
  prof: any;
  grossMargin: any;

  constructor() {

  }

  ngOnInit(): void {
  }

  /**
   * */
  calculate() {

    this.salePrice = (this.var1 + (this.var1 * this.var2 / 100)).toFixed(2);
    this.prof = (this.salePrice - this.var1).toFixed(2);
    
    //Gross margin(%) = (gross profit ÷ net sales price) × 100
    this.grossMargin = ((this.prof / this.salePrice) * 100).toFixed(2)
    
  }
  /**
   * */
  clear() {
    this.var1 = null;
    this.var2 = null;
    this.salePrice = null;
    this.prof = null;
    this.grossMargin = null;
  }
  
}

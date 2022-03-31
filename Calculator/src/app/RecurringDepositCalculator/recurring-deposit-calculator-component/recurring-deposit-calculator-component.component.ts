import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-recurring-deposit-calculator-component',
  templateUrl: './recurring-deposit-calculator-component.component.html',
  styleUrls: ['./recurring-deposit-calculator-component.component.css']
})
export class RecurringDepositCalculatorComponentComponent implements OnInit {

  constructor(private route: Router) {}

  ngOnInit(): void {
  }
  homePage() {
    this.route.navigate([''])
  }
}

import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  recurringDepositeCalculator() {
    this.route.navigate(['/ReccuringDepositeCalculator']);
  }
  fixeddepositecalculator() {
    this.route.navigate(['/FixedDepositeCalculator']);
  }
  fixeddepositeclosurecalculator() {
    this.route.navigate(['/FixedDepositeClosureCalculator']);
  }

  recurringDepositeClosureCalculator(){
  this.route.navigate(['/RecurringDepositeClosureCalculator'])
  }
  incometaxCalculator() {
    this.route.navigate(['/IncomeTaxCalculator']);
  }
  
}

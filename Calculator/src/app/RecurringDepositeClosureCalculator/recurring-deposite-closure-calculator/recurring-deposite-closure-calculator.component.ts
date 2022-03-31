import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recurring-deposite-closure-calculator',
  templateUrl: './recurring-deposite-closure-calculator.component.html',
  styleUrls: ['./recurring-deposite-closure-calculator.component.css']
})
export class RecurringDepositeClosureCalculatorComponent implements OnInit {

  constructor(private route: Router) {}

  ngOnInit(): void {
  }
  homePage() {
    this.route.navigate([''])
  }
}

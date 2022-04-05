import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recurring-deposit-calculator-component',
  templateUrl: './recurring-deposit-calculator-component.component.html',
  styleUrls: ['./recurring-deposit-calculator-component.component.css'],
})
export class RecurringDepositCalculatorComponentComponent implements OnInit {
  monthlyAmountSliderValue: any = 1000;
  rateOfInterestSliderValue: any = 1;
  timePeriodSliderValue: any = 1;
  interestCompoundingValue: any = 3;
  maturityAmout: any;
  totalInvestment: any;
  totalIntrest: any;
  CanvasJS: any;
  e: any;
  d: any;
  constructor(private route: Router) {}

  ngOnInit(): void {}
  homePage() {
    this.route.navigate(['']);
  }
  // calculate maturity value
  Calculate() {
    if (this.interestCompoundingValue == 3) {
      (this.e = Math.pow(
        1 + this.rateOfInterestSliderValue / 400,
        this.timePeriodSliderValue / this.interestCompoundingValue
      )),
        (this.d = Math.pow(
          1 + this.rateOfInterestSliderValue / 400,
          -1 / this.interestCompoundingValue
        ));
      console.log('4');
    } else if (this.interestCompoundingValue == 6) {
      (this.e = Math.pow(
        1 + this.rateOfInterestSliderValue / 200,
        this.timePeriodSliderValue / this.interestCompoundingValue
      )),
        (this.d = Math.pow(
          1 + this.rateOfInterestSliderValue / 200,
          -1 / this.interestCompoundingValue
        ));
      console.log('6');
    } else if (this.interestCompoundingValue == 12) {
      (this.e = Math.pow(
        1 + this.rateOfInterestSliderValue / 100,
        this.timePeriodSliderValue / this.interestCompoundingValue
      )),
        (this.d = Math.pow(
          1 + this.rateOfInterestSliderValue / 100,
          -1 / this.interestCompoundingValue
        ));
      console.log('1');
    } else {
      (this.e = Math.pow(
        1 + this.rateOfInterestSliderValue / 1200,
        this.timePeriodSliderValue / this.interestCompoundingValue
      )),
        (this.d = Math.pow(
          1 + this.rateOfInterestSliderValue / 1200,
          -1 / this.interestCompoundingValue
        ));
      console.log('12');
    }
    this.maturityAmout = (
      (this.monthlyAmountSliderValue * (this.e - 1)) /
      (1 - this.d)
    ).toFixed(0);

    this.totalInvestment = (
      this.monthlyAmountSliderValue * this.timePeriodSliderValue
    ).toFixed(0);
    this.totalIntrest = (
      this.maturityAmout -
      this.monthlyAmountSliderValue * this.timePeriodSliderValue
    ).toFixed(0);
    // var chart = new Chart("chartContainer", {
    //   animationEnabled: true,

    //   data: [
    //     {
    //       showInLegend: true,
    //       type: "pie",

    //       startAngle: 240,
    //       // yValueFormatString: "##0.00\"%\"",
    //       indexLabel: "{label} {y}",
    //       dataPoints: [
    //         {
    //           y: this.monthlyAmountSliderValue * this.timePeriodSliderValue,
    //           label: "Total Investment",

    //         },
    //         {
    //           y: this.maturityAmout - this.monthlyAmountSliderValue * this.timePeriodSliderValue,
    //           label: "Total Intrest",

    //         },
    //       ],
    //     },
    //   ],
    // });
    // chart.render();
  }
}

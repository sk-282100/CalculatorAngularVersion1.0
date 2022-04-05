import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income-tax-caculator',
  templateUrl: './income-tax-caculator.component.html',
  styleUrls: ['./income-tax-caculator.component.css']
})

export class IncomeTaxCaculatorComponent implements OnInit {
  active = 0;
  isBasicDetailsShow: boolean = false;
  isSalaryDetailsShow: boolean = false;
  ismonthlySalaryShow: boolean = false;
  isAnnualSalaryShow: boolean = false;
  isOtherIncomeDetailsShow: boolean = false;
  isCapitalGainsDetailsShow: boolean = false;
  isTaxDeductionsDetailsShow: boolean = false;
  isTaxPayShow: boolean = false;
  isReCalculateShow: boolean = false;
  finalTaxAmount:number=0;
     age:number = 0;
      city:number = 0;
       RecidenceS:number = 0;
        occupation:number = 0;

     AnnualGross:number = 0;
      Annualepf:number = 0;
       Annualsa:number = 0;
        Annualda:number = 0;
         Annualhra:number = 0;
         Annualbasic:number = 0;

     MonthGross:number = 0;
      Monthepf:number = 0;
       Monthsa:number = 0;
        Monthda:number = 0;
         Monthhra:number = 0;
         Monthbasic:number = 0;

     saving:number = 0;
      source:number = 0;
       rent:number = 0;
        deposit:number = 0;

     equity1:number = 0;
      debit1:number = 0;
       shares1:number = 0;
        estate1:number = 0;

     equity2:number = 0;
      debit2:number = 0;
       shares2:number = 0;
        estate2:number = 0;

     epf:number = 0;
      selfInsurance:number = 0;
       nps:number = 0;
        parentInsurance:number = 0;
        seniory:number = 0;
        seniorn:number = 0;
         educationLoanInterest:number = 0;
         homeLoanInterest:number = 0;
         rent1:number = 0;

     grossincome:number = 0;
      capitalgain:number = 0;
       taxdeduction:number = 0;
        taxexcemptions:number = 0;
         totalincome:number = 0;
          incometaxrate:number = 0;

          // grossincome:any;
          // capitalgain:any;
          //  taxdeduction:any;
          //   taxexcemptions:any;
          //    totalincome:any;
          //     incometaxrate:any;
         
          
// id:any = "monthlySalary";
// id2:any = "AnnualSalary";
// tabchange(ids:any){
// this.id=ids;
// console.log(this.id);
// this.id2=ids;
// console.log(this.id2);

// }


salarydetails=['monthly','annually']
selectedList:any

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.selectedList=this.salarydetails[0]
  }
  
// changetab(salarydetail:any){
//   this.selectedList= salarydetail
//   }

onTabChange(event:any){
console.log(event);
}


  homePage() {
    this.route.navigate([''])
  }

  showBasicDetails() {
    this.isBasicDetailsShow = true;
  }

  showSalaryDetails() {
    this.isSalaryDetailsShow = true;
  }

  showmonthlySalary(){
    this.ismonthlySalaryShow = true;
  }

  showAnnualSalary(){
    this.isAnnualSalaryShow = true;
  }

  showOtherIncomeDetails() {
    this.isOtherIncomeDetailsShow = true;
  }

  showCapitalGainsDetails() {
    this.isCapitalGainsDetailsShow = true;
  }

  showTaxDeductionsDetails() {
    this.isTaxDeductionsDetailsShow = true;
  }

  showTaxPay() {
    this.isTaxPayShow = true;
  }

  showReCalculate() {
    this.isReCalculateShow = true;
  }


Calculate(){
  var incometaxobject = [
    { slab1: 0, slab2: 250000, rate: 0, age: 59 },
    { slab1: 250000, slab2: 500000, rate: 5, age: 59 },
    { slab1: 500000, slab2: 750000, rate: 10, age: 59 },
    { slab1: 750000, slab2: 1000000, rate: 15, age: 59 },
    { slab1: 1000000, slab2: 1250000, rate: 20, age: 59 },
    { slab1: 1250000, slab2: 1500000, rate: 25, age: 59 },
    { slab1: 1500000, slab2: 15000000, rate: 30, age: 59 },

  ];
  if (this.epf > 150000) {
   this.epf = 150000;
  }
  if (this.nps > 50000) {
  this.nps = 50000;
  }
  if (this.homeLoanInterest > 200000) {
    this.homeLoanInterest = 200000;
  }
  if (this.selfInsurance > 20000) {
    this.selfInsurance = 200000;
  }
  if (this.parentInsurance > 10000) {
    this.parentInsurance = 10000;
  }

  //this.grossincome =  +(this.Monthbasic + this.saving + this.source + this.rent + this.deposit).toFixed(2);
   this.grossincome =  +(this.Annualbasic + this.saving + this.source + this.rent + this.deposit).toFixed(2);
  this.capitalgain = +(this.equity1 + this.equity2 + this.debit1 + this.debit2 + this.shares1 + this.shares2 + this.estate1 + this.estate2).toFixed(2);
  this.taxdeduction = +(this.epf + this.selfInsurance + this.nps + this.parentInsurance + this.educationLoanInterest + this.homeLoanInterest + this.rent1).toFixed(2);
  this.totalincome = +(this.grossincome + this.capitalgain).toFixed(2);
 
  for (var i = 0; i < incometaxobject.length; i++) {
    if (this.totalincome > incometaxobject[i].slab1 && this.totalincome < incometaxobject[i].slab2) {
     this.incometaxrate = incometaxobject[i].rate;
      break;
    }
  }
this.finalTaxAmount = this.grossincome * this.incometaxrate / 100; 

}

}

   









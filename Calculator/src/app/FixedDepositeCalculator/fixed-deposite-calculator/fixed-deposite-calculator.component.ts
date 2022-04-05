import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-fixed-deposite-calculator',
  templateUrl: './fixed-deposite-calculator.component.html',
  styleUrls: ['./fixed-deposite-calculator.component.css']
})
export class FixedDepositeCalculatorComponent implements OnInit {

  constructor(private route: Router) {
    
  }

 ngOnInit(): void {
  //  console.log($("#addon-wrapping").html());
 }

 toFixedDeposit(){
  
   this.route.navigate(['/fixeddepositecalculator'])

}

homePage() {
  this.route.navigate([''])
}
 fdr=1;
 toYears:Number=365;
 depositeAmount=1000;
 hddepositeAmount=1000;
 roi=1+"%";
 hdroi=1;
 tenureValue=1;
 maturity;
 totIntrest;

//To get type of fixed deposite 
//  $(".fix-deposit-radio").click(function(){
//      fdr=$(this).val()
//    })
 
  getRadioValue(v1:number)
  {
   this.fdr=v1;
   console.log(this.fdr);
  }

   //To get Tensure type value from dropdown 
   


   getTenure(event){
    this.toYears = Number(event.target.value);
    console.log(this.toYears);
   }
   
    //To get deposite amount and display in proper format 
    
    getdepositeValue(event) {
      
      this.depositeAmount=event.target.value;
      this.hddepositeAmount=event.target.value;
      console.log(event.target.value);
   }
   
   getRoiValue(event) {
      
    this.roi=event.target.value+'%';
    this.hdroi=Number(event.target.value);
    console.log(event.target.value);
 }
  
 getTenureValue(event) {
      
  this.tenureValue=event.target.value;
  console.log(event.target.value);
}

getMaturityValue() {
  var depositAmount=this.hddepositeAmount;
  var intrestRate= this.hdroi;
  var tenure=this.tenureValue;
  var fixedDeposit=this.fdr; 

  var maturityAmout=depositAmount*Math.pow(1+((intrestRate/100)/fixedDeposit),fixedDeposit*(tenure/Number(this.toYears)))
  maturityAmout = Number(maturityAmout.toFixed(2));
  var totalIntrest=maturityAmout-depositAmount
  totalIntrest=Number(totalIntrest.toFixed(2));

  console.log(maturityAmout);
  this.maturity=String(maturityAmout)
  this.totIntrest=String(totalIntrest)

  }

}

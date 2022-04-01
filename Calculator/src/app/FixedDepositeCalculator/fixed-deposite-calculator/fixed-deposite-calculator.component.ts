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
   // console.log("hrushsu");
   this.route.navigate(['/fixeddepositecalculator'])

}

homePage() {
  this.route.navigate([''])
}
 fdr=1;
 toYears:Number=365;

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
    e;
    text:Number;
   getTenure(){
    this.e = document.getElementById("tenure");
    this.text = Number(this.e.options[this.e.selectedIndex].value);
    this.toYears=Number(this.text);
    console.log(this.toYears);
   }
   
    //To get deposite amount and display in proper format 
    
    getdepositeValue(event) {
      
      (document.getElementById("depositeAmount") as HTMLInputElement).value=event.target.value;
      (document.getElementById("hddepositeAmount") as HTMLInputElement).value=event.target.value;
      console.log(event.target.value);
   }
   
   getRoiValue(event) {
      
    (document.getElementById("roi") as HTMLInputElement).value=event.target.value+'%';
    (document.getElementById("hdroi") as HTMLInputElement).value=event.target.value;
    console.log(event.target.value);
 }
  
 getTenureValue(event) {
      
  (document.getElementById("tenureValue") as HTMLInputElement).value=event.target.value;
  console.log(event.target.value);
}

getMaturityValue() {
  var depositAmount=Number((document.getElementById("hddepositeAmount")as HTMLInputElement).value)
  var intrestRate= Number((document.getElementById("hdroi")as HTMLInputElement).value)
  var tenure=Number((document.getElementById("tenureValue")as HTMLInputElement).value)
  var fixedDeposit=this.fdr; 

  var maturityAmout=depositAmount*Math.pow(1+((intrestRate/100)/fixedDeposit),fixedDeposit*(tenure/Number(this.toYears)))
  maturityAmout = Number(maturityAmout.toFixed(2));
  var totalIntrest=maturityAmout-depositAmount
  totalIntrest=Number(totalIntrest.toFixed(2));

  console.log(maturityAmout);
  document.getElementById("maturity").innerHTML=String(maturityAmout)
  document.getElementById("totIntrest").innerHTML=String(totalIntrest)

  
}

}

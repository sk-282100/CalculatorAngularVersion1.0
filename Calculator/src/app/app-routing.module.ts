import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './HomePage/home-page/home-page.component';
import { RecurringDepositCalculatorComponentComponent } from './RecurringDepositCalculator/recurring-deposit-calculator-component/recurring-deposit-calculator-component.component';
import { RecurringDepositeClosureCalculatorComponent } from './RecurringDepositeClosureCalculator/recurring-deposite-closure-calculator/recurring-deposite-closure-calculator.component';
import { FixedDepositeCalculatorComponent } from './FixedDepositeCalculator/fixed-deposite-calculator/fixed-deposite-calculator.component';
import { FixeddepositeclosurecalculatorComponent } from './FixedDepositeClosureCalculator/fixeddepositeclosurecalculator/fixeddepositeclosurecalculator.component';
const routes: Routes = [
 

  {path:'',component:HomePageComponent},
  {path:'ReccuringDepositeCalculator',component:RecurringDepositCalculatorComponentComponent},
  {path:'RecurringDepositeClosureCalculator',component:RecurringDepositeClosureCalculatorComponent},
  {path:'FixedDepositeCalculator',component:FixedDepositeCalculatorComponent},
  {path:'FixedDepositeClosureCalculator',component:FixeddepositeclosurecalculatorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RecurringDepositCalculatorComponentComponent,RecurringDepositeClosureCalculatorComponent,HomePageComponent,FixedDepositeCalculatorComponent,FixeddepositeclosurecalculatorComponent]
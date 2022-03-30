import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecurringDepositCalculatorComponentComponent } from './RecurringDepositCalculator/recurring-deposit-calculator-component/recurring-deposit-calculator-component.component';
import { RecurringDepositeClosureCalculatorComponent } from './RecurringDepositeClosureCalculator/recurring-deposite-closure-calculator/recurring-deposite-closure-calculator.component';

const routes: Routes = [
  {path:'ReccuringDepositeCalculator',component:RecurringDepositCalculatorComponentComponent},
  {path:'RecurringDepositeClosureCalculator',component:RecurringDepositeClosureCalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RecurringDepositCalculatorComponentComponent,RecurringDepositeClosureCalculatorComponent]
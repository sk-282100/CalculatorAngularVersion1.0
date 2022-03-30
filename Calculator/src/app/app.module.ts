import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RecurringDepositCalculatorComponentComponent } from './RecurringDepositCalculator/recurring-deposit-calculator-component/recurring-deposit-calculator-component.component';
import { FixedDepositeCalculatorComponent } from './FixedDepositeCalculator/fixed-deposite-calculator/fixed-deposite-calculator.component';
import { IncomeTaxCaculatorComponent } from './IncomeTaxCalculator/income-tax-caculator/income-tax-caculator.component';

@NgModule({
  declarations: [
    AppComponent,
  
    RecurringDepositCalculatorComponentComponent,
        FixedDepositeCalculatorComponent,
        IncomeTaxCaculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

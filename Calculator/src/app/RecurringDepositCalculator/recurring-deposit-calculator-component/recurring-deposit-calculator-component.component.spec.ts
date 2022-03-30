import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringDepositCalculatorComponentComponent } from './recurring-deposit-calculator-component.component';

describe('RecurringDepositCalculatorComponentComponent', () => {
  let component: RecurringDepositCalculatorComponentComponent;
  let fixture: ComponentFixture<RecurringDepositCalculatorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecurringDepositCalculatorComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringDepositCalculatorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

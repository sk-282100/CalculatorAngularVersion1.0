import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedDepositeCalculatorComponent } from './fixed-deposite-calculator.component';

describe('FixedDepositeCalculatorComponent', () => {
  let component: FixedDepositeCalculatorComponent;
  let fixture: ComponentFixture<FixedDepositeCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedDepositeCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedDepositeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

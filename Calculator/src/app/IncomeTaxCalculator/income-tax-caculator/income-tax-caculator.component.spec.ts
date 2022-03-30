import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeTaxCaculatorComponent } from './income-tax-caculator.component';

describe('IncomeTaxCaculatorComponent', () => {
  let component: IncomeTaxCaculatorComponent;
  let fixture: ComponentFixture<IncomeTaxCaculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeTaxCaculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeTaxCaculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

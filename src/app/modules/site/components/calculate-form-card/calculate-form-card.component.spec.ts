import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateFormCardComponent } from './calculate-form-card.component';

describe('CalculateFormCardComponent', () => {
  let component: CalculateFormCardComponent;
  let fixture: ComponentFixture<CalculateFormCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculateFormCardComponent]
    });
    fixture = TestBed.createComponent(CalculateFormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateSmartphoneComponent } from './calculate-smartphone.component';

describe('CalculateSmartphoneComponent', () => {
  let component: CalculateSmartphoneComponent;
  let fixture: ComponentFixture<CalculateSmartphoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculateSmartphoneComponent]
    });
    fixture = TestBed.createComponent(CalculateSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

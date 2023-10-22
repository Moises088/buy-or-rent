import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateVehicleComponent } from './calculate-vehicle.component';

describe('CalculateVehicleComponent', () => {
  let component: CalculateVehicleComponent;
  let fixture: ComponentFixture<CalculateVehicleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculateVehicleComponent]
    });
    fixture = TestBed.createComponent(CalculateVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

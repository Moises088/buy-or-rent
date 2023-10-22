import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateImmobileComponent } from './calculate-immobile.component';

describe('CalculateImmobileComponent', () => {
  let component: CalculateImmobileComponent;
  let fixture: ComponentFixture<CalculateImmobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculateImmobileComponent]
    });
    fixture = TestBed.createComponent(CalculateImmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

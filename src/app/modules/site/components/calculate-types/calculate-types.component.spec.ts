import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateTypesComponent } from './calculate-types.component';

describe('CalculateTypesComponent', () => {
  let component: CalculateTypesComponent;
  let fixture: ComponentFixture<CalculateTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculateTypesComponent]
    });
    fixture = TestBed.createComponent(CalculateTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

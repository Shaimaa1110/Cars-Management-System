import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsTypesComponent } from './cars-types.component';

describe('CarsTypesComponent', () => {
  let component: CarsTypesComponent;
  let fixture: ComponentFixture<CarsTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

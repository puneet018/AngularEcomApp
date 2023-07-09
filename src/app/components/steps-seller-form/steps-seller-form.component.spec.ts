import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsSellerFormComponent } from './steps-seller-form.component';

describe('StepsSellerFormComponent', () => {
  let component: StepsSellerFormComponent;
  let fixture: ComponentFixture<StepsSellerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsSellerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsSellerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

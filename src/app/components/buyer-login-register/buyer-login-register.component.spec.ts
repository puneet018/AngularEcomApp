import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerLoginRegisterComponent } from './buyer-login-register.component';

describe('BuyerLoginRegisterComponent', () => {
  let component: BuyerLoginRegisterComponent;
  let fixture: ComponentFixture<BuyerLoginRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerLoginRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerLoginRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

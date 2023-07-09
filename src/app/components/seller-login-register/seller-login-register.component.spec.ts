import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerLoginRegisterComponent } from './seller-login-register.component';

describe('SellerLoginRegisterComponent', () => {
  let component: SellerLoginRegisterComponent;
  let fixture: ComponentFixture<SellerLoginRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerLoginRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerLoginRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

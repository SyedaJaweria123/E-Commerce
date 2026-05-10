import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CHECKOUT } from './checkout';

describe('CHECKOUT', () => {
  let component: CHECKOUT;
  let fixture: ComponentFixture<CHECKOUT>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CHECKOUT],
    }).compileComponents();

    fixture = TestBed.createComponent(CHECKOUT);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addtocart } from './addtocart';

describe('Addtocart', () => {
  let component: Addtocart;
  let fixture: ComponentFixture<Addtocart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Addtocart],
    }).compileComponents();

    fixture = TestBed.createComponent(Addtocart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

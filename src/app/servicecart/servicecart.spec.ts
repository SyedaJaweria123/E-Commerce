import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicecart } from './servicecart';

describe('Servicecart', () => {
  let component: Servicecart;
  let fixture: ComponentFixture<Servicecart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Servicecart],
    }).compileComponents();

    fixture = TestBed.createComponent(Servicecart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

});

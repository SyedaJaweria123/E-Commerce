import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQs } from './faqs';

describe('FAQs', () => {
  let component: FAQs;
  let fixture: ComponentFixture<FAQs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FAQs],
    }).compileComponents();

    fixture = TestBed.createComponent(FAQs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

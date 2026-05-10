import { TestBed } from '@angular/core/testing';

import { Servicefav } from './servicefav';

describe('Servicefav', () => {
  let service: Servicefav;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicefav);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

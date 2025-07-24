import { TestBed } from '@angular/core/testing';

import { DarklightService } from './darklight.service';

describe('DarklightService', () => {
  let service: DarklightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarklightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

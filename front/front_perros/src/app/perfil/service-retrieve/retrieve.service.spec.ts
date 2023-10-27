import { TestBed } from '@angular/core/testing';

import { RetrieveService } from './retrieve.service';

describe('RetrieveService', () => {
  let service: RetrieveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetrieveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

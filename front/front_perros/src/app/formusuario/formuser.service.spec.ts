import { TestBed } from '@angular/core/testing';

import { FormuserService } from './formuser.service';

describe('FormuserService', () => {
  let service: FormuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

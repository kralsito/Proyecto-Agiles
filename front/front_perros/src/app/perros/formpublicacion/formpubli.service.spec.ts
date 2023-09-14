import { TestBed } from '@angular/core/testing';

import { FormpubliService } from './formpubli.service';

describe('FormpubliService', () => {
  let service: FormpubliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormpubliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

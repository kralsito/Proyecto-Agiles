import { TestBed } from '@angular/core/testing';

import { FormperfilService } from './formperfil.service';

describe('FormperfilService', () => {
  let service: FormperfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormperfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

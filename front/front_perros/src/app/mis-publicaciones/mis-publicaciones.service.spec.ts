import { TestBed } from '@angular/core/testing';

import { MisPublicacionesService } from './mis-publicaciones.service';

describe('PublicacionService', () => {
  let service: MisPublicacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisPublicacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

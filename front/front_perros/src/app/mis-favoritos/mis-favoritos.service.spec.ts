import { TestBed } from '@angular/core/testing';

import { MisFavoritosService } from './mis-favoritos.service';

describe('MisFavoritosService', () => {
  let service: MisFavoritosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisFavoritosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

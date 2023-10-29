import { TestBed } from '@angular/core/testing';

import { PerfilOtroService } from './perfil-otro.service';

describe('PerfilOtroService', () => {
  let service: PerfilOtroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilOtroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

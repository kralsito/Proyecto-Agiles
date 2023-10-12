import { TestBed } from '@angular/core/testing';

import { DialogCerrarSesionService } from './dialog-cerrar-sesion.service';

describe('DialogCerrarSesionService', () => {
  let service: DialogCerrarSesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogCerrarSesionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

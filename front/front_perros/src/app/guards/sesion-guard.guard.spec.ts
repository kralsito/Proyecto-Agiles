import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { sesionGuardGuard } from './sesion-guard.guard';

describe('sesionGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => sesionGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

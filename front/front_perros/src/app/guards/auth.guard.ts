import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenticated()) {
    return true; // Permite el acceso si el usuario está autenticado.
  } else {
    // Redirige al usuario a la página de inicio de sesión.
    router.navigate(['/login']);
    return false; // No permite el acceso.
  }
}

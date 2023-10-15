import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public jwtHelper: JwtHelperService) { }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    } else {
      return false;
    }
  }
  public getCurrentUser(): number | null {
    const token = localStorage.getItem('token');
    console.log('Token:', token);
  
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      if (decodedToken && typeof decodedToken.id === 'number') {
        const id = decodedToken.id;
        return id;
      } else {
        console.error('El token contiene la propiedad userId, pero su tipo es incorrecto.');
      }
    } else {
      console.error('El token no está presente en el localStorage.');
    }
    return null;
  }
  
}

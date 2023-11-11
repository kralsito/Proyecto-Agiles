import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as jwtDecode from 'jwt-decode';


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

      console.log('Decoded Token:', decodedToken);
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
  
  public getCurrentUserEmail(): string | null {
    const token = localStorage.getItem('token');
    console.log('Token:', token);
  
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      console.log('Decoded Token:', decodedToken);
      if (decodedToken && typeof decodedToken.email === 'string') {
        const email = decodedToken.email;
        return email;
      } else {
        console.error('El token contiene la propiedad userId, pero su tipo es incorrecto.');
      }
    } else {
      console.error('El token no está presente en el localStorage.');
    }
    return null;
  }
  public getCurrentUserProfile(): any {
    const token = localStorage.getItem('token');
    console.log('Token:', token);
  
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      console.log('Decoded Token:', decodedToken);
      
      if (decodedToken && typeof decodedToken.nombrePerfil === 'string') {
        const nombrePerfil = decodedToken.nombrePerfil;
        const apellidoPerfil = decodedToken.apellidoPerfil;
        // Agrega más atributos si es necesario
  
        // Devuelve un objeto con la información del perfil
        return {
          nombrePerfil,
          apellidoPerfil,
          // Agrega más atributos si es necesario
        };
      } else {
        console.error('El token contiene atributos de perfil, pero su tipo es incorrecto.');
      }
    } else {
      console.error('El token no está presente en el localStorage.');
    }
    return null;
  }
  
}

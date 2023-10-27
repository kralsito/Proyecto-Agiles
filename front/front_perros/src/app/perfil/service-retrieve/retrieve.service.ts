import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class RetrieveService {
  constructor(public jwtHelper: JwtHelperService) { }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    } else {
      return false;
    }
  }
  
  public getCurrentUserEmail(): string | number | null {
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
  public getCurrentUserProfile(): { nombrePerfil: string, apellidoPerfil: string, telefonoPerfil: number, localidadPerfil: string } | null {
    const token = localStorage.getItem('token');

    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);

      if (decodedToken && typeof decodedToken.nombre_perfil === 'string' 
      && typeof decodedToken.apellido_perfil === 'string'
      && typeof decodedToken.telefono_perfil === 'number'
      && typeof decodedToken.localidad_perfil === 'string') {
        return { nombrePerfil: decodedToken.nombre_perfil,
                apellidoPerfil: decodedToken.apellido_perfil,
                localidadPerfil: decodedToken.localidad_perfil,
                telefonoPerfil: decodedToken.telefono_perfil };
      } else {
        console.error('El token no contiene la información del perfil o su tipo es incorrecto.');
      }
    } else {
      console.error('El token no está presente en el localStorage.');
    }
    return null;
  }

}

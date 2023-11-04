import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as jwtDecode from 'jwt-decode';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RetrieveService {
  constructor(public jwtHelper: JwtHelperService, private http: HttpClient) { }
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
  public getCurrentUserProfile(): { nombrePerfil: string, apellidoPerfil: string, telefonoPerfil: number, localidadPerfil: string, idPerfil: number } | null {
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
                telefonoPerfil: decodedToken.telefono_perfil,
                idPerfil: decodedToken.id_perfil };
      } else {
        console.error('El token no contiene la información del perfil o su tipo es incorrecto.');
      }
    } else {
      console.error('El token no está presente en el localStorage.');
    }
    return null;
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
  
  editarPerfil(perfilId: number, perfilData: any): Observable<any> {
    const url = `http://localhost:8000/api/usuario/mi-perfil/${perfilId}/`;
    return this.http.put(url, perfilData)
      .pipe(
        catchError((error: any) => {
          // Agrega el manejo de error aquí, por ejemplo, regresando un Observable con un mensaje de error.
          console.error('Error al actualizar el perfil', error);
          return throwError('Error al actualizar el perfil');
        })
      );
  }
  refreshToken(): Observable<string | null> {
    // Realiza una solicitud HTTP al servidor de autenticación para obtener un nuevo token válido
    // Puedes personalizar esta parte de acuerdo a tu servidor de autenticación
    return this.http.post<{ token: string }>('/refresh', {}).pipe(
      map(response => response.token),
      catchError(error => {
        console.error('Error al refrescar el token', error);
        // Devuelve un observable que emite un valor nulo en caso de error
        return throwError(null);
      })
    );
  }
  

}

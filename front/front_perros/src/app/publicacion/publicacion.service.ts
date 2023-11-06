import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  constructor(private http: HttpClient) {}

  obtenerPublicaciones(): Observable<any> {
    return this.http.get('http://localhost:8000/api/publicaciones/');
  }

  agregarPublicacionAFavoritos(publicacionId: number, usuarioId: number): Observable<any> {
    // Crear un objeto con los datos que deseas enviar en la solicitud POST, incluyendo el usuarioId
    const data = {
      usuarioId: usuarioId,
      // Otros datos si es necesario
    };
  
    // Realizar una solicitud POST para agregar la publicación a favoritos
    return this.http.post(`http://localhost:8000/api/publicaciones/${publicacionId}/favorito/`, data);
  }
  
}
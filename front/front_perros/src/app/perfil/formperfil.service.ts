import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Perfil } from '../perfil.model';

@Injectable({
  providedIn: 'root'
})
export class FormperfilService {
  constructor(private http: HttpClient) {}

  altaPerfil(perfil: any): Observable<any> {
    const url = 'http://localhost:8000/api/perfil/alta/';
    
    return this.http.post(url, perfil);
  }
  editarPerfil(id: number, datosEditados: any) {
    const url = `http://localhost:8000/api/usuario/mi-perfil/${id}/`;
    return this.http.put(url, datosEditados);
  }
}
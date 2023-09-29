import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../usuario.model';

@Injectable({
  providedIn: 'root'
})
export class FormuserService {
  constructor(private http: HttpClient) {}

  altaUsuario(usuario: any): Observable<any> {
    const url = 'http://localhost:8000/api/registrar';
    
    return this.http.post(url, usuario);
  }
}

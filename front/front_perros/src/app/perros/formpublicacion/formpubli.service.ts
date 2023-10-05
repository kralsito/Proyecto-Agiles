import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Perro } from '../../perro.model';

@Injectable({
  providedIn: 'root'
})
export class FormpubliService {
  constructor(private http: HttpClient) {}

  altaPublicacion(perro: any): Observable<any> {
    const url = 'http://localhost:8000/api/publicaciones/alta/';
    
    return this.http.post(url, perro);
  }
}

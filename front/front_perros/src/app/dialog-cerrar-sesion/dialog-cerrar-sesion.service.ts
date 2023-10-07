import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DialogCerrarSesionService {
  private logoutUrl = 'http://localhost:8000/api/usuario/logout/'; 
  constructor(private http: HttpClient) { }
  logout() {
    return this.http.post(this.logoutUrl, {});
  }
}
 

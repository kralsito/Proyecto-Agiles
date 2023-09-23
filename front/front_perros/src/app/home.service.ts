import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  mostrarInicio: boolean = false;
  mostrarPublicacion: boolean = false;
  mostrarContenido: boolean = false;

  constructor() {}

  setMostrarInicio(valor: boolean) {
    this.mostrarInicio = valor;
  }

  setMostrarPublicacion(valor: boolean) {
    this.mostrarPublicacion = valor;
  }

  setMostrarContenido(valor: boolean) {
    this.mostrarContenido = valor;
  }

  getMostrarInicio() {
    return this.mostrarInicio;
  }

  getMostrarPublicacion() {
    return this.mostrarPublicacion;
  }

  getMostrarContenido() {
    return this.mostrarContenido;
  }
}

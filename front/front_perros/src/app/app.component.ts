import { Component, OnInit } from '@angular/core';
import { Perro } from './perro.model';
import { LoggingService } from './LoggingService.service';
import { PerrosService } from './perros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'RouteApp';
  mostrarPublicacion: boolean = false;
  constructor(private router: Router){}
  titulo = 'Datos del Perro';
  perros: Perro[] = [];


  verPublicaciones(){
    this.mostrarPublicacion = true;
    this.router.navigate(['/publicacion']); 
  }
  verApp() {
    this.mostrarPublicacion = false; // Ocultar el contenido de "publicacion.component"
    this.router.navigate(['/publicacion']); // Navegar a la página de "publicacion.component"
  }
}

import { Component } from '@angular/core';
import { Perro } from './perro.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RouteApp';
  mostrarPublicacion: boolean = false;
  constructor(private router: Router){}
  titulo = 'Datos del Perro';
  perros: Perro[] = [
    new Perro('Chicho', 5),
    new Perro('Lolo', 7),
    new Perro('Luna', 3)
  ];

  perroAgregado(perro: Perro){
    this.perros.push(perro);
  }

  verPublicaciones(){
    this.mostrarPublicacion = true;
    this.router.navigate(['/publicacion']); 
  }
  verApp() {
    this.mostrarPublicacion = false; // Ocultar el contenido de "publicacion.component"
    this.router.navigate(['/publicacion']); // Navegar a la página de "publicacion.component"
  }
}

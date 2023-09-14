import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'RouteApp';
  mostrarInicio: boolean = false;
  mostrarPublicacion: boolean = false;
  mostrarContenido: boolean = false;
  constructor(private router: Router){}
  titulo = 'Datos del Perro';


  verPublicaciones(){
    this.mostrarPublicacion = true;
    this.mostrarContenido = false;
    this.mostrarInicio = true;
    this.router.navigate(['/publicacion']);
  }
  
    verApp() {
      this.mostrarPublicacion = false;
      this.mostrarContenido = false; 
      this.mostrarInicio = false;
      this.router.navigate(['/']); 
    }

  crearPublicacion(){
    this.mostrarInicio = true;
    this.mostrarPublicacion = false;
    this.mostrarContenido = true;
    }


  //verFormpublicacion() {
  //  this.mostrarContenido = true; // Ocultar el contenido de "publicacion.component"
  //  this.mostrarPublicacion = false;
  //  this.router.navigate(['/formpublicacion']); // Navegar a la página de "publicacion.component"
  //}
}

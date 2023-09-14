import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'RouteApp';

  constructor(private router: Router, public homeService: HomeService) {}

  verPublicaciones() {
    this.homeService.setMostrarPublicacion(true);
    this.homeService.setMostrarContenido(false);
    this.homeService.setMostrarInicio(true);
    this.router.navigate(['/publicacion']);
  }

  verApp() {
    this.homeService.setMostrarPublicacion(false);
    this.homeService.setMostrarContenido(false);
    this.homeService.setMostrarInicio(false);
    this.router.navigate(['/']);
  }

  crearPublicacion() {
    this.homeService.setMostrarInicio(true);
    this.homeService.setMostrarPublicacion(false);
    this.homeService.setMostrarContenido(true);
    this.router.navigate(['/formpublicacion']);
  }
}

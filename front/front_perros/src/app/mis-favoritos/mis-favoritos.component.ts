import { Component, OnInit } from '@angular/core';
import { MisFavoritosService } from './mis-favoritos.service';
import { AuthService } from '../guards/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-favoritos',
  templateUrl: './mis-favoritos.component.html',
  styleUrls: ['./mis-favoritos.component.css']
})
export class MisFavoritosComponent implements OnInit {
  publicaciones: any = [];
  favoritos: any = [];
  displayContactar = "none";
  usuarioPerroSeleccionado: string = '';


  constructor(private misFavoritos: MisFavoritosService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    const userId = this.authService.getCurrentUser();
    if (userId !== null) {
      this.misFavoritos.obtenerPublicacionesFavoritas().subscribe((data: any[]) => {
        this.favoritos = data;
        this.misFavoritos.obtenerPublicaciones().subscribe((publicaciones: any[]) => {
          // Realizar la comparación para encontrar las publicaciones favoritas del usuario
          this.publicaciones = publicaciones.filter(publicacion => this.favoritos.some((fav: any) => fav.publicacion === publicacion.id && fav.usuario === userId));
          console.log(this.publicaciones);
        });
      });
    } else {
      // Maneja el caso en el que no se haya encontrado un usuario logeado
    }
  }

  infoContactar(publicacion: any) {
    const usuarioId = publicacion.usuario;
    this.router.navigate([`/perfil-otro/${usuarioId}`]);
  }
  
  onCloseHandledContactar() {
    this.displayContactar = "none";
  }
}
import { Component, OnInit } from '@angular/core';
import { PublicacionService } from './publicacion.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {
  publicaciones: any;
  publicacionesOriginales: any;
  faHeart = faHeart;
  filtrosSexo: string[] = [];
  filtrosTamanio: string[] = [];
  displayFiltros = "none";
  displayMeInteresa = "none";
  usuarioPerroSeleccionado: string = '';


  constructor(private publicacionService: PublicacionService) {}

  ngOnInit() {
    this.publicacionService.obtenerPublicaciones().subscribe(
      (data: any) => {
        this.publicaciones = data;
        this.publicacionesOriginales = [...data];
      },
      (error) => {
        console.error('Error al cargar las publicaciones:', error);
      }
    );
  } 
  
  abrirFiltros() {
    this.displayFiltros= "block";
    const contenidoPrincipal = document.getElementById("contenidoPrincipal");
    if (contenidoPrincipal) {
        contenidoPrincipal.style.display = "block";
    }
  }

  infoMeInteresa(publicacion: any) {
    this.usuarioPerroSeleccionado = publicacion.usuario;
    this.displayMeInteresa = "block";
  }

  onCloseHandled() {
    this.displayFiltros = "none";
  }

  onCloseHandledMeInteresa() {
    this.displayMeInteresa = "none";
  }

  cancelarFiltros() {
    this.displayFiltros = "none";
    return this.publicaciones = [...this.publicacionesOriginales];
  }

  toggleFiltroSexo(sexo: string) {
    if (this.filtrosSexo.includes(sexo)) {
      this.filtrosSexo = this.filtrosSexo.filter((filtro) => filtro !== sexo);
    } else {
      this.filtrosSexo.push(sexo);
    }
    this.aplicarFiltros();
  }
  
  toggleFiltroTamanio(tamanio: string) {
    if (this.filtrosTamanio.includes(tamanio)) {
      this.filtrosTamanio = this.filtrosTamanio.filter((filtro) => filtro !== tamanio);
    } else {
      this.filtrosTamanio.push(tamanio);
    }
    this.aplicarFiltros();
  }
  
  aplicarFiltros() {
    if (this.filtrosSexo.length === 0 && this.filtrosTamanio.length === 0) {
      this.publicaciones = [...this.publicacionesOriginales];
      return;
    }
    const publicacionesFiltradasSexo = this.publicacionesOriginales.filter((publicacion: any) => {
      return this.filtrosSexo.length === 0 || this.filtrosSexo.includes(publicacion.sexoPerro);
    });

    const publicacionesFiltradasTamanio = publicacionesFiltradasSexo.filter((publicacion: any) => {
      return this.filtrosTamanio.length === 0 || this.filtrosTamanio.includes(publicacion.tamanioPerro);
    });

    this.publicaciones = publicacionesFiltradasTamanio;
  }
}

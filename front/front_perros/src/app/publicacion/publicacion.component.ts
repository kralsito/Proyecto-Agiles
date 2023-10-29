import { Component, OnInit } from '@angular/core';
import { PublicacionService } from './publicacion.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
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
  filtrosDes: string[] = [];
  filtrosVac: string[] = [];
  filtrosCas: string[] = [];
  filtrosLib: string[] = [];
  displayFiltros = "none";
  displayMeInteresa = "none";
  usuarioPerroSeleccionado: string = '';


  constructor(private publicacionService: PublicacionService, private router: Router) {}

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
    const usuarioId = publicacion.usuario;
    this.router.navigate([`/perfil-otro/${usuarioId}`]);
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

  toggleFiltroDes(desparasitado: string) {
    if (this.filtrosDes.includes(desparasitado)) {
      this.filtrosDes = this.filtrosDes.filter((filtro) => filtro !== desparasitado);
    } else {
      this.filtrosDes.push(desparasitado);
    }
    this.aplicarFiltros();
  }

  toggleFiltroVac(vacunado: string) {
    if (this.filtrosVac.includes(vacunado)) {
      this.filtrosVac = this.filtrosVac.filter((filtro) => filtro !== vacunado);
    } else {
      this.filtrosVac.push(vacunado);
    }
    this.aplicarFiltros();
  }

  toggleFiltroLib(libreta: string) {
    if (this.filtrosLib.includes(libreta)) {
      this.filtrosLib = this.filtrosLib.filter((filtro) => filtro !== libreta);
    } else {
      this.filtrosLib.push(libreta);
    }
    this.aplicarFiltros();
  }

  toggleFiltroCas(castrado: string) {
    if (this.filtrosCas.includes(castrado)) {
      this.filtrosCas = this.filtrosCas.filter((filtro) => filtro !== castrado);
    } else {
      this.filtrosCas.push(castrado);
    }
    this.aplicarFiltros();
  }
    
  aplicarFiltros() {
    if (
      this.filtrosSexo.length === 0 &&
      this.filtrosTamanio.length === 0 &&
      this.filtrosDes.length === 0 &&
      this.filtrosCas.length === 0 &&
      this.filtrosLib.length === 0 &&
      this.filtrosVac.length === 0
    ) {
      this.publicaciones = [...this.publicacionesOriginales];
      return;
    }
  
    const publicacionesFiltradasSexo = this.publicacionesOriginales.filter((publicacion: any) => {
      return this.filtrosSexo.length === 0 || this.filtrosSexo.includes(publicacion.sexoPerro);
    });
  
    const publicacionesFiltradasTamanio = publicacionesFiltradasSexo.filter((publicacion: any) => {
      return this.filtrosTamanio.length === 0 || this.filtrosTamanio.includes(publicacion.tamanioPerro);
    });
  
    const publicacionesFiltradasDes = publicacionesFiltradasTamanio.filter((publicacion: any) => {
      return this.filtrosDes.length === 0 || this.filtrosDes.includes(publicacion.desparasitadoPerro);
    });
  
    const publicacionesFiltradasCas = publicacionesFiltradasDes.filter((publicacion: any) => {
      return this.filtrosCas.length === 0 || this.filtrosCas.includes(publicacion.castradoPerro);
    });
  
    const publicacionesFiltradasLib = publicacionesFiltradasCas.filter((publicacion: any) => {
      return this.filtrosLib.length === 0 || this.filtrosLib.includes(publicacion.libretaPerro);
    });
  
    const publicacionesFiltradasVac = publicacionesFiltradasLib.filter((publicacion: any) => {
      return this.filtrosVac.length === 0 || this.filtrosVac.includes(publicacion.vacunadoPerro);
    });
  
    this.publicaciones = publicacionesFiltradasVac;
  }   
}

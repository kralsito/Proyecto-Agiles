import { Component, OnInit } from '@angular/core';
import { MisPublicacionesService } from './mis-publicaciones.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../guards/auth.service';
import { Perro } from '../perro.model';

@Component({
  selector: 'app-mis-publicaciones',
  templateUrl: './mis-publicaciones.component.html',
  styleUrls: ['./mis-publicaciones.component.css']
})
export class MisPublicacionesComponent implements OnInit {
  publicaciones: any;
  publicacionesOriginales: any;
  publicacionSeleccionada: any;
  faHeart = faHeart;
  filtrosSexo: string[] = [];
  filtrosTamanio: string[] = [];
  filtrosDes: string[] = [];
  filtrosVac: string[] = [];
  filtrosCas: string[] = [];
  filtrosLib: string[] = [];
  displayFiltros = "none";
  displayEditar = "none";
  usuarioPerroSeleccionado: string = '';


  constructor(private publicacionService: MisPublicacionesService, private authService: AuthService) {}
  

  ngOnInit() {
    // Obtén al usuario logeado
    const userId = this.authService.getCurrentUser();

    if (userId !== null) {
      this.publicaciones = [];
      this.publicacionSeleccionada = null;
      // Obtiene todas las publicaciones, luego filtra por usuario logeado
      this.publicacionService.obtenerPublicaciones().subscribe(
        (data: Perro[]) => {
          this.publicacionesOriginales = data.filter(publicacion => publicacion.usuario === userId);
          this.publicaciones = [...this.publicacionesOriginales];
        },
        (error) => {
          console.error('Error al cargar las publicaciones:', error);
        }
      );
    } else {
      // Maneja el caso en el que no se haya encontrado un usuario logeado
    }
  }
  
  abrirFiltros() {
    this.displayFiltros= "block";
    const contenidoPrincipal = document.getElementById("contenidoPrincipal");
    if (contenidoPrincipal) {
        contenidoPrincipal.style.display = "block";
    }
  }

  onCloseHandled() {
    this.displayFiltros = "none";
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

  editarPubli(publicacion: any) {
    this.publicacionSeleccionada = publicacion;
    const imageUrl = this.publicacionSeleccionada.fotoPerro;
    const parts = imageUrl.split('/');
    const fileName = parts[parts.length - 1];
    console.log(fileName); // Esto mostrará 'perrito_KiOgH9q.jpg'
    console.log(this.publicacionSeleccionada.fotoPerro);
    this.displayEditar = "block";
  }

  onCloseHandledEditar() {
    this.displayEditar = "none";
  }

  mostrarImagen() {
    const imgPreviewElement: HTMLElement = document.getElementById('imgPreview')!;
    const fotoPerroInput: HTMLInputElement = document.getElementById('fotoPerroModal') as HTMLInputElement;

    if (fotoPerroInput.files && fotoPerroInput.files[0]) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        imgPreviewElement.innerHTML = `<img src="${e.target.result}" id="fotoInputPerro" style="max-width: 300px; max-height: 300px; margin-bottom: 10px"/>`;
      };

      reader.readAsDataURL(fotoPerroInput.files[0]);
    }
  }

  onAceptarEdicion() {
    if (this.publicacionSeleccionada) {
      const publicacionEditada = {
        nombrePerro: this.publicacionSeleccionada.nombrePerro,
        edadPerro: this.publicacionSeleccionada.edadPerro,
        sexoPerro: this.publicacionSeleccionada.sexoPerro,
        tamanioPerro: this.publicacionSeleccionada.tamanioPerro,
        desparasitadoPerro: this.publicacionSeleccionada.desparasitadoPerro,
        vacunadoPerro: this.publicacionSeleccionada.vacunadoPerro,
        libretaPerro: this.publicacionSeleccionada.libretaPerro,
        castradoPerro: this.publicacionSeleccionada.castradoPerro,
        fotoPerro: this.publicacionSeleccionada.fotoPerro
      };
  
      const nuevaFotoInput: HTMLInputElement = document.getElementById('fotoPerroModal') as HTMLInputElement;
      if (nuevaFotoInput && nuevaFotoInput.files && nuevaFotoInput.files.length > 0) {
        // Aquí mantienes el nuevo valor solo si se selecciona una nueva foto
        const nuevaFotoFile = nuevaFotoInput.files[0];
        publicacionEditada.fotoPerro = nuevaFotoFile;
      }
      else {
        const imageUrl = this.publicacionSeleccionada.fotoPerro;
        const parts = imageUrl.split('/');
        const fileName = parts[parts.length - 1];
        const urlCompleta = 'perros/' + fileName;
        publicacionEditada.fotoPerro = urlCompleta;
      }
  
      const formData = new FormData();
      formData.append('nombrePerro', publicacionEditada.nombrePerro);
      formData.append('edadPerro', publicacionEditada.edadPerro);
      formData.append('sexoPerro', publicacionEditada.sexoPerro);
      formData.append('tamanioPerro', publicacionEditada.tamanioPerro);
      formData.append('desparasitadoPerro', publicacionEditada.desparasitadoPerro);
      formData.append('vacunadoPerro', publicacionEditada.vacunadoPerro);
      formData.append('libretaPerro', publicacionEditada.libretaPerro);
      formData.append('castradoPerro', publicacionEditada.castradoPerro);
      formData.append('fotoPerro', publicacionEditada.fotoPerro);
  
      this.publicacionService.editarPublicacion(this.publicacionSeleccionada.id, formData).subscribe(
        (response) => {
          console.log('Publicación editada exitosamente', response);
          this.onCloseHandledEditar();
        },
        (error) => {
          console.error('Error al editar la publicación', error);
        }
      );
    }
  }
  eliminarPublicacion(publicacion: any) {
    const confirmarEliminacion = confirm('¿Estás seguro de que deseas eliminar esta publicación?');
  
    if (confirmarEliminacion) {
      this.publicacionService.eliminarPublicacion(publicacion.id).subscribe(
        () => {
          // Eliminar la publicación de la lista local de publicaciones
          this.publicaciones = this.publicaciones.filter((p: any) => p.id !== publicacion.id);
        },
        (error) => {
          console.error('Error al eliminar la publicación', error);
        }
      );
    }
  }
}  

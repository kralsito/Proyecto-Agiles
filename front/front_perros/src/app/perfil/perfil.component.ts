import { Component, OnInit } from '@angular/core';
import { RetrieveService } from './service-retrieve/retrieve.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{
  currentUserId: number | null = null; // Para almacenar el id del usuario logueado
  currentUserEmail: string | null = null; // Para almacenar el correo del usuario logueado
  currentProfileNombre: string | null = null;
  currentProfileApellido: string | null = null;
  currentProfileTelefono: number | null = null;
  currentProfileLocalidad: string | null = null;
  currentProfileId: number | null = null;
  currentProfile: any = {}; // Debes definir esta propiedad y asegurarte de que esté inicializada

  perfilSeleccionado: any = {}; // Aquí almacenaremos el perfil que se está editando.
  displayEditarPerfil = 'none';

  constructor(private retrieveService: RetrieveService) {}

  ngOnInit() {
    // Llama a getCurrentUser para obtener el correo del usuario logueado
    const currentUserMail = this.retrieveService.getCurrentUserEmail();
    const currentUserId = this.retrieveService.getCurrentUser();

    if (currentUserMail !== null) {
      this.currentUserEmail = currentUserMail.toString(); // Convierte el número a una cadena
    } else {
      this.currentUserEmail = null; // Maneja el caso nulo si es necesario
    }
    console.log(currentUserMail)

    const currentProfile = this.retrieveService.getCurrentUserProfile();

    if (currentProfile !== null) {
      this.currentProfile = currentProfile;
      this.currentProfileNombre = currentProfile.nombrePerfil;
      this.currentProfileApellido = currentProfile.apellidoPerfil;
      this.currentProfileTelefono = currentProfile.telefonoPerfil;
      this.currentProfileLocalidad = currentProfile.localidadPerfil;
      this.currentProfileId = currentProfile.idPerfil;
    } else {
      this.currentProfile = {};
      this.currentProfileNombre = null;
      this.currentProfileApellido = null;
      this.currentProfileTelefono = null;
      this.currentProfileLocalidad = null;
      this.currentProfileId = null;
    }
  }
  abrirModalEditarPerfil() {
    this.perfilSeleccionado = { ...this.currentProfile }; // Copiar el perfil actual para editarlo
    this.displayEditarPerfil = 'block';
  }

  guardarCambiosPerfil() {
    if (this.perfilSeleccionado && this.currentProfileId) {
      const perfilEditado = {
        nombrePerfil: this.perfilSeleccionado.nombrePerfil,
        apellidoPerfil: this.perfilSeleccionado.apellidoPerfil,
        telefono: this.perfilSeleccionado.telefono,
        localidad: this.perfilSeleccionado.localidad
      };
  
      this.retrieveService.editarPerfil(this.currentProfileId, perfilEditado).subscribe(
        response => {
          console.log('Perfil actualizado correctamente');
          this.currentProfileNombre = perfilEditado.nombrePerfil;
          this.currentProfileApellido = perfilEditado.apellidoPerfil;
          this.currentProfileTelefono = perfilEditado.telefono;
          this.currentProfileLocalidad = perfilEditado.localidad;
          this.displayEditarPerfil = 'none'; // Cerrar el modal
        },
        error => {
          console.error('Error al actualizar el perfil', error);
          // Manejar el error de acuerdo a tus necesidades
        }
      );
    }
  }

  onCloseHandledEditarPerfil() {
    this.displayEditarPerfil = 'none'; // Cerrar el modal sin guardar cambios
  }

}

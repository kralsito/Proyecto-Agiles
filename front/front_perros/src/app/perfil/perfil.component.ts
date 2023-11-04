import { Component, OnInit } from '@angular/core';
import { RetrieveService } from './service-retrieve/retrieve.service';
import { ActivatedRoute } from '@angular/router';
import { PerfilOtroService } from '../perfil-otro/perfil-otro.service';

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
  currentProfile: any; // Debes definir esta propiedad y asegurarte de que esté inicializada

  perfilSeleccionado: any; // Aquí almacenaremos el perfil que se está editando.
  displayEditarPerfil = 'none';

  constructor(private retrieveService: RetrieveService, private route: ActivatedRoute, private perfilOtroService: PerfilOtroService) {}

  ngOnInit() {
    // Llama a getCurrentUser para obtener el correo del usuario logueado
    const currentUserMail = this.retrieveService.getCurrentUserEmail();
    const currentUserId = this.retrieveService.getCurrentUser();
    if (currentUserId) {
      this.perfilOtroService.obtenerPerfilOtroUsuario(+currentUserId).subscribe(
        (data) => {
          this.currentProfile = data;
          this.currentProfileNombre = this.currentProfile.perfil_data.nombrePerfil;
          this.currentProfileApellido = this.currentProfile.perfil_data.apellidoPerfil;
          this.currentProfileTelefono = this.currentProfile.perfil_data.telefono;
          this.currentProfileLocalidad = this.currentProfile.perfil_data.localidad;
          this.currentUserEmail = this.currentProfile.user_data.email;
          this.currentProfileId = this.currentProfile.perfil_data.id;
        },
        (error) => {
          console.error('Error al obtener el perfil del otro usuario', error);
        }
      );
    }


    //if (currentUserMail !== null) {
    //  this.currentUserEmail = currentUserMail.toString(); // Convierte el número a una cadena
    //} else {
    //  this.currentUserEmail = null; // Maneja el caso nulo si es necesario
    //}
    //console.log(currentUserMail)

    //const currentProfile = this.retrieveService.getCurrentUserProfile();

    //if (currentProfile !== null) {
    //  this.currentProfile = currentProfile;
    //  this.currentProfileNombre = currentProfile.nombrePerfil;
    //  this.currentProfileApellido = currentProfile.apellidoPerfil;
    //  this.currentProfileTelefono = currentProfile.telefonoPerfil;
    //  this.currentProfileLocalidad = currentProfile.localidadPerfil;
    //  this.currentProfileId = currentProfile.idPerfil;
    //} else {
    //  this.currentProfile = {};
    //  this.currentProfileNombre = null;
    //  this.currentProfileApellido = null;
    //  this.currentProfileTelefono = null;
    //  this.currentProfileLocalidad = null;
    //  this.currentProfileId = null;
    //}
  }
  abrirModalEditarPerfil() {
    console.log(this.currentProfileId);
    this.perfilSeleccionado = this.currentProfile;
    console.log(this.perfilSeleccionado); // Copiar el perfil actual para editarlo
    this.displayEditarPerfil = 'block';
  }

  guardarCambiosPerfil() {
    if (this.currentProfile && this.currentProfileId) {
      const perfilEditado = {
        nombrePerfil: this.perfilSeleccionado.perfil_data.nombrePerfil,
        apellidoPerfil: this.perfilSeleccionado.perfil_data.apellidoPerfil,
        telefono: this.perfilSeleccionado.perfil_data.telefono,
        localidad: this.perfilSeleccionado.perfil_data.localidad
      };
      console.log(perfilEditado);
  
      this.retrieveService.editarPerfil(this.currentProfileId, perfilEditado).subscribe(
        response => {
          console.log('Perfil actualizado correctamente');
          this.displayEditarPerfil = 'none'; // Cerrar el modal
          // Refrescar la página para mostrar los cambios
          window.location.reload();
        },
        error => {
          console.error('Error al actualizar el perfil', error);
          // Manejar el error de acuerdo a tus necesidades
        }
      );
    } else{
      console.error('No se puede actualizar el perfil porque no se ha obtenido el id del perfil');
    }
  }

  onCloseHandledEditarPerfil() {
    this.displayEditarPerfil = 'none'; // Cerrar el modal sin guardar cambios
  }

}

import { Component, OnInit } from '@angular/core';
import { RetrieveService } from './service-retrieve/retrieve.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{
  currentUserEmail: string | null = null; // Para almacenar el correo del usuario logueado
  currentProfileNombre: string | null = null;
  currentProfileApellido: string | null = null;
  currentProfileTelefono: number | null = null;
  currentProfileLocalidad: string | null = null;

  constructor(private retrieveService: RetrieveService) {}

  ngOnInit() {
    // Llama a getCurrentUser para obtener el correo del usuario logueado
    const currentUserMail = this.retrieveService.getCurrentUserEmail();

    if (currentUserMail !== null) {
      this.currentUserEmail = currentUserMail.toString(); // Convierte el número a una cadena
    } else {
      this.currentUserEmail = null; // Maneja el caso nulo si es necesario
    }
    console.log(currentUserMail)

    const currentProfile = this.retrieveService.getCurrentUserProfile();

    if (currentProfile !== null) {
      this.currentProfileNombre = currentProfile.nombrePerfil;
      this.currentProfileApellido = currentProfile.apellidoPerfil;
      this.currentProfileTelefono = currentProfile.telefonoPerfil;
      this.currentProfileLocalidad = currentProfile.localidadPerfil;
    } else {
      this.currentProfileNombre = null;
      this.currentProfileApellido = null;
      this.currentProfileTelefono = null;
      this.currentProfileLocalidad = null;
    }
  }
}

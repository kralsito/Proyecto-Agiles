import { Component, OnInit } from '@angular/core';
import { AuthService } from '../guards/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{
  currentUserEmail: string | null = null; // Para almacenar el correo del usuario logueado

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Llama a getCurrentUser para obtener el correo del usuario logueado
    const currentUser = this.authService.getCurrentUserEmail();

    if (currentUser !== null) {
      this.currentUserEmail = currentUser.toString(); // Convierte el número a una cadena
    } else {
      this.currentUserEmail = null; // Maneja el caso nulo si es necesario
    }
    console.log(currentUser)
  }
}

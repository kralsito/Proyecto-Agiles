import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogCerrarSesionService } from './dialog-cerrar-sesion.service';

@Component({
  selector: 'app-dialog-cerrar-sesion',
  templateUrl: './dialog-cerrar-sesion.component.html',
  styleUrls: ['./dialog-cerrar-sesion.component.css']
})
export class DialogCerrarSesionComponent {
  constructor(public dialogRef: MatDialogRef<DialogCerrarSesionComponent>, private dialogCerrarSesionService:DialogCerrarSesionService) {}
  confirmLogout() {
    this.dialogCerrarSesionService.logout().subscribe(
      (response) => {
        console.log('Cierre de sesión exitoso', response);
        this.dialogRef.close(true); 
      },
      (error) => {
        console.error('Error al cerrar sesión', error);
      }
    );
  }
  cancelLogout() {
    this.dialogRef.close(false); 
  }
}

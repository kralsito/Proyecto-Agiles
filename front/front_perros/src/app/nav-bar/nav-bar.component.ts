import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogCerrarSesionComponent } from '../dialog-cerrar-sesion/dialog-cerrar-sesion.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(public dialog: MatDialog, private router: Router) { }
  openDialog() {
     const dialogRef = this.dialog.open(DialogCerrarSesionComponent);
    
     dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/login']);
      }
    });
  }
}

import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-alert-credenciales-invalidas',
  templateUrl: './alert-credenciales-invalidas.component.html',
  styleUrls: ['./alert-credenciales-invalidas.component.css']
})
export class AlertCredencialesInvalidasComponent {
  constructor(
    private dialogRef: MatDialogRef<AlertCredencialesInvalidasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  cerrarAlerta(): void {
    this.dialogRef.close();
  }
}

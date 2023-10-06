import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-mail-duplicado',
  templateUrl: './alert-mail-duplicado.component.html',
})
export class AlertMailDuplicadoComponent {
  constructor(
    private dialogRef: MatDialogRef<AlertMailDuplicadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  cerrarAlerta(): void {
    this.dialogRef.close();
  }
}
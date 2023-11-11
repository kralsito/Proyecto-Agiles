import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { AlertCredencialesInvalidasComponent } from '../alerts/alert-credenciales-invalidas/alert-credenciales-invalidas.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public myForm!: FormGroup;
  public errorMessage: string = '';

  constructor(private fb: FormBuilder, private loginService: LoginService, private dialog: MatDialog,) {}

  ngOnInit(): void {
    this.myForm = this.createMyForm();
  }

  private createMyForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  public submitFormulario() {
    if (this.myForm.invalid) {
      Object.values(this.myForm.controls).forEach((control) => {
        control.markAllAsTouched();
      });
    } else {
      const email = this.myForm.get('email')?.value;
      const password = this.myForm.get('password')?.value;

      this.loginService.login(email, password).subscribe(
        (response) => {
          console.log('Inicio de sesión exitoso', response);
          localStorage.setItem('token', response.jwt);
          window.location.href = '/';
        },
        (error) => {
          console.error('Error al iniciar sesión', error);
          this.errorMessage = 'Credenciales inválidas';
          this.mostrarAlertaCredencialesInvalidas();
        }
      );
    }
  }

  public get f(): any {
    return this.myForm.controls;
  }

  mostrarAlertaCredencialesInvalidas() {
    const dialogRef = this.dialog.open(AlertCredencialesInvalidasComponent, {
      width: '300px',
      data: { mensaje: 'Credenciales inválidas. Revise los datos.' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Alerta cerrada');
    });
  }
}

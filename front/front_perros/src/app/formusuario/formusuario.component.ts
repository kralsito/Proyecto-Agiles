import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { Perfil } from '../perfil.model';
import { LoggingService } from '../LoggingService.service';
import { FormuserService } from './formuser.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AlertMailDuplicadoComponent } from '../alert-mail-duplicado/alert-mail-duplicado.component';
import { FormperfilService } from '../perfil/formperfil.service';

@Component({
  selector: 'app-formusuario',
  templateUrl: './formusuario.component.html',
  styleUrls: ['./formusuario.component.css'],
})
export class FormusuarioComponent implements OnInit {
  repeatPass: string = 'none';
  display = 'none';
  constructor(
    private loggingService: LoggingService,
    private formuserService: FormuserService,
    private dialog: MatDialog,
    private formperfilService: FormperfilService
  ) {}

  ngOnInit(): void {}

  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.pattern('[a-zA-Z].*'),
    ]),
    apellido: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.pattern('[a-zA-Z].*'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    provincia: new FormControl('', [Validators.required]),
    localidad: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confPassword: new FormControl(''),
    terminos: new FormControl('', [Validators.required]),
  });

  submitForm() {
    if (this.password.value == this.confPassword.value) {
      const usuario: Usuario = {
        email: this.email.value,
        password: this.password.value,
      };

      // Crear un objeto que contenga tanto los datos del usuario como del perfil
      const perfil = {
        nombrePerfil: this.name.value,
        apellidoPerfil: this.apellido.value,
        telefono: this.telefono.value,
        localidad: this.localidad.value,
      };

      // Llamar al método altaUsuario del formuserService
      this.formuserService.altaUsuario(usuario).subscribe(
        (userResponse) => {
          console.log('Usuario creado exitosamente', userResponse);

          // Una vez que se ha creado el usuario, puedes crear el perfil
          this.formperfilService
            .altaPerfil({
              usuario: userResponse.id, // userResponse debería contener el ID del usuario recién creado
              ...perfil,
            })
            .subscribe(
              (profileResponse) => {
                console.log('Perfil creado exitosamente', profileResponse);
                this.display = "block";
              },
              (profileError) => {
                console.error('Error al crear el perfil', profileError);
              }
            );
        },
        (userError) => {
          console.error('Error al crear el usuario', userError);
          if (userError.status === 400) {
            this.mostrarAlertaCorreoDuplicado();
          }
        }
      );
    } else {
      this.repeatPass = 'inline';
    }
  }

  get name(): FormControl {
    return this.registerForm.get('name') as FormControl;
  }

  get apellido(): FormControl {
    return this.registerForm.get('apellido') as FormControl;
  }

  get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get telefono(): FormControl {
    return this.registerForm.get('telefono') as FormControl;
  }

  get provincia(): FormControl {
    return this.registerForm.get('provincia') as FormControl;
  }

  get localidad(): FormControl {
    return this.registerForm.get('localidad') as FormControl;
  }

  get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  get confPassword(): FormControl {
    return this.registerForm.get('confPassword') as FormControl;
  }

  get terminos(): FormControl {
    return this.registerForm.get('terminos') as FormControl;
  }
  // Método onCloseHandled() para cerrar el formulario y redirigir a "/login"
  onCloseHandled() {
    this.display = 'none';
    window.location.href = '/login';
  }

  // Método onCloseHandledInicio() para cerrar el formulario y redirigir a "/"
  onCloseHandledInicio() {
    this.display = 'none';
    window.location.href = '/';
  }
  mostrarAlertaCorreoDuplicado() {
    const dialogRef = this.dialog.open(AlertMailDuplicadoComponent, {
      width: '300px',
      data: { mensaje: 'El correo electrónico ya está registrado.' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Alerta cerrada');
    });
  }
}

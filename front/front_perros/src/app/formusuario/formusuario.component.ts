import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { LoggingService } from '../LoggingService.service';
import { FormuserService } from './formuser.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertMailDuplicadoComponent } from '../alert-mail-duplicado/alert-mail-duplicado.component';

@Component({
  selector: 'app-formusuario',
  templateUrl: './formusuario.component.html',
  styleUrls: ['./formusuario.component.css']
})
export class FormusuarioComponent implements OnInit {
  repeatPass: string = 'none';
  display = "none";
  constructor(private loggingService: LoggingService, private formuserService: FormuserService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    name: new FormControl("", 
    [Validators.required, 
      Validators.minLength(3), 
      Validators.maxLength(30),
      Validators.pattern("[a-zA-Z].*")]),
    apellido: new FormControl("", 
    [Validators.required, 
      Validators.minLength(3), 
      Validators.maxLength(30),
      Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("", [Validators.required, Validators.email]),
    telefono: new FormControl("", [Validators.required, 
      Validators.minLength(10),
      Validators.maxLength(10)]),
    provincia: new FormControl("", [Validators.required]),
    localidad: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    confPassword: new FormControl(""),
    terminos: new FormControl("", [Validators.required])
  });



  submitForm(){
    if(this.password.value == this.confPassword.value){
      const usuario: Usuario = {
        name: this.name.value,
        apellidoUsuario: this.apellido.value,
        email: this.email.value,
        telefono: parseInt(this.telefono.value),
        provincia: this.provincia.value,
        localidad: this.localidad.value,
        password: this.password.value,
    };
    // Llamar al método altaUsuario del formuserService
    this.formuserService.altaUsuario(usuario).subscribe(
      (response) => {
        console.log('Usuario creado exitosamente', response);
        this.display= "block";
      },
      (error) => {
        console.error('Error al crear el usuario', error);
        if (error.status === 400) {
            this.mostrarAlertaCorreoDuplicado();
        }
      }
    );
  }else{
      this.repeatPass = 'inline';
    }
    
  }

  get name(): FormControl {
    return this.registerForm.get("name") as FormControl;
  }

  get apellido(): FormControl {
    return this.registerForm.get("apellido") as FormControl;
  }

  get email(): FormControl {
    return this.registerForm.get("email") as FormControl;
  }

  get telefono(): FormControl {
    return this.registerForm.get("telefono") as FormControl;
  }
  
  get provincia(): FormControl {
    return this.registerForm.get("provincia") as FormControl;
  }

  get localidad(): FormControl {
    return this.registerForm.get("localidad") as FormControl;
  }

  get password(): FormControl {
    return this.registerForm.get("password") as FormControl;
  }

  get confPassword(): FormControl {
    return this.registerForm.get("confPassword") as FormControl;
  }

  get terminos(): FormControl {
    return this.registerForm.get("terminos") as FormControl;
  }
  // Método onCloseHandled() para cerrar el formulario y redirigir a "/login"
  onCloseHandled() {
    this.display = "none";
    window.location.href = "/login";
  }

  // Método onCloseHandledInicio() para cerrar el formulario y redirigir a "/"
  onCloseHandledInicio() {
    this.display = "none";
    window.location.href = "/";
  }
  mostrarAlertaCorreoDuplicado() {
    const dialogRef = this.dialog.open(AlertMailDuplicadoComponent, {
      width: '300px',
      data: { mensaje: 'El correo electrónico ya está registrado.' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Alerta cerrada');
    });
  }
}
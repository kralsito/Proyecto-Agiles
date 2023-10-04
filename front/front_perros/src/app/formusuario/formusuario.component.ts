import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { LoggingService } from '../LoggingService.service';
import { FormuserService } from './formuser.service';


@Component({
  selector: 'app-formusuario',
  templateUrl: './formusuario.component.html',
  styleUrls: ['./formusuario.component.css']
})
export class FormusuarioComponent implements OnInit {
  display = "none";
  public checkboxAceptado: boolean = false;
  public mensajeError: string = '';
  constructor(private loggingService: LoggingService, private formuserService: FormuserService) { }

  ngOnInit() {
  }

  actualizarEstadoBoton() {
    const botonSubmit = document.querySelector('.boton') as HTMLButtonElement;
    botonSubmit.disabled = !this.checkboxAceptado;
  }
  onAgregarUsuario() {

    const nombre = (document.getElementById('nombreUsuario') as HTMLInputElement).value;
    const apellido = (document.getElementById('apellidoUsuario') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const telefono = (document.getElementById('telefono') as HTMLInputElement).value;
    const provincia = (document.getElementById('provincia') as HTMLInputElement).value;
    const localidad = (document.getElementById('localidad') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const confPassword = (document.getElementById('confirmarPassword') as HTMLInputElement).value;

    if (password !== confPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    else {
      const usuario: Usuario = {
        nombreUsuario: nombre,
        apellidoUsuario: apellido,
        email: email,
        telefono: parseInt(telefono),
        provincia: provincia,
        localidad: localidad,
        password: password,
      };

      const formData = new FormData();
      formData.append('nombreUsuario', nombre);
      formData.append('apellidoUsuario', apellido);
      formData.append('email', email);
      formData.append('telefono', telefono);
      formData.append('provincia', provincia);
      formData.append('localidad', localidad);
      formData.append('password', password);

      this.formuserService.altaUsuario(usuario).subscribe(
        (response) => {
          console.log('Usuario creado exitosamente', response);
          this.display = "block";
        },
        (error) => {
          console.error('Error al crear el usuario', error);
        }
      );
    }

  }
  onCloseHandled() {
    this.display = "none";
    window.location.href = "/login";
  }
  onCloseHandledInicio() {
    this.display = "none";
    window.location.href = "/";
  }
}

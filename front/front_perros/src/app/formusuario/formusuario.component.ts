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
    const email = (document.getElementById('emailUsuario') as HTMLInputElement).value;
    const telefono = (document.getElementById('telefonoUsuario') as HTMLInputElement).value;
    const provincia = (document.getElementById('provinciaUsuario') as HTMLInputElement).value;
    const localidad = (document.getElementById('localidadUsuario') as HTMLInputElement).value;
    const password = (document.getElementById('passwordUsuario') as HTMLInputElement).value;
    const confPassword = (document.getElementById('confirmarPassword') as HTMLInputElement).value;

    if (password !== confPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    else {
      const usuario: Usuario = {
        nombreUsuario: nombre,
        apellidoUsuario: apellido,
        emailUsuario: email,
        telefonoUsuario: parseInt(telefono),
        provinciaUsuario: provincia,
        localidadUsuario: localidad,
        passwordUsuario: password,
      };

      const formData = new FormData();
      formData.append('nombreUsuario', nombre);
      formData.append('apellidoUsuario', apellido);
      formData.append('emailUsuario', email);
      formData.append('telefonoUsuario', telefono);
      formData.append('provinciaUsuario', provincia);
      formData.append('localidadUsuario', localidad);
      formData.append('passwordUsuario', password);

      this.formuserService.altaUsuario(usuario).subscribe(
        (response) => {
          console.log('Usuario creado exitosamente', response);
        },
        (error) => {
          console.error('Error al crear el usuario', error);
        }
      );
    }

  }
}

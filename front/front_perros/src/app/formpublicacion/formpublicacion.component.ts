import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Perro } from '../perro.model';
import { LoggingService } from '../LoggingService.service';

@Component({
  selector: 'app-formpublicacion',
  templateUrl: './formpublicacion.component.html',
  styleUrls: ['./formpublicacion.component.css'],
})
export class FormpublicacionComponent {
  @Output() perroCreado = new EventEmitter<Perro>();

  //nombreInput: string = '';
  //apellidoInput: string = '';

  constructor(private loggingService:LoggingService) {}

  agregarPerro(
    nombreInput: HTMLInputElement,
    edadInput: HTMLInputElement
  ) {
    let perro1 = new Perro(
      nombreInput.value, 
      edadInput.valueAsNumber
    );

    this.loggingService.enviarMensajeAConsola("Enviamos perro con nombre: " + perro1.nombre + " y edad: " + perro1.edad);
    this.perroCreado.emit(perro1);
  }
}


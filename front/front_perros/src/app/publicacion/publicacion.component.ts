import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Perro } from '../perro.model';
import { LoggingService } from '../LoggingService.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent {
  @Output() perroCreado = new EventEmitter<Perro>();
  
  @ViewChild('ciudadInput') ciudadInput: ElementRef;
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('edadInput') edadInput: ElementRef;
  @ViewChild('sexoInput') sexoInput: ElementRef;
  @ViewChild('tamañoInput') tamañoInput: ElementRef;

  constructor(private loggingService: LoggingService) {}

  agregarPerro(
    nombreInput: HTMLInputElement,
    edadInput: HTMLInputElement,
    sexoInput: HTMLSelectElement,
    tamañoInput: HTMLSelectElement,
    ciudadInput: HTMLSelectElement
  ) {
    let perro1 = new Perro(
      this.nombreInput.nativeElement.value,
      parseInt(this.edadInput.nativeElement.value),
      this.sexoInput.nativeElement.value,
      this.tamañoInput.nativeElement.value,
      this.ciudadInput.nativeElement.value
    );

    this.loggingService.enviaMensajeAConsola("Enviamos perro: " + perro1.nombre);
    this.perroCreado.emit(perro1);
  }
}

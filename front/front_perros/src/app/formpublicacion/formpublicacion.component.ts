import { Component } from '@angular/core';
import { Perro } from '../perro.model';
import { LoggingService } from '../LoggingService.service';
import { PerrosService } from '../perros.service';

@Component({
  selector: 'app-formpublicacion',
  templateUrl: './formpublicacion.component.html',
  styleUrls: ['./formpublicacion.component.css'],
})
export class FormpublicacionComponent {

  constructor(private loggingService: LoggingService, private perrosService: PerrosService) {}

  ngOnInit() {
  }

  onAgregarPerro(
    nombreInput: HTMLInputElement,
    edadInput: HTMLInputElement,
    sexoSelect: HTMLSelectElement,
    tamanioSelect: HTMLSelectElement,
    imagenInput: HTMLInputElement
  ) {
    let perro1 = new Perro(
      nombreInput.value,
      edadInput.valueAsNumber,
      sexoSelect.value,
      tamanioSelect.value,
      imagenInput.value
    );

    this.perrosService.agregarPerro(perro1);
    //this.loggingService.enviarMensajeAConsola(
    //  "Enviamos perro con nombre: " +
    //    perro1.nombre +
    //    ", edad: " +
    //    perro1.edad +
    //    ", sexo: " +
    //    perro1.sexo +
    //    ", tamanio: " +
    //    perro1.tamanio +
    //    ", imagen: " +
    //    perro1.foto
    //);
  }
}

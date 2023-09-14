import { Component, OnInit } from '@angular/core';
import { Perro } from '../../perro.model';
import { LoggingService } from '../../LoggingService.service';
import { FormpubliService } from './formpubli.service';

@Component({
  selector: 'app-formpublicacion',
  templateUrl: './formpublicacion.component.html',
  styleUrls: ['./formpublicacion.component.css'],
})
export class FormpublicacionComponent implements OnInit {

  constructor(private loggingService: LoggingService, private formpubliService: FormpubliService) {}

  ngOnInit() {
  }
  
  onAgregarPerro() {
    const nombre = (document.getElementById('nombrePerro') as HTMLInputElement).value;
    const edad = (document.getElementById('edadPerro') as HTMLInputElement).value;
    const sexo = (document.getElementById('sexoPerro') as HTMLSelectElement).value;
    const tamanio = (document.getElementById('tamanioPerro') as HTMLSelectElement).value;
    const fotoInput = document.getElementById('fotoPerro') as HTMLInputElement;
  
    // Verificar que fotoInput no sea nulo
    if (fotoInput) {
      const fotoFile = fotoInput.files?.[0]; // Obtener el archivo seleccionado (usando el operador '?')
  
      const perro: Perro = {
        nombrePerro: nombre,
        edadPerro: edad,
        sexoPerro: sexo,
        tamanioPerro: tamanio,
        fotoPerro: fotoFile || null, // Asignar el archivo seleccionado o null si no se seleccionó ningún archivo
      };
  
      const formData = new FormData();
      formData.append('nombrePerro', nombre);
      formData.append('edadPerro', edad);
      formData.append('sexoPerro', sexo);
      formData.append('tamanioPerro', tamanio);
  
      if (fotoFile) {
        formData.append('fotoPerro', fotoFile);
      }
  
      this.formpubliService.altaPublicacion(formData).subscribe(
        (response) => {
          console.log('Publicación creada exitosamente', response);
        },
        (error) => {
          console.error('Error al crear la publicación', error);
        }
      );
    } else {
      console.error('Elemento de entrada de imagen no encontrado.');
    }
  }
  }
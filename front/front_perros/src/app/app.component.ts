import { Component } from '@angular/core';
import { Perro } from './perro.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Datos del Perro';
  perros: Perro[] = [
    new Perro('Chicho', 5, 'Macho', 'Chico'),
    new Perro('Lolo', 7, 'Macho', 'Mediano'),
    new Perro('Luna', 3, 'Hembra', 'Grande')
  ];

  perroAgregado(perro: Perro){
    this.perros.push(perro);
  }
}

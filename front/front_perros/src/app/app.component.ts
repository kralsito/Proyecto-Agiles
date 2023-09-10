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
    new Perro('Chicho', 5),
    new Perro('Lolo', 7),
    new Perro('Luna', 3)
  ];

  perroAgregado(perro: Perro){
    this.perros.push(perro);
  }
}

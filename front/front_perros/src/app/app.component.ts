import { Component } from '@angular/core';
import { Perro } from './perro.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  perros: Perro[] = [
    new Perro('Chicho', 3, 'Macho', 'Grande', 'La Plata'),
    new Perro('Lola', 2, 'Hembra', 'Mediano', 'La Plata'),
  ];

  perroAgregado(perro: Perro) {
    this.perros.push(perro);
  }
}

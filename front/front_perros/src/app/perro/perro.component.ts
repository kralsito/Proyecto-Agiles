import { Component, Input } from '@angular/core';
import { Perro } from '../perro.model';

@Component({
  selector: 'app-perro',
  templateUrl: './perro.component.html',
  styleUrls: ['./perro.component.css']
})
export class PerroComponent {

    @Input() perro: Perro;
    @Input() indice: number;
}

import { Component, OnInit, Input } from '@angular/core';
import { Perro } from '../../perro.model';
import { PerrosService } from 'src/app/perros.service';

@Component({
  selector: 'app-perro',
  templateUrl: './perro.component.html',
  styleUrls: ['./perro.component.css']
})
export class PerroComponent implements OnInit {

  @Input() perro!: Perro;
  @Input() indice!: number;

  constructor(private perrosService: PerrosService) { }

  ngOnInit(): void {
    
  }
}

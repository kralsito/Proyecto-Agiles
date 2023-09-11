import { Component, OnInit } from '@angular/core';
import { Perro } from './perro.model';
import { LoggingService } from './LoggingService.service';
import { PerrosService } from './perros.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  titulo = 'Datos del Perro';
  perros: Perro[] = [];

  constructor(private loggingService: LoggingService,
    private perrosService: PerrosService){}

  ngOnInit(): void {
    this.perros = this.perrosService.perros;
  }
}

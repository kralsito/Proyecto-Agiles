import { Component, OnInit } from '@angular/core';
import { Perro } from '../perro.model';
import { LoggingService } from '../LoggingService.service';
import { PerrosService } from '../perros.service';

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.css']
})
export class PerrosComponent implements OnInit {
  
  perros: Perro[] = [];

  constructor(private loggingService: LoggingService,
    private perrosService: PerrosService){}

  ngOnInit(): void {
    this.perros = this.perrosService.perros;
  }

}

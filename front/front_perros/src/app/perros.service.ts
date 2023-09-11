import { Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Perro } from "./perro.model";

@Injectable()
export class PerrosService{
    perros: Perro[] = [
        new Perro('Chicho', 5, 'Macho', 'Chico', 'https://www.hola.com/imagenes/estar-bien/20191002149774/perros-razas-pequenas/0-728-461/razas-pequenas-m.jpg'),
        new Perro('Lolo', 7, 'Macho', 'Mediano', 'https://www.hola.com/imagenes/estar-bien/20191002149774/perros-razas-pequenas/0-728-461/razas-pequenas-m.jpg'),
        new Perro('Luna', 3, 'Hembra', 'Grande', 'https://www.hola.com/imagenes/estar-bien/20191002149774/perros-razas-pequenas/0-728-461/razas-pequenas-m.jpg')
      ];

    constructor(private loggingService: LoggingService){}

    agregarPerro(perro: Perro){
        this.loggingService.enviarMensajeAConsola("Agregamos el perro: " + perro.nombre);
        this.perros.push(perro);
        console.log(this.perros);
    }
}
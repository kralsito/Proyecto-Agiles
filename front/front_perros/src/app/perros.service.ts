import { Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Perro } from "./perro.model";

@Injectable()
export class PerrosService{
    perros: Perro[] = [
        new Perro('Chicho', 5, 'Macho', 'Chico', 'https://upload.wikimedia.org/wikipedia/commons/0/04/Labrador_Retriever_%281210559%29.jpg'),
        new Perro('Lolo', 7, 'Macho', 'Mediano', 'https://upload.wikimedia.org/wikipedia/commons/0/04/Labrador_Retriever_%281210559%29.jpg'),
        new Perro('Luna', 3, 'Hembra', 'Grande', 'https://upload.wikimedia.org/wikipedia/commons/0/04/Labrador_Retriever_%281210559%29.jpg')
      ];

    constructor(private loggingService: LoggingService){}

    agregarPerro(perro: Perro){
        this.loggingService.enviarMensajeAConsola("Agregamos el perro: " + perro.nombre + " " + perro.tamanio + " " + perro.edad + " " + perro.sexo + " " + perro.foto);
        this.perros.push(perro);
        console.log(this.perros);
    }
}
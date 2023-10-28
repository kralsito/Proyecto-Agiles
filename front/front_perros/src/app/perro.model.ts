export class Perro {
    constructor(
      public nombrePerro: string,
      public edadPerro: string,
      public sexoPerro: string,
      public tamanioPerro: string,
      public fotoPerro: File | null,
      public desparasitadoPerro: string,
      public libretaPerro: string,
      public castradoPerro: string,
      public vacunadoPerro: string,
      public usuario: string | number | null  
    ) {}
  }
  
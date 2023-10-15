export class Perro {
    constructor(
      public nombrePerro: string,
      public edadPerro: string,
      public sexoPerro: string,
      public tamanioPerro: string,
      public fotoPerro: File | null,
      public usuario: string | number | null  
    ) {}
  }
  
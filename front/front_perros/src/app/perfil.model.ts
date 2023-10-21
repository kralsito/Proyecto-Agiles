export class Perfil {
    constructor(
      public nombrePerfil: string,
      public apellidoPerfil: string,
      public telefono: string,
      public localidad: string,
      public usuario: string | number | null 
    ) {}
  }
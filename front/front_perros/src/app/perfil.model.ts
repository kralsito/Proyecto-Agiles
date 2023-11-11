export class Perfil {
    constructor(
      public nombrePerfil: string,
      public apellidoPerfil: string,
      public telefono: string,
      public localidad: string,
      public fotoPerfil: File | null,
      public biografia: string | null,
      public usuario: string | number | null 
    ) {}
  }
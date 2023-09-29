export class Usuario {
    constructor(
        public nombreUsuario: string,
        public apellidoUsuario: string,
        public email: string,
        public telefono: number,
        public provincia: string,
        public localidad: string,
        public password: string,
    ){}
}
export class Usuario {
    constructor(
        public name: string,
        public apellidoUsuario: string,
        public email: string,
        public telefono: number,
        public provincia: string,
        public localidad: string,
        public password: string,
    ){}
}
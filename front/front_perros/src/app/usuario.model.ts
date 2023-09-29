export class Usuario {
    constructor(
        public nombreUsuario: string,
        public apellidoUsuario: string,
        public emailUsuario: string,
        public telefonoUsuario: number,
        public provinciaUsuario: string,
        public localidadUsuario: string,
        public passwordUsuario: string,
    ){}
}
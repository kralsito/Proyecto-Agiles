import { Component, OnInit} from '@angular/core';
import { Perro } from '../../perro.model';
import { FormpubliService } from './formpubli.service';
import { AuthService } from '../../guards/auth.service';

@Component({
  selector: 'app-formpublicacion',
  templateUrl: './formpublicacion.component.html',
  styleUrls: ['./formpublicacion.component.css'],
})
export class FormpublicacionComponent implements OnInit {
  display = "none";
  mostrarImagen() {
    const imgPreviewElement: HTMLElement = document.getElementById('imgPreview')!;
    const fotoPerroInput: HTMLInputElement = document.getElementById('fotoPerro') as HTMLInputElement;

    if (fotoPerroInput.files && fotoPerroInput.files[0]) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        imgPreviewElement.innerHTML = `<img src="${e.target.result}" id="fotoInputPerro" style="max-width: 300px; max-height: 300px; margin-bottom: 10px"/>`;
      };

      reader.readAsDataURL(fotoPerroInput.files[0]);
    }
  }
  
  constructor(private authService: AuthService, private formpubliService: FormpubliService) {}

  ngOnInit() {
  }
  
  onAgregarPerro() {
    const nombre = (document.getElementById('nombrePerro') as HTMLInputElement).value;
    const edad = (document.getElementById('edadPerro') as HTMLInputElement).value;
    const sexo = (document.getElementById('sexoPerro') as HTMLSelectElement).value;
    const tamanio = (document.getElementById('tamanioPerro') as HTMLSelectElement).value;
    const fotoInput = document.getElementById('fotoPerro') as HTMLInputElement;
    const libreta = (document.querySelector('input[name="libretaPerro"]:checked') as HTMLInputElement)?.value;
    const desparasitado = (document.querySelector('input[name="desparasitadoPerro"]:checked') as HTMLInputElement)?.value;
    const castrado = (document.querySelector('input[name="castradoPerro"]:checked') as HTMLInputElement)?.value;
    const vacunado = (document.querySelector('input[name="vacunadoPerro"]:checked') as HTMLInputElement)?.value;
    

    console.log('Castrado: ', castrado);
    console.log('Desparasitado: ', desparasitado);
    console.log('Libreta: ', libreta);
    console.log('Vacunado: ', vacunado);
    // Verificar que fotoInput no sea nulo
    if (fotoInput) {
      const fotoFile = fotoInput.files?.[0]; // Obtener el archivo seleccionado (usando el operador '?')
  
      const perro: Perro = {
        nombrePerro: nombre,
        edadPerro: edad,
        sexoPerro: sexo,
        tamanioPerro: tamanio,
        desparasitadoPerro: desparasitado,
        libretaPerro: libreta,
        castradoPerro: castrado,
        vacunadoPerro: vacunado,
        fotoPerro: fotoFile || null, // Asignar el archivo seleccionado o null si no se seleccionó ningún archivo

        usuario: this.authService.getCurrentUser()
      };
  
      const formData = new FormData();
      formData.append('nombrePerro', nombre);
      formData.append('edadPerro', edad);
      formData.append('sexoPerro', sexo);
      formData.append('tamanioPerro', tamanio);
      formData.append('desparasitadoPerro', desparasitado);
      formData.append('libretaPerro', libreta);
      formData.append('castradoPerro', castrado);
      formData.append('vacunadoPerro', vacunado);
      const currentUser = this.authService.getCurrentUser();
      if (currentUser !== null) {
        formData.append('usuario', currentUser.toString());
      }


      if (fotoFile) {
        formData.append('fotoPerro', fotoFile);
      }
      
      this.formpubliService.altaPublicacion(formData).subscribe(
        (response) => {
          console.log('Publicación creada exitosamente', response);
          this.display= "block";
        },
        (error) => {
          console.error('Error al crear la publicación', error);
        }
      );
    } else {
      console.error('Elemento de entrada de imagen no encontrado.');
    }
  }
  onCloseHandled() {
    this.display = "none";
    window.location.href = "/";
  }
  }
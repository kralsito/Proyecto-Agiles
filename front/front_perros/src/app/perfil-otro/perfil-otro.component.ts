import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfilOtroService } from './perfil-otro.service';

@Component({
  selector: 'app-perfil-otro',
  templateUrl: './perfil-otro.component.html',
  styleUrls: ['./perfil-otro.component.css']
})
export class PerfilOtroComponent implements OnInit {
  perfilUsuario: any;

  constructor(private route: ActivatedRoute, private perfilOtroService: PerfilOtroService) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('usuarioId');

    if (userId) {
      this.perfilOtroService.obtenerPerfilOtroUsuario(+userId).subscribe(
        (data) => {
          this.perfilUsuario = data;
        },
        (error) => {
          console.error('Error al obtener el perfil del otro usuario', error);
        }
      );
    }
  }
}


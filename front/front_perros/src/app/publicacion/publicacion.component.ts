import { Component, OnInit } from '@angular/core';
import { PublicacionService } from './publicacion.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {
  publicaciones: any;
  faHeart = faHeart;

  constructor(private publicacionService: PublicacionService) {}

  ngOnInit() {
    this.publicacionService.obtenerPublicaciones().subscribe(
      (data: any) => {
        this.publicaciones = data;
      },
      (error) => {
        console.error('Error al cargar las publicaciones:', error);
      }
    );
  }
}

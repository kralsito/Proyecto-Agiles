import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {
  publicaciones: any;
  faHeart = faHeart;
  constructor(private http: HttpClient) {}
    ngOnInit() {
      this.http.get('http://localhost:8000/api/pagina_perros').subscribe((data: any) => {
        this.publicaciones = data;
      });
   }
}

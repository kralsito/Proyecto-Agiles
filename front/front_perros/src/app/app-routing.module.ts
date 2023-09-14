import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { FormpublicacionComponent } from './perros/formpublicacion/formpublicacion.component';

const routes: Routes = [
  { path: 'publicacion', component: PublicacionComponent },
  { path: '', component: PublicacionComponent },
  { path: 'formpublicacion', component: FormpublicacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

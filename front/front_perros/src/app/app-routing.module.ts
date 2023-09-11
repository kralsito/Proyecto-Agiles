import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicacionComponent } from './publicacion/publicacion.component';

const routes: Routes = [
  { path: 'publicacion', component: PublicacionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

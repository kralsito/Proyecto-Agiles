import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { FormpublicacionComponent } from './perros/formpublicacion/formpublicacion.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { TituloYEsloganComponent } from './titulo-yeslogan/titulo-yeslogan.component';
import { LoginComponent } from './login/login.component';
import { FormusuarioComponent } from './formusuario/formusuario.component';

const routes: Routes = [
  { path: 'publicacion', component: PublicacionComponent },
  { path: '', component: PublicacionComponent },
  { path: 'formpublicacion', component: FormpublicacionComponent},
  { path: 'nav-bar', component: NavBarComponent },
  { path: 'menu-principal', component: MenuPrincipalComponent},
  { path: 'titulo-yeslogan', component: TituloYEsloganComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: FormusuarioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

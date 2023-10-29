import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { FormpublicacionComponent } from './perros/formpublicacion/formpublicacion.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { TituloYEsloganComponent } from './titulo-yeslogan/titulo-yeslogan.component';
import { LoginComponent } from './login/login.component';
import { FormusuarioComponent } from './formusuario/formusuario.component';
import { PerfilComponent } from './perfil/perfil.component';
import { authGuard } from './guards/auth.guard';
import { authGuardForLogin } from './guards/sesion-guard.guard';
import { NavBarNoLogueadoComponent } from './nav-bar-no-logueado/nav-bar-no-logueado.component';
import { MisPublicacionesComponent } from './mis-publicaciones/mis-publicaciones.component';
import { PerfilOtroComponent } from './perfil-otro/perfil-otro.component';

const routes: Routes = [
  { path: 'publicacion', component: PublicacionComponent, canActivate: [authGuard]},
  { path: '', component: MenuPrincipalComponent, canActivate: [authGuard]},
  { path: 'formpublicacion', component: FormpublicacionComponent, canActivate: [authGuard]},
  { path: 'nav-bar', component: NavBarComponent, canActivate: [authGuard] },
  { path: 'menu-principal', component: MenuPrincipalComponent, canActivate: [authGuard]},
  { path: 'titulo-yeslogan', component: TituloYEsloganComponent, canActivate: [authGuard]},
  { path: 'login', component: LoginComponent, canActivate: [authGuardForLogin]},
  { path: 'registro', component: FormusuarioComponent, canActivate: [authGuardForLogin]},
  { path: 'perfil', component: PerfilComponent},
  { path: 'nav-bar-no-logueado', component: NavBarNoLogueadoComponent},
  { path: 'mis-publicaciones', component: MisPublicacionesComponent},
  { path: 'perfil-otro/:usuarioId', component: PerfilOtroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

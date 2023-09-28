import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormpublicacionComponent } from './perros/formpublicacion/formpublicacion.component'; // <-- NgModel lives here
import { LoggingService } from './LoggingService.service';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { HomeService } from './home.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { TituloYEsloganComponent } from './titulo-yeslogan/titulo-yeslogan.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    FormpublicacionComponent,
    PublicacionComponent,
    PublicacionesComponent,
    NavBarComponent,
    MenuPrincipalComponent,
    TituloYEsloganComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoggingService, HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }


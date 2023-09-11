import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PerroComponent } from './perros/perro/perro.component';
import { FormpublicacionComponent } from './perros/formpublicacion/formpublicacion.component'; // <-- NgModel lives here
import { LoggingService } from './LoggingService.service';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { PerrosService } from './perros.service';
import { PerrosComponent } from './perros/perros.component';

@NgModule({
  declarations: [
    AppComponent,
    PerroComponent,
    FormpublicacionComponent,
    PublicacionComponent,
    PublicacionesComponent,
    PerrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule 
  ],
  providers: [LoggingService, PerrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }


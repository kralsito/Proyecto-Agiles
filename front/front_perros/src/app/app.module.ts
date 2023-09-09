import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { PerroComponent } from './perro/perro.component';
import { FormsModule } from '@angular/forms';
import { LoggingService } from './LoggingService.service';

@NgModule({
  declarations: [
    AppComponent,
    PublicacionComponent,
    PerroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

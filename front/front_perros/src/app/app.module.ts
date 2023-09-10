import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PerroComponent } from './perro/perro.component';
import { FormpublicacionComponent } from './formpublicacion/formpublicacion.component'; // <-- NgModel lives here
import { LoggingService } from './LoggingService.service';

@NgModule({
  declarations: [
    AppComponent,
    PerroComponent,
    FormpublicacionComponent
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

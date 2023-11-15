import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormpublicacionComponent } from './perros/formpublicacion/formpublicacion.component'; // <-- NgModel lives here
import { PublicacionComponent } from './publicacion/publicacion.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { TituloYEsloganComponent } from './titulo-yeslogan/titulo-yeslogan.component';
import { LoginComponent } from './login/login.component';
import { FormusuarioComponent } from './formusuario/formusuario.component';
import { NavBarNoLogueadoComponent } from './nav-bar-no-logueado/nav-bar-no-logueado.component';
import { AlertMailDuplicadoComponent } from './alerts/alert-mail-duplicado/alert-mail-duplicado.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { PerfilComponent } from './perfil/perfil.component';
import { DialogCerrarSesionComponent } from './dialog-cerrar-sesion/dialog-cerrar-sesion.component';
import { AuthService } from './guards/auth.service';
import { JwtModule, JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AlertCredencialesInvalidasComponent } from './alerts/alert-credenciales-invalidas/alert-credenciales-invalidas.component';
import { MisPublicacionesComponent } from './mis-publicaciones/mis-publicaciones.component';
import { PerfilOtroComponent } from './perfil-otro/perfil-otro.component';
import { RetrieveService } from './perfil/service-retrieve/retrieve.service';
import { MisFavoritosComponent } from './mis-favoritos/mis-favoritos.component';

export function jwtOptionsFactory() {
  return {
    tokenGetter: () => {
      return localStorage.getItem('token');
    }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    FormpublicacionComponent,
    PublicacionComponent,
    FooterComponent,
    NavBarComponent,
    MenuPrincipalComponent,
    TituloYEsloganComponent,
    LoginComponent,
    FormusuarioComponent,
    NavBarNoLogueadoComponent,
    AlertMailDuplicadoComponent,
    PerfilComponent,
    AlertMailDuplicadoComponent,
    DialogCerrarSesionComponent,
    NavBarNoLogueadoComponent,
    AlertCredencialesInvalidasComponent,
    MisPublicacionesComponent,
    PerfilOtroComponent,
    MisFavoritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
      }
    })
  ],
  providers: [{ provide: AuthService, useClass: AuthService }, JwtHelperService, RetrieveService],
  bootstrap: [AppComponent]
})
export class AppModule { }


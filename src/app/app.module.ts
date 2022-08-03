import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from '@rinminase/ng-charts'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerEmpresaComponent } from './components/ver-empresa/ver-empresa.component';
import { VerSucursalesComponent } from './components/ver-sucursales/ver-sucursales.component';
import { VistaEmpresaComponent } from './components/vista-empresa/vista-empresa.component';
import { VerSucursalComponent } from './components/ver-sucursal/ver-sucursal.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ChatComponent } from './components/chat/chat.component';

import { MateriasComponent } from './components/materias/materias.component';
import { ClasesComponent } from './components/clases/clases.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { NavbarAlumnoComponent } from './components/navbar-alumno/navbar-alumno.component';
import { FiltroPipe } from './components/filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MateriasComponent,
    ClasesComponent,
    AyudaComponent,
    NavbarAlumnoComponent,
    FiltroPipe,
    PaginaInicioComponent,
    NavbarComponent,
    LoginComponent,
    RegistroComponent,
    VerEmpresaComponent,
    VerSucursalesComponent,
    VistaEmpresaComponent,
    VerSucursalComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

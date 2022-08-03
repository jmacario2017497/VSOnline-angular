import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './components/login/login.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { VerEmpresaComponent } from './components/ver-empresa/ver-empresa.component';
import { VerSucursalComponent } from './components/ver-sucursal/ver-sucursal.component';
import { VerSucursalesComponent } from './components/ver-sucursales/ver-sucursales.component';
import { VistaEmpresaComponent } from './components/vista-empresa/vista-empresa.component';
import { MateriasComponent } from './components/materias/materias.component';
import { ClasesComponent } from './components/clases/clases.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { ChatComponent } from './components/chat/chat.component'

const routes: Routes = [
  {path: '', redirectTo: 'pagina-inicio', pathMatch: 'full'  },
  {path: 'pagina-inicio', component: PaginaInicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'chat', component: ChatComponent},
  { path: 'materias', component: MateriasComponent },
  { path: 'materiass/:categoria', component: MateriasComponent },
  { path: 'clases', component: ClasesComponent },
  { path: 'ayuda', component: AyudaComponent },
  {path: 'vista-empresa', component: VistaEmpresaComponent},
  {path: 'vista-sucursales/:idEmpresa', component: VerSucursalComponent},
  {path: 'verSucursal/:idSucursal', component: VerSucursalesComponent},
  {path: 'verEmpresa/:idEmpresa', component: VerEmpresaComponent},
  { path: '**', component: LoginComponent},
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [MateriasComponent, ClasesComponent, AyudaComponent];

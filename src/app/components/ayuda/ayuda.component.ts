import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css'],
  providers: [UsuariosService]
})
export class AyudaComponent implements OnInit {
  public profeModelGet: Usuario;

  public filtroBusqueda = "";

  constructor(private _UService: UsuariosService) { }

  ngOnInit(): void {
    this.getProfesores();
  }

  getProfesores() {
    this._UService.verProfesores().subscribe(
      (response) => {
        console.log(response);
        this.profeModelGet = response.profesores;
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }


}

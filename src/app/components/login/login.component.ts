import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
//import { EmpresasService } from 'src/app/services/empresas.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Empresa } from '../../models/empresas.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {
  public usuarioModel: Usuario;

  constructor(
    private _usuarioService:UsuarioService,
    private _router: Router
    ) {

    this.usuarioModel = new Usuario(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      [{
        usuario: "",
        puntuacion: 0
      }],
      0,
      0,
      0
    );

  }

  ngOnInit(): void {
  }

  getToken(){
    this._usuarioService.login(this.usuarioModel, "true").subscribe(
      (response) =>{
        console.log(response);
        localStorage.setItem("token", response.token)
      },
      (error)=>{
        console.log(<any>error);

      }
    )
  }

  obtenerTokenPromesa(): Promise<any>{
    return new Promise((resolve, reject)=>{
      this._usuarioService.login(this.usuarioModel, "true").subscribe(
        (response) =>{
          localStorage.setItem("token", response.token)
          resolve(response);
        },
        (error)=>{
          console.log(<any>error);
        }
      )
    })
  }

  login(){
    this._usuarioService.login(this.usuarioModel, 'false').subscribe(
      (response)=>{
        this.obtenerTokenPromesa().then(respuesta =>{
        localStorage.setItem("identidad", JSON.stringify(response.usuario))

        //console.log(response);
        //this._router.navigate(['/pagina-inicio'])
        if(response.usuario.rol == "Admin"){
          this._router.navigate(['/materias']);

        }else {
          this._router.navigate(['/chat']);
        }
        })
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }

}

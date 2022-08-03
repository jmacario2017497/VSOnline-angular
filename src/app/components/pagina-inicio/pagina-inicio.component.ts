import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';
import { Empresa } from 'src/app/models/empresas.model'
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.scss'],
  providers: [ EmpresasService, UsuarioService ]
})
export class PaginaInicioComponent implements OnInit {
  public token;

  public empresaModelGet: Empresa;
  public empresaModelPost: Empresa;
  public empresaModelGetId: Empresa;

  constructor(private _empresaService: EmpresasService,
    private _usuarioService: UsuarioService) {
    this.empresaModelPost = new Empresa('','','','','','');
    this.empresaModelGetId = new Empresa('','','','','','');
    this.token = this._usuarioService.obtenerToken()
  }

  ngOnInit(): void {
    this.getEmpresa();
  }

  getEmpresa(){
    this._empresaService.obtenerEmpresa(this.token).subscribe(
      (response)=>{
        this.empresaModelGet = response.Empresa;
        console.log(this.empresaModelGet);
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }

  getEmpresaId(idEmpresa){
    this._empresaService.obtenerEmpresaId(idEmpresa, this.token).subscribe(
      (response)=>{
        console.log(response)
        this.empresaModelGetId = response.empresa
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }

  postEmpresa(){
    this._empresaService.agregarEmpresa(this.empresaModelPost, this.token).subscribe(
      (response)=>{
        console.log(response)
        this.getEmpresa();
      },
      (error)=>{
        console.log(<any>error)
      }
    )
  }

  putEmpresa(){
    this._empresaService.editarEmpresa(this.empresaModelGetId, this.token).subscribe(
      (response)=>{
        console.log(response)
        this.getEmpresa();
      },
      (error)=>{
        console.log(<any>error)
      }
    )

  }

  deleteEmpresa(idEmpresa){
    this._empresaService.eliminarEmpresa(idEmpresa, this.token).subscribe(
      (response)=>{
        console.log(response);
        this.getEmpresa();
      },
      (error)=>{
        console.log(<any>error)
      }
    )
  }

}

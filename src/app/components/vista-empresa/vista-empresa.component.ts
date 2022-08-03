import { Component, OnInit } from '@angular/core';
import { SucursalesService } from 'src/app/services/sucursales.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Sucursal } from 'src/app/models/sucursales.model';

@Component({
  selector: 'app-vista-empresa',
  templateUrl: './vista-empresa.component.html',
  styleUrls: ['./vista-empresa.component.scss'],
  providers: [SucursalesService, UsuarioService]
})
export class VistaEmpresaComponent implements OnInit {
  public token;

  public sucursalModelGet: Sucursal;
  public sucursalModelPost: Sucursal;
  public sucursalModelGetId: Sucursal;

  constructor(private _sucursalService: SucursalesService,
    private _usuarioService: UsuarioService) {
      this.sucursalModelPost = new Sucursal('','','','','');
      this.sucursalModelGetId = new Sucursal('','','','','');
      this.token = this._usuarioService.obtenerToken()
    }

  ngOnInit(): void {
    this.getSucursal();
  }

  getSucursal(){
    this._sucursalService.obtenerSucursale(this.token).subscribe(
      (response)=>{
        this.sucursalModelGet = response.Sucursales;
        console.log(this.sucursalModelGet);
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }

  getSucursalId(idSucursal){
    this._sucursalService.obtenerSucursalId(idSucursal, this.token).subscribe(
      (response)=>{
        console.log(response)
        this.sucursalModelGetId = response.sucursal
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }

  postSucursal(){
    this._sucursalService.agregarSucursal(this.sucursalModelPost, this.token).subscribe(
      (response)=>{
        console.log(response)
        this.getSucursal();
      },
      (error)=>{
        console.log(<any>error)
      }
    )
  }

  putSucursal(){
    this._sucursalService.editarSucursal(this.sucursalModelGetId, this.token).subscribe(
      (response)=>{
        console.log(response)
        this.getSucursal();
      },
      (error)=>{
        console.log(<any>error)
      }
    )

  }

  deleteSucursal(idSucursal){
    this._sucursalService.eliminarSucursal(idSucursal, this.token).subscribe(
      (response)=>{
        console.log(response);
        this.getSucursal();
      },
      (error)=>{
        console.log(<any>error)
      }
    )
  }

}

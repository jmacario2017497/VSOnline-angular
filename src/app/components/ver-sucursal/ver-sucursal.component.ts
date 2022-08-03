import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import { Sucursal } from 'src/app/models/sucursales.model';
import { SucursalesService } from 'src/app/services/sucursales.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ver-sucursal',
  templateUrl: './ver-sucursal.component.html',
  styleUrls: ['./ver-sucursal.component.scss'],
  providers: [SucursalesService, UsuarioService]
})
export class VerSucursalComponent implements OnInit {
  public token;
  public sucursalModelGetEmpresa: Sucursal;

  constructor(
    public _activatedRoute: ActivatedRoute,
    public _sucursalService: SucursalesService,
    public _usuarioService: UsuarioService
  ) {
    this.token = this._usuarioService.obtenerToken();
    this.sucursalModelGetEmpresa = new Sucursal('','','','','');
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      console.log(dataRuta.get('idEmpresa'));
      this.getSucursalEmpresa(dataRuta.get('idEmpresa'));
    })
  }

  getSucursalEmpresa(idEmpresa){
    this._sucursalService.obtenerSucursalesEmpresa(idEmpresa, this.token).subscribe(
      (response)=>{
        this.sucursalModelGetEmpresa = response.sucursales;
        console.log(this.sucursalModelGetEmpresa);
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }

}

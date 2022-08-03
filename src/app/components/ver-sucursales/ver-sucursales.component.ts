import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import { Sucursal } from 'src/app/models/sucursales.model';
import { SucursalesService } from 'src/app/services/sucursales.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ver-sucursales',
  templateUrl: './ver-sucursales.component.html',
  styleUrls: ['./ver-sucursales.component.scss'],
  providers: [SucursalesService, UsuarioService]
})
export class VerSucursalesComponent implements OnInit {
  public token;
  public sucursalModelGetId: Sucursal;

  constructor(
    public _activatedRoute: ActivatedRoute,
    public _sucursalService: SucursalesService,
    public _usuarioService: UsuarioService) {
      this.token = this._usuarioService.obtenerToken();
      this.sucursalModelGetId = new Sucursal('','','','','');
     }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      console.log(dataRuta.get('idSucursal'));
      this.getSucursalId(dataRuta.get('idSucursal'));
    })
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

}

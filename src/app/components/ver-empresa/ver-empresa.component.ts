import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import { Empresa } from 'src/app/models/empresas.model';
import { EmpresasService } from 'src/app/services/empresas.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ver-empresa',
  templateUrl: './ver-empresa.component.html',
  styleUrls: ['./ver-empresa.component.scss'],
  providers: [EmpresasService, UsuarioService]
})
export class VerEmpresaComponent implements OnInit {
  public token;
  public empresaModelGetId: Empresa;

  constructor(
    public _activatedRoute: ActivatedRoute,
    public _empresasService: EmpresasService,
    public _usuarioService: UsuarioService
  ) { 
    this.token = this._usuarioService.obtenerToken();
    this.empresaModelGetId = new Empresa('','','','','','');
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      console.log(dataRuta.get('idEmpresa'));
      this.getEmpresasId(dataRuta.get('idEmpresa'));
    })
  }

  getEmpresasId(idEmpresa){
    this._empresasService.obtenerEmpresaId(idEmpresa, this.token).subscribe(
      (response)=>{
        console.log(response)
        this.empresaModelGetId = response.empresa
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }



}

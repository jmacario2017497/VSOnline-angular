import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class CompraRealizadasService {

  public url: String = "https://vs-online-grupo-4.herokuapp.com/api"

  public headerVariable = new HttpHeaders().set('Content-Type', 'application/json')

  public token;

  constructor(public _http: HttpClient, private _usuarioService:UsuarioService) { }

  verCompras(//idPro: String ,token
  ): Observable<any> {
    let idCli = this._usuarioService.obtenerIdentidad()._id;
    //let headersToken = this.headerVariable.set("Authorization", token) //
    return this._http.get(this.url + '/historial/' + idCli, { headers: this.headerVariable })
  }

}

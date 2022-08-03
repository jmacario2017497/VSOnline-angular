import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Tema } from '../models/temas';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class TemasService {

  public url: String = "https://vs-online-grupo-4.herokuapp.com/api"

  public headerVariable = new HttpHeaders().set('Content-Type', 'application/json')

  public token;

  constructor(public _http: HttpClient, private _usuarioService:UsuarioService) {

   }

  verTemas(//token,
  ): Observable<any> {
    //let headersToken = this.headerVariable.set("Authorization", token) //
    return this._http.get(this.url + '/temas', { headers: this.headerVariable })
  }

  verTemasC(//token,
    categoria
  ): Observable<any> {
    //let headersToken = this.headerVariable.set("Authorization", token) //
    return this._http.get(this.url + '/temasC/' + categoria, { headers: this.headerVariable })
  }

  getToken() {
    var token2 = sessionStorage.getItem('token');
    if (token2 != undefined) {
      this.token = token2;
    } else {
      this.token = null;
    }
    return this.token;
  }

  //////////////////////////////////

  obtenerTemaId(idTema: String): Observable<any> {
    //let headersToken = this.headerVariable.set("Authorization", token)
    return this._http.get(this.url + '/temaId/' + idTema, { headers: this.headerVariable })
  }

  comprarReservar(modeloTema: Tema): Observable<any> {
    let parametros = JSON.stringify(modeloTema);
    let idUsua = this._usuarioService.obtenerIdentidad()._id;

    return this._http.post(this.url + '/comprarReservar/' + idUsua, parametros, { headers: this.headerVariable })
  }


}

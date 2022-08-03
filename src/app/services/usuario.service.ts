import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresas.model';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public url: String = 'https://vs-online-grupo-4.herokuapp.com/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json')
  public identidad;
  public token;

  constructor(public _http: HttpClient) { }

  login(usuario, Token = null): Observable<any>{
    if(Token != null){
      usuario.Token = Token;
    }

    let params = JSON.stringify(usuario);

    return this._http.post(this.url + '/login', params, {headers: this.headersVariable});
  }

  obtenerToken(){
    var token2 = localStorage.getItem("token")
    if(token2 != undefined){
      this.token = token2;
    }else{
      this.token = '';
    }

    return this.token;
  }

  obtenerIdentidad(){
    var identidad2 = JSON.parse(localStorage.getItem('identidad'));
    if(identidad2 != undefined){
      this.identidad = identidad2;
    }else{
      this.identidad = null
    }

    return this.identidad;
  }

  register(params){
    return this._http.post(this.url + '/registro', params, {headers:this.headersVariable})
  }



}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  public url: String = "https://vs-online-grupo-4.herokuapp.com/api"

  public headerVariable = new HttpHeaders().set('Content-Type', 'application/json')

  public token;

  constructor(public _http: HttpClient) { }

  verCategorias(//token
  ): Observable<any> {
    //let headersToken = this.headerVariable.set("Authorization", token) //
    return this._http.get(this.url + '/categorias', { headers: this.headerVariable })
  }

  //////////////////////////////////

  obtenerTemaId(idTema: String): Observable<any> {
    //let headersToken = this.headerVariable.set("Authorization", token)
    return this._http.get(this.url + '/temaId/' + idTema, { headers: this.headerVariable })
  }


}

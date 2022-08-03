import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public url: String = "https://vs-online-grupo-4.herokuapp.com/api"

  public headerVariable = new HttpHeaders().set('Content-Type', 'application/json')

  public token;

  constructor(public _http: HttpClient) { }

  verProfesores(): Observable<any> {
    return this._http.get(this.url + '/profesores', { headers: this.headerVariable })
  }
  verProfesoresNombre(info: String): Observable<any> {
    return this._http.get(this.url + '/profesoresNombre/' + info, { headers: this.headerVariable })
  }
  verProfesoresUsuario(info: String): Observable<any> {
    return this._http.get(this.url + '/profesoresUsuario/' + info, { headers: this.headerVariable })
  }

}

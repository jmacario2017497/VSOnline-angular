import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReunionesReservadasService {

  public url: String = "https://vs-online-grupo-4.herokuapp.com/api"

  public headerVariable = new HttpHeaders().set('Content-Type', 'application/json')

  public token;

  constructor(public _http: HttpClient) { }

  verReuniones(//idPro: String ,token
  ): Observable<any> {
    let idPro = "62d05d0916a18db9f0d2e064";
    //let headersToken = this.headerVariable.set("Authorization", token) //
    return this._http.get(this.url + '/pendientes/' + idPro, { headers: this.headerVariable })
  }

}

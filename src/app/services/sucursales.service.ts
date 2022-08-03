import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Sucursal } from '../models/sucursales.model';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {
  public url: String = 'http://localhost:4500/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(public _http: HttpClient) { }

  obtenerSucursale(token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.get(this.url + '/sucursales', {headers: headersToken})
  }

  obtenerSucursalesEmpresa(id: String, token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.get(this.url + '/suc/' + id, {headers: headersToken})
  }

  obtenerSucursalId(id: String, token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.get(this.url + '/obtenerSucursalId/' + id, { headers: headersToken })
  }

  agregarSucursal(sucursalModel: Sucursal, token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)
    let parametros = JSON.stringify(sucursalModel)

    return this._http.post(this.url + '/registrarSucursal', parametros, {headers: headersToken})
  }

  editarSucursal(sucursalModel: Sucursal, token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)
    let parametros = JSON.stringify(sucursalModel)
    return this._http.put(this.url + '/editarSucursal/' + sucursalModel._id, parametros, {headers: headersToken})
  }

  eliminarSucursal(id : String, token): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.delete(this.url + '/eliminarSucursal/' + id, {headers: headersToken})

  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresas.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  public url: String = 'http://localhost:4500/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json')
  
  constructor(public _http: HttpClient) { }

  obtenerEmpresa(token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.get(this.url + '/empresas', {headers: headersToken})
  }

  obtenerEmpresaId(id: String, token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.get(this.url + '/empresa/' + id, { headers: headersToken })
  }

  agregarEmpresa(empresaModel: Empresa, token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)
    let parametros = JSON.stringify(empresaModel)

    return this._http.post(this.url + '/registrarEmpresa', parametros, {headers: headersToken})
  }

  editarEmpresa(empresaModel: Empresa, token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)
    let parametros = JSON.stringify(empresaModel)
    return this._http.put(this.url + '/editarEmpresa/' + empresaModel._id, parametros, {headers: headersToken})
  }

  eliminarEmpresa(id : String, token): Observable<any>{
    
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.delete(this.url + '/eliminarEmpresa/' + id, {headers: headersToken})

  }
}

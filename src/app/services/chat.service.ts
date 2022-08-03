import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public url: String = 'https://vs-online-grupo-4.herokuapp.com/api';

  public prueba;


   private socket: Socket;
   private urlsocket = 'https://vs-online-grupo-4.herokuapp.com';
     public headersVariable = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(public _http: HttpClient) { }

  obtener(token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/obtnerMensajes',  { headers: headersToken })
  }

  mandar(token, params) {
    let headersToken = this.headersVariable.set('Authorization', token);

   return this._http.post(this.url + '/enviarMensajes', params, { headers: headersToken })

  }
}

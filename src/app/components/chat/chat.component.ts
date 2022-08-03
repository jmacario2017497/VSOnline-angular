import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/models/mensaje.model';
import { ChatService } from 'src/app/services/chat.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { io, Socket } from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public token;
  public identidad;
  public MensajeModelGet:Mensaje;
  public MensajeModelAdd:Mensaje;

  private socket: Socket;
  private urlsocket = 'https://vs-online-grupo-4.herokuapp.com';

  constructor(public _usuarioService: UsuarioService, public _chatService: ChatService) {
    this.token = this._usuarioService.obtenerToken();
    this.identidad = this._usuarioService.obtenerIdentidad();
    this.MensajeModelGet = new Mensaje('','','','')
    this.MensajeModelAdd = new Mensaje('','','','')
    this.socket = io(this.urlsocket, {transports: ['websocket', 'polling', 'flashsocket']});
   }

  ngOnInit(): void {
    this.obtener()
  }

  obtener() {
    this._chatService.obtener(this.token).subscribe({
      next: (response: any) => {
        this.MensajeModelGet = response.mensajes
        var prueba;
        this.socket.on("getMessage", (params)=>{
          prueba = params;
          this.obtener()
        })
       },
      error: (err: any) => {
        //console.log(err);
      },
      complete: () => {

      }
    });
  }

  mandar() {
    var mensaje;
    this._chatService.mandar(this.token, this.MensajeModelAdd).subscribe({
      next: (response: any) => {
        this.MensajeModelAdd = new Mensaje('','','','');
        this.obtener();
        console.log(response)
        mensaje = response.mensaje
        this.socket.emit('message', {mensaje});
       },
      error: (err: any) => {
        //console.log(err);
      },
      complete: () => {

      }
    });
  }


}

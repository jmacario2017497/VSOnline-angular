import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  user: Usuario;

  public usuarioModelGet: Usuario;

  constructor(
    private _usuarioService:UsuarioService,
    private _router: Router
  ) {
    this.user = new Usuario(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      [{
        usuario: "",
        puntuacion: 0
      }],
      0,
      0,
      0
    );
  }

  ngOnInit(): void {
  }

  registro(){
    this._usuarioService.register(this.user).subscribe({
      next: (response:any)=>{
        alert('Usuario creado correctamente, ya puedes iniciar sesión con su usuario')
        this._router.navigate(['/login']);
      },
      error: (error)=>alert(error.error.mensaje)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TemasService } from 'src/app/services/temas.service';
import { Tema } from 'src/app/models/temas'

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css'],
  providers: [TemasService]
})
export class MateriasComponent implements OnInit {
  public temaModelGet: Tema;
  public temaModelGetId: Tema;

  public token;
  public categoria: String;

  constructor(private _temaService: TemasService, private _router: Router, public _activatedRoute: ActivatedRoute) {
    this.token = this._temaService.getToken()
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this.categoria = dataRuta.get('categoria')

      if (this.categoria == undefined) {
        this.getTemas()
      } else {
        this.getTemasC(dataRuta.get('categoria'))
      }
    })


    this.temaModelGetId = new Tema("", "", "", "", "", "", 0)
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////

  getTemas() {
    this._temaService.verTemas(//this.token,

    ).subscribe(
      (response) => {
        console.log(response);

        this.temaModelGet = response.temas;
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

  getTemasC(categoria) {
    this._temaService.verTemasC(//this.token,
      categoria
    ).subscribe(
      (response) => {
        console.log(response);

        this.temaModelGet = response.temasC;
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////

  getTemaId(idTema) {
    this._temaService.obtenerTemaId(idTema).subscribe(
      (response) => {
        console.log(response);
        this.temaModelGetId = response.tema;

        this.postCompraReserva(this.temaModelGetId);
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

  postCompraReserva(modeloTema: Tema) {
    this._temaService.comprarReservar(modeloTema).subscribe(
      (response) => {
        console.log(response);
        this.getTemas()
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

}

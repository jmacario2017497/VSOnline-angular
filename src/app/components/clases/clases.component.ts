import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReunionesReservadasService } from 'src/app/services/reuniones-reservadas.service';
import { CompraRealizadasService } from 'src/app/services/compras-realizadas';
import { Reunion_reservada } from 'src/app/models/reuniones_reservadas';
import { Compra_Realizada } from 'src/app/models/compras_realizadas';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css'],
  providers: [ReunionesReservadasService, CompraRealizadasService]
})
export class ClasesComponent implements OnInit {
  public reunionModelGet: Reunion_reservada;
  public compraModelGet: Compra_Realizada;

  constructor(private _reunionService: ReunionesReservadasService, private _compraService: CompraRealizadasService) { }

  ngOnInit(): void {
    this.getReuniones()
    this.getCompras();
  }

  getReuniones() {
    this._reunionService.verReuniones(//this.token
    ).subscribe(
      (response) => {
        console.log(response);
        this.reunionModelGet = response.reuniones1;
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

  getCompras() {
    this._compraService.verCompras(//this.token
    ).subscribe(
      (response) => {
        console.log(response);
        this.compraModelGet = response.historial;
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

}

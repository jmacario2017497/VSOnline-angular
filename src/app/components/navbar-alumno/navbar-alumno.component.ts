import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Categoria } from 'src/app/models/categorias';

@Component({
  selector: 'app-navbar-alumno',
  templateUrl: './navbar-alumno.component.html',
  styleUrls: ['./navbar-alumno.component.css'],
  providers: [CategoriasService]
})
export class NavbarAlumnoComponent implements OnInit {
  public categoriaModelGet: Categoria;

  constructor(private _cateService: CategoriasService, private _router: Router
  ) { }

  ngOnInit(): void {
    this.getCategorias()
  }

  getCategorias() {
    this._cateService.verCategorias(//this.token
    ).subscribe(
      (response) => {
        console.log(response);
        this.categoriaModelGet = response.categorias;
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

  materias(categoria) {
    this._router.navigate(['/materiass/' + categoria]);
  }

  refresh(): void {
    window.location.reload();
  }

  clases() {
    this._router.navigate(['/clases']);
  }

  ayuda() {
    this._router.navigate(['/ayuda']);
  }

}

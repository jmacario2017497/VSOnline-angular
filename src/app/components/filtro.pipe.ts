import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const busqueda = [];
    for (const fil of value) {
      if (fil.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1 || fil.usuario.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        busqueda.push(fil);
      }
    }
    return busqueda;
  }

}

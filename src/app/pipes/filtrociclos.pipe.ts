import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrociclos',
})
export class FiltrociclosPipe implements PipeTransform {
  transform(value: any, arg: any[]): any {
    const resultadoFiltro = [];
    for (const asignaturas of value) {
      if (asignaturas.ciclo.indexOf(arg) > -1) {
        resultadoFiltro.push(asignaturas);
      }
    }
    return resultadoFiltro;
  }
}

/*

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipefiltro'
})
export class PipefiltroPipe implements PipeTransform {

  transform(value: any,arg: any[]): any {
    const resultadoFiltro = [];
    for(const asignatura of value){
      if(asignatura.nombre.indexOf(arg)> -1){
        resultadoFiltro.push(asignatura);
      }
    }
    return resultadoFiltro;
  }

}


*/

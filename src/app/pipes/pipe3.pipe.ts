import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: '',
})
export class Pipe3Pipe implements PipeTransform {
  transform(value: any, arg: any[]): any {
    const resultadoFiltro = [];
    for (const asignaturas of value) {
      for (const nueva of asignaturas) {
        if (nueva.nombre.indexOf(arg) > -1) {
          resultadoFiltro.push(nueva.nombre);
        }
      }
    }
    return resultadoFiltro;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repetido',
})
export class RepetidoPipe implements PipeTransform {
  transform(value: any, arg: any[]): any {
    const resultadoFiltro = [];
    for (const asignaturas of value) {
      if (asignaturas.nombre.indexOf(arg) > -1) {
        resultadoFiltro.push(asignaturas);
      }
    }
    return resultadoFiltro;
  }
}

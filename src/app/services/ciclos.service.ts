import { Ciclo } from './../utils/Ciclo';
import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { Hash } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class CiclosService {


  ciclos: Ciclo[]=[
    {
      nombre: 'DAM',
      curso: 1,
      asignaturas: [],
      imagen: 'assets/images/dam.jpeg',
    },
    {
      nombre: 'DAM',
      curso: 2,
      asignaturas: [],
      imagen: 'assets/images/dam.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 1,
      asignaturas: [],
      imagen: 'assets/images/daw.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 2,
      asignaturas: [],
      imagen: 'assets/images/daw.jpeg',
    },
  ];
  allCiclos:Ciclo[]=[];


  constructor() { }



 getAllCiclos():Ciclo[]{
  this.allCiclos=this.ciclos.filter((elemento)=>{  
    
    return elemento; 
});
return this.allCiclos;
}
 

}



/* getAllCiclos():Ciclo[]{
  let repetido={};
  this.allCiclos=this.ciclos.filter((elemento)=>{  
    let exite=!repetido[elemento.nombre];
    repetido[elemento.nombre]=true;
    return exite; 
});
return this.allCiclos;
}
 */



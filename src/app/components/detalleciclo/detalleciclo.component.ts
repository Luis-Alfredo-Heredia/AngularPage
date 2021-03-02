import { AsignaturasService } from './../../services/asignaturas.service';
import { Asignatura } from './../../utils/Asignatura';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalleciclo',
  templateUrl: './detalleciclo.component.html',
  styleUrls: ['./detalleciclo.component.css']
})
export class DetallecicloComponent implements OnInit {

  curso:number;
  nombre:string;
  imagen:string;
  array:Asignatura[]=[];
  nuevoArray:Asignatura[]=[];
  nuevoArrayUno:Asignatura[]=[];


  constructor(private gestosRutasActivas:ActivatedRoute,private sis:AsignaturasService) { 
    
    this.array=this.sis.getAllAsignaturas();
  }

  
  ngOnInit(): void {

    this.gestosRutasActivas.paramMap.subscribe(param=>{

      this.curso=parseInt(param.get("curso"));
      this.nombre=param.get("grado");
      this.imagen=param.get("img");

   console.log(this.curso);
   console.log(this.array);
   

    })

   this.nuevoArray=this.array.filter((i)=>{

    if(i.ciclo=="DAM | DAW"|| i.ciclo==this.nombre){

      return i.ciclo;
    }
     
   });
   
this.nuevoArrayUno=this.nuevoArray.filter(item=>(item.curso==this.curso))
   console.log(this.nuevoArray);



  };


 
}

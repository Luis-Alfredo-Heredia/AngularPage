import { Asignatura } from './../../utils/Asignatura';
import { AsignaturasService } from './../../services/asignaturas.service';
import { CiclosService } from './../../services/ciclos.service';
import { Ciclo } from './../../utils/Ciclo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent implements OnInit {

  ciclos: Ciclo[];
  dam:Asignatura[];
  daw:Asignatura[];

  constructor(private servicioCiclos:CiclosService,
    serviciosAsignaturas:AsignaturasService,private gestorRutas:Router) {

    this.ciclos=servicioCiclos.getAllCiclos();
    this.dam=serviciosAsignaturas.getAllAsignaturasDam();
    this.daw=serviciosAsignaturas.getAllAsignaturasDaw();

   }

  ngOnInit(): void {
  }

  irCiclo(curso:number,grado:string,img:string){

    this.gestorRutas.navigate(["detalle",curso,grado,img]);
  }





}

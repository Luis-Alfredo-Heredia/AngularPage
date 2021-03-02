import { AsignaturasService } from './../../services/asignaturas.service';
import { Asignatura } from './../../utils/Asignatura';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css'],
})
export class AsignaturasComponent implements OnInit {

  pipe = [];
  pipe2 = [];
  pipe3 = [];

  asignaturas: Asignatura[] = [];
  ciclo: number;
  nombre: string;
  conocimiento: string;
  asignaturasFiltradas: Asignatura[] = [];
  
  

  constructor(private serviciosAsignaturas: AsignaturasService) {}

  ngOnInit(): void {
    this.asignaturas = this.serviciosAsignaturas.getAllAsignaturas();
    
  }

  botonFiltrar(nombre) {
    return this.asignaturas.filter((nombre) => {});
    return nombre;
  }
}

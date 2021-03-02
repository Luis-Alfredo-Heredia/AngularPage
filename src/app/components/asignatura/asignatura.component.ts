import { Asignatura } from './../../utils/Asignatura';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.css']
})
export class AsignaturaComponent implements OnInit {

  @Input() pasar:Asignatura;

  constructor() { }

  ngOnInit(): void {
  }

}

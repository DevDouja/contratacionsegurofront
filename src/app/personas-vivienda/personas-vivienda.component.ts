import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas-vivienda',
  templateUrl: './personas-vivienda.component.html',
  styleUrls: ['./personas-vivienda.component.css']
})
export class PersonasViviendaComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  navigateToAtras() {
    this.router.navigate(['/relacionvivienda']);
  }
  navigateToSiguiente() {
    this.router.navigate(['/direccion']);
  }

}

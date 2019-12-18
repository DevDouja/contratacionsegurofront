import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonasViviendaComponent } from '../personas-vivienda/personas-vivienda.component';

@Component({
  selector: 'app-relacion-vivienda',
  templateUrl: './relacion-vivienda.component.html',
  styleUrls: ['./relacion-vivienda.component.css']
})
export class RelacionViviendaComponent implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit() {
  }
  /*navigateToAtras() {
    this.router.navigate(['/personasvivienda']);
  }*/
  navigateToSiguiente() {
    this.router.navigate(['/personasvivienda']);
  }
}


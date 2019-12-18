import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fecha-efecto',
  templateUrl: './fecha-efecto.component.html',
  styleUrls: ['./fecha-efecto.component.css']
})
export class FechaEfectoComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  navigateToAtras() {
    this.router.navigate(['/seguroactual']);
  }
  navigateToSiguiente() {
    this.router.navigate(['/continentecontenido']);
  }

}

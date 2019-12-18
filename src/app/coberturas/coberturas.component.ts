import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coberturas',
  templateUrl: './coberturas.component.html',
  styleUrls: ['./coberturas.component.css']
})
export class CoberturasComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  navigateToAtras() {
    this.router.navigate(['/datospersona']);
  }
  navigateToSiguiente() {
    this.router.navigate(['/presupuesto']);
  }

}

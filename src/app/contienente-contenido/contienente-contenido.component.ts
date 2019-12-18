import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contienente-contenido',
  templateUrl: './contienente-contenido.component.html',
  styleUrls: ['./contienente-contenido.component.css']
})
export class ContienenteContenidoComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  navigateToAtras() {
    this.router.navigate(['/fechaefecto']);
  }
  navigateToSiguiente() {
    this.router.navigate(['/datospersona']);
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Tipovivienda{
  value:string;
  viewValue:string
}
export interface Tipocontruccion{
  value:string;
  viewValue:string
}


@Component({
  selector: 'app-info-catastro',
  templateUrl: './info-catastro.component.html',
  styleUrls: ['./info-catastro.component.css']
})


export class InfoCatastroComponent implements OnInit {

  tipovivienda:Tipovivienda[]=[
    {value: 'pisobajo-0' , viewValue :'Piso Bajo'},
    {value: 'pisoalto-1' , viewValue :'Piso en alto'},
    {value: 'unifamiliar-2' , viewValue :'Unifamiliar adosado/pareado'},
    {value: 'unifamiliarindepe-3' , viewValue :'Unifamiliar independiente'},
  ];
  tipocontruccion:Tipocontruccion[]=[
    {value: 'hormigon-0' , viewValue :'Hormigón,piedra, ladrillo o metal'},
    {value: 'pisoalto-1' , viewValue :'Piedra o ladrillo con vigas de madera'},
    {value: 'unifamiliar-2' , viewValue :'Otro'},
  ];

  constructor(private router : Router) { }

  ngOnInit() {
  }
  navigateToAtras() {
    this.router.navigate(['/direccion']);
  }
  navigateToSiguiente() {
    this.router.navigate(['/seguroactual']);
  }

}

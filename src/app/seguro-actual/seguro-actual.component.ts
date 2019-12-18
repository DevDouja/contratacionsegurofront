import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seguro-actual',
  templateUrl: './seguro-actual.component.html',
  styleUrls: ['./seguro-actual.component.css']
})
export class SeguroActualComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  navigateToAtras() {
    this.router.navigate(['/infocatastro']);
  }
  navigateToSiguiente() {
    this.router.navigate(['/fechaefecto']);
  }

}

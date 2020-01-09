import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})

export class TiendaComponent implements OnInit{
  public titulo;
  public nombreDelParque: string;
  public miParque;

  constructor() {
    this.titulo = 'Esta es la tienda';
  }

  ngOnInit() {
    $('#textojq').hide();
    $('#botonjq').click(function(){
      $('#textojq').slideToggle();
    });
  }

  mostrarNombre() {
    console.log(this.nombreDelParque);
  }

  verDatosParque(event) {
    this.miParque = event;
  }
}

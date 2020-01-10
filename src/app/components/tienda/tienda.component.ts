import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
  animations: [
    trigger('marcar', [
      state('inactive', style({
        border: '5px solid #ccc'
      })),
      state('active', style({
        border: '5px solid yellow',
        background: 'red',
        borderRadius: '50px'
      })),
      transition('inactive => active', animate('3s linear')),
      transition('active => inactive', animate('3s linear'))

    ])
  ]
})

export class TiendaComponent implements OnInit{
  public titulo;
  public nombreDelParque: string;
  public miParque;
  public status;

  constructor() {
    this.titulo = 'Esta es la tienda';
    this.status = 'inactive';
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

  changeStatus(status) {
    this.status = status === 'active' ? 'inactive': 'active';
  }
}

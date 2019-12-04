import { Component } from '@angular/core';

@Component({
  selector: 'parques',
  templateUrl: './parques.component.html'
})

export class ParquesComponent {
  public nombre: string;
  public metros: number;
  public vegetacion: string;
  public abierto: boolean;

  constructor() {
    this.nombre = 'Parque natural de caballos';
    this.metros = 405;
    this.vegetacion = 'alta';
    this.abierto = true;
  }
}
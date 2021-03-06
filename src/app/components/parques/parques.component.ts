import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
  selector: 'parques',
  templateUrl: './parques.component.html'
})

export class ParquesComponent implements OnChanges, OnInit, OnDestroy {
  @Input() nombre: string;
  @Input('metros_cuadrados') metros: number;
  public vegetacion: string;
  public abierto: boolean;

  @Output() pasameLosDatos = new EventEmitter();

  constructor() {
    this.nombre = 'Parque natural de caballos';
    this.metros = 405;
    this.vegetacion = 'alta';
    this.abierto = true;
  }

  ngOnChanges(changes) {
    console.log(changes);
  }

  ngOnInit() {
    console.log('Executed onInit');
  }

  ngOnDestroy() {
    console.log('Se va ha eliminar el componente');
  }

  emitirEvento() {
    this.pasameLosDatos.emit({
      nombre: this.nombre,
      metros: this.metros,
      vegetacion: this.vegetacion,
      abierto: this.abierto,
    })
  }
}

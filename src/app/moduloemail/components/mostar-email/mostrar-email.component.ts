import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'mostrar-email',
  templateUrl: './mostrar-email.component.html',
})
export class MostrarEmailComponent implements DoCheck {
  title = 'Mostrar email ';
  public emailContacto: string;

  ngDoCheck() {
    this.emailContacto = localStorage.getItem('emailContacto')
  }

  removeEmail() {
    localStorage.removeItem('emailContacto')
  }
}

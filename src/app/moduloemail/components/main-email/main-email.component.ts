import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'main-email',
  templateUrl: './main-email.component.html',
})
export class MainEmailComponent {
  title = 'Modulo de emails ';
  public emailContacto: string;
}

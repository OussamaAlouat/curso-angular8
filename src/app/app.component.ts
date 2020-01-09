import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'NGZOO ';
  public emailContacto: string;

  ngDoCheck() {
    this.emailContacto = localStorage.getItem('emailContacto')
  }

  removeEmail() {
    localStorage.removeItem('emailContacto')
  }
}

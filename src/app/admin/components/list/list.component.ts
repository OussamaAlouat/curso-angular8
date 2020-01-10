import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  title = 'Listado';
  public numbers =  [0,1,2,3,4,5]
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-static',
  templateUrl: './route-static.component.html',
  styleUrls: ['./route-static.component.scss']
})
export class RouteStaticComponent implements OnInit {

  public componentType: string;

  constructor() { }

  ngOnInit() {
    this.componentType = 'Static Component - set in ngOnInit';
  }
}

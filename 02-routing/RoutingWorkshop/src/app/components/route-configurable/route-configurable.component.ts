import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-configurable',
  templateUrl: './route-configurable.component.html',
  styleUrls: ['./route-configurable.component.scss']
})
export class RouteConfigurableComponent implements OnInit {
  public componentType: string;

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.data.subscribe(i => this.componentType = i.componentType);
  }

}

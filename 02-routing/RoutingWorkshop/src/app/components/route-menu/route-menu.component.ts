import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-route-menu',
  templateUrl: './route-menu.component.html',
  styleUrls: ['./route-menu.component.scss']
})
export class RouteMenuComponent implements OnInit {

  public routes: Routes;

  constructor(private router: Router) {
    this.routes = this.router.config.filter(i => i.path !== '**' && i.path !== '' && !i.path.includes('lazy') );
  }

  ngOnInit() {
  }

}

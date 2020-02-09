import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-param-query',
  templateUrl: './param-query.component.html',
  styleUrls: ['./param-query.component.scss']
})
export class ParamQueryComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) { }

  public id: number;
  public t: string;

  ngOnInit() {
    console.log('ParamQueryComponent.ngOnInit');
    this.activatedRoute.paramMap.subscribe(i => this.id = Number(i.get('id')));
    this.activatedRoute.queryParamMap.subscribe(i => this.t = i.get('t'));
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.scss']
})
export class RightSideComponent implements OnInit {

  @Input() value: number;

  constructor() { }

  ngOnInit() {
  }

}

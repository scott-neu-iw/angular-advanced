import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.scss']
})
export class LeftSideComponent implements OnInit {

  @Output() actionClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public clickAction(value: number) {
    this.actionClicked.emit(value);
  }

}

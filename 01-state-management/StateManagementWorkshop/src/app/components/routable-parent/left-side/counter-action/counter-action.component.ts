import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-action',
  templateUrl: './counter-action.component.html',
  styleUrls: ['./counter-action.component.scss']
})
export class CounterActionComponent implements OnInit {

  @Output() actionClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public buttonClicked(value: number) {
    this.actionClicked.emit(value);
  }
}

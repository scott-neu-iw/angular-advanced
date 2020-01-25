import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routable-parent',
  templateUrl: './routable-parent.component.html',
  styleUrls: ['./routable-parent.component.scss']
})
export class RoutableParentComponent implements OnInit {

  public value: number;
  public actionDetected: string;

  constructor() {
    this.value = 0;
  }

  ngOnInit() {
  }

  public clickAction(value: number) {
    const oldValue = this.value;
    this.value = this.value + value;

    this.actionDetected = `Value Change Detected -- Old Value: ${oldValue}, New Value ${this.value}`;

  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter-result',
  templateUrl: './counter-result.component.html',
  styleUrls: ['./counter-result.component.scss']
})
export class CounterResultComponent implements OnInit {

  @Input() value: number;

  constructor() { }

  ngOnInit() {
  }

}

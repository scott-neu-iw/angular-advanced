# State Management Workshop
### Slide 8 - Subjects
https://rxjs-dev.firebaseapp.com/guide/subject
https://angular.io/guide/component-interaction

### Slide 11
models/value-pair.model.ts
```
export class ValuePair {
  oldValue: number;
  newValue: number;

  constructor() {
    this.oldValue = 0;
    this.newValue = 0;
  }

  setValue(newValue: number) {
    this.oldValue = this.newValue;
    this.newValue = newValue;
  }
}
```
### Slide 12
services/counter-state.service.ts
```
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ValuePair } from '../models/value-pair.model';

@Injectable({
  providedIn: 'root'
})
export class CounterStateService {
  private value = new ValuePair();

  public valueChanged = new BehaviorSubject<ValuePair>(this.value);

  constructor() {
    console.log('CounterStateService.ctor');
   }

   public incrementValue(offsetValue: number) {
     this.value.setValue(this.value.newValue + offsetValue);

     console.log('CounterStateService.incrementValue');
     this.valueChanged.next(this.value);
   }
}
```
### Slide 14
components/routable-parent.component.ts
```
import { Component, OnInit } from '@angular/core';
import { CounterStateService } from '../../services/counter-state.service';
import { ValuePair } from '../../models/value-pair.model';

@Component({
  selector: 'app-routable-parent',
  templateUrl: './routable-parent.component.html',
  styleUrls: ['./routable-parent.component.scss']
})
export class RoutableParentComponent implements OnInit {
  public actionDetected: string;

  constructor(private counterSvc: CounterStateService) {
    this.counterSvc.valueChanged.subscribe(data => {
      this.updateMessage(data);
    });
  }

  ngOnInit() {
  }

  private updateMessage(data: ValuePair) {
    this.actionDetected = `Value Change Detected -- Old Value: ${data.oldValue}, New Value ${data.newValue}`;
  }
}
```
### Slide 15
components/left-side/counter-action/counter-action.component.ts
```
import { Component, OnInit } from '@angular/core';
import { CounterStateService } from '../../../../services/counter-state.service';

@Component({
  selector: 'app-counter-action',
  templateUrl: './counter-action.component.html',
  styleUrls: ['./counter-action.component.scss']
})
export class CounterActionComponent implements OnInit {
  constructor(private counterSvc: CounterStateService) { }

  ngOnInit() {
  }

  public buttonClicked(value: number) {
    this.counterSvc.incrementValue(value);
  }
}
```
### Slide 16
components/right-side/counter-result/counter-result.component.ts
```
import { Component, OnInit } from '@angular/core';
import { CounterStateService } from '../../../../services/counter-state.service';

@Component({
  selector: 'app-counter-result',
  templateUrl: './counter-result.component.html',
  styleUrls: ['./counter-result.component.scss']
})
export class CounterResultComponent implements OnInit {
  public value: number;
  constructor(private counterSvc: CounterStateService) {
    this.counterSvc.valueChanged.subscribe(data => {
      this.value = data.newValue;
    });
  }

  ngOnInit() {
  }
}
```
### Slide 17
components/routable-parent.component.ts
```
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CounterStateService } from '../../services/counter-state.service';
import { ValuePair } from '../../models/value-pair.model';

@Component({
  selector: 'app-routable-parent',
  templateUrl: './routable-parent.component.html',
  styleUrls: ['./routable-parent.component.scss']
})
export class RoutableParentComponent implements OnInit, OnDestroy {
  public actionDetected: string;

  constructor(private counterSvc: CounterStateService) {
    this.counterSvc.valueChanged.subscribe(data => {
      this.updateMessage(data);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.counterSvc.valueChanged.complete();
  }

  private updateMessage(data: ValuePair) {
    this.actionDetected = `Value Change Detected -- Old Value: ${data.oldValue}, New Value ${data.newValue}`;
  }
}
```

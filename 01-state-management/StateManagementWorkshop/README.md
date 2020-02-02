# State Management Workshop
### Slide 8 - Subjects
https://rxjs-dev.firebaseapp.com/guide/subject
https://angular.io/guide/component-interaction

### Slide 12
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
### Slide 13
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
components/left-side/counter-action/counter-action.component.ts
```
export class CounterActionComponent implements OnInit {
  constructor(private counterSvc: CounterStateService) { }
```
```
  public buttonClicked(value: number) {
    this.counterSvc.incrementValue(value);
  }
```
### Slide 15
components/right-side/counter-result/counter-result.component.ts
```
  public value: number;
  constructor(private counterSvc: CounterStateService) {
    this.counterSvc.valueChanged.subscribe(data => {
      this.value = data.newValue;
    });
  }
```
### Slide 16
components/routable-parent.component.ts
```
  constructor(private counterSvc: CounterStateService) {
    this.counterSvc.valueChanged.subscribe(data => {
      this.updateMessage(data);
    });
  }
```
```
  private updateMessage(data: ValuePair) {
    this.actionDetected = `Value Change Detected -- Old Value: ${data.oldValue}, New Value ${data.newValue}`;
  }
```


### Slide 17
components/routable-parent.component.ts
```
export class RoutableParentComponent implements OnInit, OnDestroy {
  public actionDetected: string;
```
```
  ngOnDestroy(): void {
    this.counterSvc.valueChanged.complete();
  }
```

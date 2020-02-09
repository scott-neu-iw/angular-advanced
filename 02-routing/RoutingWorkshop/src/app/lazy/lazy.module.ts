import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyRoutableComponent } from './components/lazy-routable/lazy-routable.component';


@NgModule({
  declarations: [LazyRoutableComponent],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }

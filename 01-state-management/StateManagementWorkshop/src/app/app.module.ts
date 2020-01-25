import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutableParentComponent } from './components/routable-parent/routable-parent.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LeftSideComponent } from './components/routable-parent/left-side/left-side.component';
import { RightSideComponent } from './components/routable-parent/right-side/right-side.component';
import { CounterActionComponent } from './components/routable-parent/left-side/counter-action/counter-action.component';
import { CounterResultComponent } from './components/routable-parent/right-side/counter-result/counter-result.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutableParentComponent,
    ToolbarComponent,
    LeftSideComponent,
    RightSideComponent,
    CounterActionComponent,
    CounterResultComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

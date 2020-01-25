import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutableParentComponent } from './components/routable-parent/routable-parent.component';


const routes: Routes = [
  { path: '', component: RoutableParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

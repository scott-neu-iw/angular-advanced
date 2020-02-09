import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyRoutableComponent } from './components/lazy-routable/lazy-routable.component';


const routes: Routes = [
  // {
  //   path: 'lazy',
  //   children: [
  //     { path: '', component: LazyRoutableComponent }
  //   ]
  // }

  { path: '', component: LazyRoutableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }

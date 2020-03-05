import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RouteStaticComponent } from './components/route-static/route-static.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouteConfigurableComponent } from './components/route-configurable/route-configurable.component';
import { RoutePermissionedComponent } from './components/route-permissioned/route-permissioned.component';
import { AuthorizationGuard } from './services/authorization.guard';
import { ParamQueryComponent } from './components/param-query/param-query.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'component', component: RouteStaticComponent },
  // { path: 'redirect', redirectTo: 'component' },
  // { path: 'paramquery/:id', component: ParamQueryComponent },
  // { path: 'dynamic',
  //   children: [
  //     { path: '1',
  //       component: RouteConfigurableComponent,
  //       data: { componentType: 'dynamic1' } },
  //     { path: '2',
  //       component: RouteConfigurableComponent,
  //       data: { componentType: 'dynamic2' } },
  //   ]
  // },
  // { path: 'perms/user',
  //   component: RoutePermissionedComponent,
  //   data: { requiredRole: 'user' },
  //   canActivate: [AuthorizationGuard] },
  // { path: 'perms/admin',
  //   component: RoutePermissionedComponent,
  //   data: { requiredRole: 'admin' },
  //   canActivate: [AuthorizationGuard] },
  // { path: 'lazy',
  //   loadChildren: () => import('./lazy/lazy.module').then(mod => mod.LazyModule),  },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

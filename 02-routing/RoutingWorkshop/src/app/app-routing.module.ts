import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteConfigurableComponent } from './components/route-configurable/route-configurable.component';
import { RouteStaticComponent } from './components/route-static/route-static.component';
import { RoutePermissionedComponent } from './components/route-permissioned/route-permissioned.component';
import { AuthorizationGuard } from './services/authorization.guard';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'static', component: RouteStaticComponent },
  { path: 'dynamic1', component: RouteConfigurableComponent, data: { componentType: 'dynamic1' } },
  { path: 'dynamic2', component: RouteConfigurableComponent, data: { componentType: 'dynamic2' } },
  { path: 'perms/user', component: RoutePermissionedComponent, data: { requiredRole: 'user' }, canActivate: [AuthorizationGuard] },
  { path: 'perms/admin', component: RoutePermissionedComponent, data: { requiredRole: 'admin' }, canActivate: [AuthorizationGuard] },
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(mod => mod.LazyModule),  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/src/dashboard.module').then(m => m.DashboardModule) },
  { path: 'gsbi', loadChildren: () => import('./modules/gsbi/src/gsbi.module').then(m => m.MainModule) },
  { path: 'gspl', loadChildren: () => import('./modules/gspl/src/gspl.module').then(m => m.GsplModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {   
  constructor(
    private router: Router,
  ) {
    environment.modules.forEach(function(module) {
        //console.log(module);
        routes.push({ path: module, loadChildren: () => import('./modules/gsbi/src/gsbi.module').then(m => m.MainModule) });        
      }
    );
  }
}

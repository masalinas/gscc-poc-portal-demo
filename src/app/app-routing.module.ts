import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';

import { environment } from '../environments/environment';

let routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/src/dashboard.module').then(m => m.DashboardModule) },
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
        routes.push({ path: module, loadChildren: () => import(`./modules/${module}/src/${module}.module`).then(m => m.MainModule) });
        
        /*if (module == 'gsbi')
          routes.push({ path: module, loadChildren: () => import('./modules/gsbi/src/gsbi.module').then(m => m.MainModule) });

        if (module == 'gspl')
          routes.push({ path: module, loadChildren: () => import('./modules/gspl/src/gspl.module').then(m => m.MainModule) });*/
      }
    );

    this.router.resetConfig(routes);
  }
}

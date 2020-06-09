import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LatestModule} from './features/latest/latest.module';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'latest',
    pathMatch: 'full'
  },
  {
    path: 'latest',
    // canActivate: [FeaturesGuard, CguGuard],
    loadChildren: () => import('./features/latest/latest.module').then(m => m.LatestModule)
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);

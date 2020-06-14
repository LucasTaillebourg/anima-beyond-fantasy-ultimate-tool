import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'allnews',
    pathMatch: 'full'
  },
  {
    path: 'latest',
    // canActivate: [FeaturesGuard, CguGuard],
    loadChildren: () => import('./features/latest/latest.module').then(m => m.LatestModule)
  },
  {
    path: 'allnews',
    // canActivate: [FeaturesGuard, CguGuard],
    loadChildren: () => import('./features/allNews/allNews.module').then(m => m.AllNewsModule)
  },
  {
    path: 'addnews',
    // canActivate: [FeaturesGuard, CguGuard],
    loadChildren: () => import('./features/addNews/addNews.module').then(m => m.AddNewsModule)
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);

import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LatestComponent} from './latest.component';


export const routes: Routes = [
  {
    path: '',
    component: LatestComponent
  }
];

export const LatestRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);

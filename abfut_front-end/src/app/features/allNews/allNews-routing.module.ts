import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllNewsComponent} from './allNews.component';


export const routes: Routes = [
  {
    path: '',
    component: AllNewsComponent
  }
];

export const AllNewsRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);

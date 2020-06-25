import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddNewsComponent} from './addNews.component';


export const routes: Routes = [
  {
    path: '',
    component: AddNewsComponent
  }
];

export const AddNewsRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);

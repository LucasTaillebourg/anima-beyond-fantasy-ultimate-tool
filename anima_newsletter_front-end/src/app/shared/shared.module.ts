import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MobxAngularModule} from 'mobx-angular';
import {MenuComponent} from './menu/menu.component';
import {NewsComponent} from './component/news/news.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MobxAngularModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MobxAngularModule,
    MenuComponent,
    NewsComponent
  ],
  declarations: [MenuComponent, NewsComponent]
})
export class SharedModule {}

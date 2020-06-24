import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MobxAngularModule} from 'mobx-angular';
import {NewsComponent} from './component/news/news.component';
import {HeaderComponent} from './header/header.component';

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
    NewsComponent,
    HeaderComponent
  ],
  declarations: [NewsComponent, HeaderComponent]
})
export class SharedModule {}

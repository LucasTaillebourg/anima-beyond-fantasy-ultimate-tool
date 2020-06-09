import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MobxAngularModule} from 'mobx-angular';

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
  ],
  declarations: []
})
export class SharedModule {}

import {NgModule} from '@angular/core';
import {LatestRoutingModule} from './latest-routing.module';
import {LatestStore} from './latest.store';
import {LatestComponent} from './latest.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [LatestRoutingModule, SharedModule], // imports de modules
  providers: [LatestStore], // Store / Services
  declarations: [LatestComponent], // component
  entryComponents: [] // popin
})
export class LatestModule {}

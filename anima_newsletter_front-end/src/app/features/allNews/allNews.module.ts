import {NgModule} from '@angular/core';
import {AllNewsRoutingModule} from './allNews-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {AllNewsStore} from './allNews.store';
import {AllNewsComponent} from './allNews.component';

@NgModule({
  imports: [AllNewsRoutingModule, SharedModule], // imports de modules
  providers: [AllNewsStore], // Store / Services
  declarations: [AllNewsComponent], // component
  entryComponents: [] // popin
})
export class AllNewsModule {}

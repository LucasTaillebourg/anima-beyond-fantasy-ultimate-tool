import {NgModule} from '@angular/core';
import {AddNewsRoutingModule} from './addNews-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {AddNewsStore} from './addNews.store';
import {AddNewsComponent} from './addNews.component';

@NgModule({
  imports: [AddNewsRoutingModule, SharedModule], // imports de modules
  providers: [AddNewsStore], // Store / Services
  declarations: [AddNewsComponent], // component
  entryComponents: [] // popin
})
export class AddNewsModule {}

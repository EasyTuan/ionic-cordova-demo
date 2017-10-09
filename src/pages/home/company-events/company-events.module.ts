import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyEventsPage } from './company-events';

@NgModule({
  declarations: [
    CompanyEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyEventsPage),
  ],
})
export class CompanyEventsPageModule {}

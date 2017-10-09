import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NearPeoplePage } from './near-people';

@NgModule({
  declarations: [
    NearPeoplePage,
  ],
  imports: [
    IonicPageModule.forChild(NearPeoplePage),
  ],
})
export class NearPeoplePageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BbsPage } from './bbs';

@NgModule({
  declarations: [
    BbsPage,
  ],
  imports: [
    IonicPageModule.forChild(BbsPage),
  ],
})
export class BbsPageModule {}

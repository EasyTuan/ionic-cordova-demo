import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NearShopPage } from './near-shop';

@NgModule({
  declarations: [
    NearShopPage,
  ],
  imports: [
    IonicPageModule.forChild(NearShopPage),
  ],
})
export class NearShopPageModule {}

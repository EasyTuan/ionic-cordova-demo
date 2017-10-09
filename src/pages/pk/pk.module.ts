import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PkPage } from './pk';

@NgModule({
  declarations: [
    PkPage,
  ],
  imports: [
    IonicPageModule.forChild(PkPage),
  ],
})
export class PkPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToolPage } from './tool';

@NgModule({
  declarations: [
    ToolPage,
  ],
  imports: [
    IonicPageModule.forChild(ToolPage),
  ],
})
export class ToolPageModule {}

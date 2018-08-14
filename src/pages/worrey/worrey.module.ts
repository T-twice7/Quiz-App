import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorreyPage } from './worrey';

@NgModule({
  declarations: [
    WorreyPage,
  ],
  imports: [
    IonicPageModule.forChild(WorreyPage),
  ],
})
export class WorreyPageModule {}

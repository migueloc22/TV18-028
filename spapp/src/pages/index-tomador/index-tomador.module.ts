import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndexTomadorPage } from './index-tomador';

@NgModule({
  declarations: [
    IndexTomadorPage,
  ],
  imports: [
    IonicPageModule.forChild(IndexTomadorPage),
  ],
})
export class IndexTomadorPageModule {}

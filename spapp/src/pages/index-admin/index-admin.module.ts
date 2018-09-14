import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndexAdminPage } from './index-admin';

@NgModule({
  declarations: [
    IndexAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(IndexAdminPage),
  ],
})
export class IndexAdminPageModule {}

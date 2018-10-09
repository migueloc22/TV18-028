import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitaNavPage } from './cita-nav';

@NgModule({
  declarations: [
    CitaNavPage,
  ],
  imports: [
    IonicPageModule.forChild(CitaNavPage),
  ],
})
export class CitaNavPageModule {}

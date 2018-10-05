import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitaDetallePage } from './cita-detalle';

@NgModule({
  declarations: [
    CitaDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(CitaDetallePage),
  ],
})
export class CitaDetallePageModule {}

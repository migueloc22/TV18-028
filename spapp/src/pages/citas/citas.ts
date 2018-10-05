import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceSpappProvider } from '../../providers/service-spapp/service-spapp';
import {CitaDetallePage} from '../cita-detalle/cita-detalle';

/**
 * Generated class for the CitasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-citas',
  templateUrl: 'citas.html',
})
export class CitasPage {

  rol:string;
  citas:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public service: ServiceSpappProvider) {
  }

  ionViewDidLoad() {
    var user =JSON.parse(localStorage.getItem("user"));
    this.rol=user.fk_id_rol_usuario;
    this.CargarCitas(user.fk_id_rol_usuario,user.num_documento);
  }
  VerDetalles(citas){
    //console.log(citas);
    this.navCtrl.push(CitaDetallePage,citas);

  }
  CargarCitas(rol,id){
    var filter;
    console.log(rol);
    if (rol=="1") {
       filter ="LEFT JOIN estado_cita ON cita.fk_estado_cita=estado_cita.id_estado_cita WHERE  (fk_id_tomador="+id+")"+"  AND (fk_estado_cita=5 OR  fk_estado_cita=3 OR fk_estado_cita=6 OR fk_estado_cita=7)";
    } else {
       filter ="LEFT JOIN estado_cita ON cita.fk_estado_cita=estado_cita.id_estado_cita WHERE (fk_id_prestador="+id+")"+" AND (fk_estado_cita=5 OR  fk_estado_cita=3 OR fk_estado_cita=6 OR fk_estado_cita=7)";
    }
    
    this.service.ListarDatos2("LogicaCita.php",{option:"FilterCita",filter:filter}).subscribe(data=>{
      console.log(data);
      this.citas=data;
    }),
    error => {
      alert(error);
    };
  }
}

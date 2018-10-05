import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ServiceSpappProvider } from '../../providers/service-spapp/service-spapp';
import {CitaConfirmarPage} from '../cita-confirmar/cita-confirmar';

/**
 * Generated class for the IndexPrestadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index-prestador',
  templateUrl: 'index-prestador.html',
})
export class IndexPrestadorPage {
  ofertas:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController,public service: ServiceSpappProvider) {
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(false, "Admin");
    this.menuCtrl.enable(true, "Prestador");
    this.menuCtrl.enable(false, "Tomador");
    var user =JSON.parse(localStorage.getItem("user"));
    this.cargarOferta(user.num_documento);
  }
  cargarOferta(id){
    var filter= "LEFT JOIN estado_cita ON cita.fk_estado_cita=estado_cita.id_estado_cita WHERE  (fk_id_prestador="+id+") AND (fk_estado_cita=2 OR fk_estado_cita=6)";
    this.service.ListarDatos2("LogicaCita.php",{option:"FilterCita",filter:filter}).subscribe(data=>{
      console.log(data);
      this.ofertas=data;
    }),
    error => {
      alert(error);
    };
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    var user =JSON.parse(localStorage.getItem("user"));
    var id=user.num_documento;
    //
    this.service.ListarDatos2("LogicaCita.php",{option:"FilterCita",filter:"LEFT JOIN estado_cita ON cita.fk_estado_cita=estado_cita.id_estado_cita WHERE  (fk_id_prestador="+id+") AND (fk_estado_cita=2 OR fk_estado_cita=6)" }).subscribe(data=>{
      console.log(data);

      this.ofertas=data;
      refresher.complete();
    }),
    error => {
      alert(error);
    };
  }
  Confirmar(ofertas)
  {
    console.log(ofertas);
      this.navCtrl.push(CitaConfirmarPage,ofertas);
  }
}

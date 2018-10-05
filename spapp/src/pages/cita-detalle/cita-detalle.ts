import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceSpappProvider } from '../../providers/service-spapp/service-spapp';
import { filter } from 'rxjs/operator/filter';

/**
 * Generated class for the CitaDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cita-detalle',
  templateUrl: 'cita-detalle.html',
})
export class CitaDetallePage {
  lat: number = 4.693427;
  lng: number = -74.05443;
  codigo;
  total;
  servicios: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public service: ServiceSpappProvider) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CitaDetallePage');
    var user =JSON.parse(localStorage.getItem("user"));
    this.lat=Number(this.navParams.get('latitud'));
    this.lng=Number(this.navParams.get('longitud'));
    this.codigo=this.navParams.get('codigo');
    this.total=this.navParams.get('toltal');
    this.cargarServicio(this.navParams.get('id_cita'));
  }
  cargarServicio(id) {
    var filter="WHERE fk_id_cita = "+id;
    this.service
      .ListarDatos2("LogicaTipo_servicio.php", {option:"CargarTipo_servicio",filter:filter})
      .subscribe(data => {
        console.log(data);
        this.servicios = data;
      }),
      error => {
        alert(error);
      };
  }
}

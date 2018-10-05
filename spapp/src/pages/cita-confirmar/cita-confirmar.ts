import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceSpappProvider } from '../../providers/service-spapp/service-spapp';

/**
 * Generated class for the CitaConfirmarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cita-confirmar',
  templateUrl: 'cita-confirmar.html',
})
export class CitaConfirmarPage {
  lat: number = 4.693427;
  lng: number = -74.05443;
  servicios: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public service: ServiceSpappProvider) {
  }

  ionViewDidLoad() {
    var user =JSON.parse(localStorage.getItem("user"));
    this.lat=Number(this.navParams.get('latitud'));
    this.lng=Number(this.navParams.get('longitud'));
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
  contactar() {
    // this.service
    //   .Crup("LogicaCita.php", {
    //     option: "ModificarDemanda",
    //     id_cita: this.id_cita,
    //     fk_id_tomador: this.fk_id_tomador
    //   })
    //   .subscribe(data => {
    //     this.repuesta = data;
    //     console.log(this.repuesta);
    //     if (this.repuesta == "1") {
    //       this.estado = true;
    //     } else {
    //       console.log("no funciona");
    //     }
    //   }),
    //   error => {
    //     alert(error);
    //   };
  }
}

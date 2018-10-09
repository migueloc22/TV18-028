import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ServiceSpappProvider } from '../../providers/service-spapp/service-spapp';
import {IndexPrestadorPage} from '../index-prestador/index-prestador';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
  FormGroup
} from "@angular/forms";

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
  formulario = this.fb.group({
    id_cita: [""],
    toltal: ["", [Validators.required]],
    fk_estado_cita: ["6"],
    visto: ["0"],
    option: ["ConfirmarCita"]
  });
  constructor(public navCtrl: NavController, public navParams: NavParams,public service: ServiceSpappProvider,private fb: FormBuilder,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    var user =JSON.parse(localStorage.getItem("user"));
    this.lat=Number(this.navParams.get('latitud'));
    this.lng=Number(this.navParams.get('longitud'));
    this.formulario.patchValue({
      id_cita:this.navParams.get('id_cita')
    });
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
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Cita Confirmada...",
      duration: 3000
    });
    loader.present();
  }
  contactar() {
    // this.formulario.patchValue({
    //   latitud: this.lat,
    //   longitud: this.lng,
    //   fk_id_tomador:user.num_documento
    // });
    console.log(this.formulario.value);
    this.service.Crup("LogicaCita.php", this.formulario.value)
    .subscribe(data => {
      this.formulario.reset();
      this.navCtrl.setRoot(IndexPrestadorPage);
      this.presentLoading();
     
    }),
    error => {
      alert(error);
    };
  }
}

import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from "ionic-angular";
import {CitaIniciarPage} from "../cita-iniciar/cita-iniciar";
import {CitaTerminarPage} from "../cita-terminar/cita-terminar";

/**
 * Generated class for the CitaNavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-cita-nav",
  templateUrl: "cita-nav.html"
})
export class CitaNavPage {
  lat: number = 0;
  lng: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CitaNavPage");
    var cita = JSON.parse(localStorage.getItem("cita"));
    console.log(cita);
    this.lat = Number(cita.latitud);
    this.lng = Number(cita.longitud);
  }
  Iniciar() {
    console.log("Iniciar");
    const modal = this.modalCtrl.create(CitaIniciarPage);
    modal.onDidDismiss(data => {
      console.log(data);
      if (data.option=="1") {
        console.log("Migueloc22");
        this.presentLoading();
        this.navCtrl.push(CitaTerminarPage);
      }
    });
    modal.present();
  }
  Cancelar() {
    console.log("Cancelar");
  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Cargando...",
      duration: 3000
    });
    loader.present();
  }
}

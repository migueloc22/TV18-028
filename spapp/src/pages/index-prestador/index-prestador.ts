import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';
import { ServiceSpappProvider } from '../../providers/service-spapp/service-spapp';
import {CitaConfirmarPage} from '../cita-confirmar/cita-confirmar';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';
import {CitaNavPage} from '../cita-nav/cita-nav';

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
  logs: string[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController,public service: ServiceSpappProvider,private backgroundGeolocation: BackgroundGeolocation,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(false, "Admin");
    this.menuCtrl.enable(true, "Prestador");
    this.menuCtrl.enable(false, "Tomador");
    var user =JSON.parse(localStorage.getItem("user"));
    // this.startBackgroundGeolocation();
    this.cargarOferta(user.num_documento);
  }
  
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Cargando...",
      duration: 3000
    });
    loader.present();
  }
  cargarOferta(id){
    var filter= "LEFT JOIN estado_cita ON cita.fk_estado_cita=estado_cita.id_estado_cita WHERE  (fk_id_prestador="+id+") AND (fk_estado_cita=2 OR fk_estado_cita=6) ORDER BY fecha_registro DESC;";
    this.service.ListarDatos2("LogicaCita.php",{option:"FilterCita",filter:filter}).subscribe(data=>{
      console.log(data);
      this.ofertas=data;
    }),
    error => {
      alert(error);
    };
  }
  stopBackgroundGeolocation(){
    this.backgroundGeolocation.stop();
  }
  startBackgroundGeolocation(){
    this.backgroundGeolocation.isLocationEnabled()
    .then((rta) =>{
      if(rta){
        this.start();
      }else {
        this.backgroundGeolocation.showLocationSettings();
      }
    })
  }
  start(){

    const config: BackgroundGeolocationConfig = {
      desiredAccuracy: 10,
      stationaryRadius: 1,
      distanceFilter: 1,
      debug: true,
      stopOnTerminate: false,
      // Android only section
      locationProvider: 1,
      startForeground: true,
      interval: 6000,
      fastestInterval: 5000,
      activitiesInterval: 10000,
    };
  
    console.log('start');
  
    this.backgroundGeolocation
    .configure(config)
    .subscribe((location: BackgroundGeolocationResponse) => {
      console.log(location);
      var user =JSON.parse(localStorage.getItem("user"));
      this.cargarUsuario(user.num_documento,location.latitude,location.longitude)
      //this.logs.push(`${location.latitude},${location.longitude}`);
    });
  
    // start recording location
    this.backgroundGeolocation.start();
  
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
    //console.log(ofertas);
      this.navCtrl.push(CitaConfirmarPage,ofertas);
      this.presentLoading();
  }
  Iniciar(ofertas){
    //console.log(ofertas);
    localStorage.setItem("cita",JSON.stringify(ofertas));
    this.navCtrl.setRoot(CitaNavPage,ofertas);
    this.presentLoading();
  }
  cargarUsuario(num_documento,latitud,longitud) {
    this.service
      .ListarDatos2("LogicaUsuario.php", {
        option: "ActulizarPosicion",
        num_documento:num_documento,
        latitud:latitud,
        longitud:longitud,
      })
      .subscribe(data => {
        console.log(data);
      }),
      error => {
        alert(error);
      };
  }
}

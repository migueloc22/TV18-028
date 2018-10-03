import { Component } from "@angular/core";
import { PerfilUsuarioPage } from "../perfil-usuario/perfil-usuario";
import {ConfirmarCitaPage} from '../confirmar-cita/confirmar-cita';
import {IndexTomadorPage} from '../index-tomador/index-tomador';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  LoadingController
} from "ionic-angular";
import { ServiceSpappProvider } from "../../providers/service-spapp/service-spapp";

/**
 * Generated class for the UbicaionPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface marker {
  id: string;
  lat: number;
  lng: number;
}
@IonicPage()
@Component({
  selector: "page-ubicaion-perfil",
  templateUrl: "ubicaion-perfil.html"
})
export class UbicaionPerfilPage {
  public zoom: number;
  usuarios: any;
  icon = "../../assets/imgs/locate.png";
  markers: marker[] = new Array();
  lat: number = 4.693427;
  lng: number = -74.05443;
  idCita;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public service: ServiceSpappProvider,
    public loadingCtrl: LoadingController
  ) {
    this.idCita=navParams.get("idCita");
    console.log("UserId", navParams.get("idCita"));
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad UbicaionPerfilPage');
    this.cargarUsuario();
  }

  hola(markers) {
    //  alert(markers.id);
   // this.presentLoading();
    const modal = this.modalCtrl.create(PerfilUsuarioPage, {
      idUser: markers.id,idCita:this.idCita
    });
    modal.onDidDismiss(data => {
      if (data.dato=="1") {
        this.presentLoading();
        // this.navCtrl.push(ConfirmarCitaPage);
        this.navCtrl.setRoot(IndexTomadorPage);
      }
    });
    modal.present();
  }
  cargarUsuario() {
    var filter = "fk_id_rol_usuario=2 and fk_estado_usuario=1";
    this.service
      .ListarDatos2("LogicaUsuario.php", {
        option: "BuscarUsuariof",
        filter: filter
      })
      .subscribe(data => {
        //console.log(data);
        this.usuarios = data;
        this.usuarios.forEach(element => {
          console.log(element.nombre);
          this.markers.push({
            id: element.num_documento,
            lat: Number(element.latitud),
            lng: Number(element.longitud)
          });
        });
        console.log(this.markers);
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
}

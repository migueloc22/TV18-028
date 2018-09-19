import { Component, ViewChild, ElementRef } from "@angular/core";
import { Geolocation } from "@ionic-native/geolocation";
import { ServiceSpappProvider } from "../../providers/service-spapp/service-spapp";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController
} from "ionic-angular";
import {
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
  FormGroup
} from "@angular/forms";
// declare var google: any;
// declare var google;

/**
 * Generated class for the IndexTomadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-index-tomador",
  templateUrl: "index-tomador.html"
})
export class IndexTomadorPage {
  @ViewChild("map")
  mapRef: ElementRef;
  @ViewChild("dir")
  dirRef: ElementRef;
  map: any;
  direc: string;
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  lat: number = 4.693427;
  lng: number = -74.05443;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private geolocation: Geolocation,
    public service: ServiceSpappProvider
  ) {}

  ionViewDidLoad() {
    this.menuCtrl.enable(false, "Admin");
    this.menuCtrl.enable(false, "Prestador");
    this.menuCtrl.enable(true, "Tomador");
    // this.DisplayMap();

    // let watch = this.geolocation.watchPosition();
    // watch.subscribe(data => {
    //   console.log("data");
    //   console.log(data);
    //   // data can be a set of coordinates, or an error (if an error occurred).
    //   // data.coords.latitude
    //   // data.coords.longitude
    //   this.lat=data.coords.latitude;
    //   this.lng=data.coords.longitude;

    // });
  }
  DisplayMap() {}
  cargarUusuario() {
    this.service
      .ListarDatos("LogicaUsuario.php", "BuscarUsuario")
      .subscribe(data => {
        console.log(data);
      }),
      error => {
        alert(error);
      };
  }
}

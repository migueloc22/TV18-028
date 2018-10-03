import { Component, ViewChild, ElementRef } from "@angular/core";
import { Geolocation } from "@ionic-native/geolocation";
import { ServiceSpappProvider } from "../../providers/service-spapp/service-spapp";
import { PerfilUsuarioPage } from "../perfil-usuario/perfil-usuario";
import {UbicaionPerfilPage} from '../ubicaion-perfil/ubicaion-perfil';
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController,
  ModalController,
  LoadingController
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
interface marker {
  id: string;
  lat: number;
  lng: number;
}

@IonicPage()
@Component({
  selector: "page-index-tomador",
  templateUrl: "index-tomador.html"
})
export class IndexTomadorPage {
  public zoom: number;
  formulario = this.fb.group({
    fecha_cita: ["", [Validators.required]],
    hora_inicia: ["", [Validators.required]],
    servicio: ["", Validators.required],
    latitud: [""],
    longitud: [""],
    fk_id_tomador:[''],
    option: ["AgregarCita"]
  });
  lat: number = 4.693427;
  lng: number = -74.05443;
  lat2: number = 4.694356;
  lng2: number = -74.057718;
  infLocation: any;
  //marcadores
  icon = "../../assets/imgs/locate.png";
  markers: marker[] = new Array();
  usuarios: any;
  servicios: any;
  selec: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private geolocation: Geolocation,
    public service: ServiceSpappProvider,
    public modalCtrl: ModalController,
    private fb: FormBuilder,
    public loadingCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    this.menuCtrl.enable(false, "Admin");
    this.menuCtrl.enable(false, "Prestador");
    this.menuCtrl.enable(true, "Tomador");
    // this.cargarUsuario();
    this.cargarServicio();
    // this.DisplayMap();

    let watch = this.geolocation.watchPosition();
    watch.subscribe(data => {
      console.log("data");
      console.log(data);
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
      this.lat = data.coords.latitude;
      this.lng = data.coords.longitude;
    });
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Cargando...",
      duration: 3000
    });
    loader.present();
  }
  markerMoved(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }
  Buscar() {
    var user=JSON.parse(localStorage.getItem("user"));
    this.formulario.patchValue({
      latitud: this.lat,
      longitud: this.lng,
      fk_id_tomador:user.num_documento
    });
    // console.log(this.formulario.value);
    console.log(this.formulario.value);
    this.service.Crup("LogicaCita.php", this.formulario.value)
    .subscribe(data => {
      this.formulario.reset();
     
      // if (data=="1") {
    
      // } else {
        
      // }
      var idCita=data;
      for(let servi of this.servicios){
        console.log(idCita);
       // console.log(servi.id_tipo_servicio);
       this.RegistrarDetalle(idCita,servi.id_tipo_servicio);
      }
      this.presentLoading();
      this.navCtrl.push(UbicaionPerfilPage, { idCita: idCita });
    }),
    error => {
      alert(error);
    };

  }
  RegistrarDetalle(fk_id_cita,fk_id_tipo_servicio) {
    //console.log(this.formulario.value);
    this.service.Crup("LogicaDetalle_cita.php", {option:"AgregarDtCita",fk_id_cita:fk_id_cita,fk_id_tipo_servicio:fk_id_tipo_servicio})
    .subscribe(data => {

     console.log(data);
    }),
    error => {
      alert(error);
    };

  }
  DisplayMap() {}
  hola(markers) {
    //  alert(markers.id);
    console.log(this.lat);
    const modal = this.modalCtrl.create(PerfilUsuarioPage, {
      idUser: markers.id
    });
    modal.present();
  }
  cargarServicio() {
    this.service
      .ListarDatos("LogicaTipo_servicio.php", "CargarTipo_servicio")
      .subscribe(data => {
        //console.log(data);
        this.servicios = data;
      }),
      error => {
        alert(error);
      };
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
}

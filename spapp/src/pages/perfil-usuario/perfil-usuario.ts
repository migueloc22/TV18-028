import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import { ServiceSpappProvider } from "../../providers/service-spapp/service-spapp";
import { Observable } from "rxjs/Observable";
/**
 * Generated class for the PerfilUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface IUsuario {
  num_documento;
  nombre;
  apellido;
  correo;
  fecha_nac;
  direccion;
  contrasena;
  celular;
  latitud;
  longitud;
  foto;
  hoja_vida;
  certificacion_estudio;
  fk_id_tipo_doc;
  fk_id_ciudad;
  fk_estado_usuario;
  fk_id_rol_usuario;
}
@IonicPage()
@Component({
  selector: "page-perfil-usuario",
  templateUrl: "perfil-usuario.html"
})
export class PerfilUsuarioPage {
  foto: string;
  lgUser: IUsuario;
  usuarios: any;
  NombreUser: string;
  Servicios: any;
  estado: boolean = false;
  id_cita;
  fk_id_tomador;
  name = "Angular 5";
  alive = true;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public service: ServiceSpappProvider
  ) {}

  ionViewDidLoad() {
    //  console.log( this.navParams.get('idUser'));
    this.id_cita = this.navParams.get("idCita");
    this.fk_id_tomador = this.navParams.get("idUser");
    this.cargarUsuario(this.navParams.get("idUser"));
    this.cargarServicio(this.navParams.get("idUser"));
    this.foto = "../../assets/imgs/perfil.jpg";
    // this.confirmado();
  }
  close() {
    this.viewCtrl.dismiss();
  }
  confirmado() {
    Observable.timer(0, 10000)
      .takeWhile(() => this.alive) // only fires when component is alive
      .subscribe(() => {
        console.log("hola");
        setInterval(function() {}, 3000);

        var filter =" WHERE fk_estado_cita = 6 and fk_id_tomador ='"+ this.fk_id_tomador+"' and id_cita ='"+ this.id_cita+"'";
        this.service
          .ListarDatos2("LogicaCita.php", {
            option: "FilterCita",
            filter: filter
          })
          .timeout(3000)
          .subscribe(data => {
            console.log("Estoy Cargando");
            console.log(data);
          }),
          error => {
            alert(error);
          };
      });
  }
  contactar() {
    console.log("estoy contactar");
    this.service
      .Crup("LogicaCita.php", {
        option: "ModificarDemanda",
        id_cita: this.id_cita,
        fk_id_tomador: this.fk_id_tomador
      })
      .subscribe(data => {
        console.log(data);
        if (data == "1") {
          this.estado = true;
        } else {
          console.log("no funciona");
        }
      }),
      error => {
        alert(error);
      };
  }
  cargarUsuario(id) {
    // $filter="num_documento='".$num_documento."'"//
    var filter = "num_documento='" + id + "'";
    this.service
      .ListarDatos2("LogicaUsuario.php", {
        option: "BuscarUsuariof",
        filter: filter
      })
      .subscribe(data => {
        this.usuarios = data;

        for (let user of this.usuarios) {
          //console.log(); // Error
          this.lgUser = user;
        }
        this.NombreUser = this.lgUser.nombre + " " + this.lgUser.apellido;
        //console.log(this.lgUser);
      }),
      error => {
        alert(error);
      };
  }
  cargarServicio(id) {
    // $filter="num_documento='".$num_documento."'"//
    var filter =
      " INNER JOIN tipo_servicio on usuario_servicio.fk_id_tipo_servicio=tipo_servicio.id_tipo_servicio where fk_id_usuario='" +
      id +
      "'";
    this.service
      .ListarDatos2("LogicaUsuario_servicio.php", {
        option: "FilterUsuario_servicio",
        filter: filter
      })
      .subscribe(data => {
        console.log(data);
        this.Servicios = data;
      }),
      error => {
        alert(error);
      };
  }
}

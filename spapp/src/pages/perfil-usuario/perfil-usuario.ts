import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ServiceSpappProvider } from "../../providers/service-spapp/service-spapp";
/**
 * Generated class for the PerfilUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface IUsuario{
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
  fk_id_rol_usuario
}
@IonicPage()
@Component({
  selector: 'page-perfil-usuario',
  templateUrl: 'perfil-usuario.html',
})
export class PerfilUsuarioPage {
  foto:string;
  lgUser: IUsuario;
  usuarios:any;
  NombreUser:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public service: ServiceSpappProvider) {
  }

  ionViewDidLoad() {
  //  console.log( this.navParams.get('idUser'));
   this.cargarUsuario(this.navParams.get('idUser'));
   this.foto="../../assets/imgs/perfil.jpg";
  }
  close(){
    this.viewCtrl.dismiss();
  }
  cargarUsuario(id)
  {
    // $filter="num_documento='".$num_documento."'"// 
    var filter="num_documento='"+id+"'";
    this.service.ListarDatos2("LogicaUsuario.php",{option:"BuscarUsuariof",filter:filter}).subscribe(data => {
      
      this.usuarios=data;
      
        for (let user of  this.usuarios) {
          //console.log(); // Error
          this.lgUser = user;
        }
        this.NombreUser=this.lgUser.nombre+" "+this.lgUser.apellido;
        console.log(this.lgUser);
    }),
    error => {
      alert(error);
    };
  }

}

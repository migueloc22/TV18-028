import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl,FormBuilder,Validators,FormArray ,FormGroup,} from '@angular/forms';
import { ServiceSpappProvider } from "../../providers/service-spapp/service-spapp";
import {IndexAdminPage} from '../index-admin/index-admin';
import {IndexPrestadorPage} from '../index-prestador/index-prestador';
import { IndexTomadorPage } from "../index-tomador/index-tomador";
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
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  profileForm = this.fb.group({
    num_documento: ['', [Validators.required,Validators.maxLength(11)]],
    option:['logueoUser'],
    contrasena: ['', Validators.required]
  });
  lgUser: IUsuario;
  usuarios:any;
  mensaje:string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private fb: FormBuilder,public service: ServiceSpappProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loguear()
  {
    console.log(this.profileForm.value);
    this.service.ListarDatos2("LogicaUsuario.php",this.profileForm.value).subscribe(data => {
      
      this.usuarios=data;
      if (this.usuarios.length>0) {
        for (let user of  this.usuarios) {
          //console.log(); // Error
          this.lgUser = user;
        }
        localStorage.setItem("user",JSON.stringify(this.lgUser));
        //console.log(this.lgUser.fk_id_rol_usuario);
        switch (this.lgUser.fk_id_rol_usuario) {
          case "1":
            //console.log("Tomador");
             this.navCtrl.setRoot(IndexTomadorPage);
            break;
          case "2":
            //console.log("Prestador");
            this.navCtrl.setRoot(IndexPrestadorPage);
            break;
          case "3":
            //console.log("Administrador");
             this.navCtrl.setRoot(IndexAdminPage);
            break;

          default:
            break;
        }
      } else {
        this.mensaje="Numero de documento o contraseña invalido"
      }
      
      console.log(this.lgUser);
    }),
    error => {
      alert(error);
    };
  }
}

import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import {
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
  FormGroup
} from "@angular/forms";

/**
 * Generated class for the ConfiguracionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-configuracion",
  templateUrl: "configuracion.html"
})
export class ConfiguracionPage {
  profileForm = this.fb.group({
    nombre: ["", [Validators.required, Validators.maxLength(65)]],
    apellido: ["", [Validators.required, Validators.maxLength(65)]],
    fk_id_tipo_doc: ["", Validators.required],
    num_documento: ["", [Validators.required, Validators.maxLength(11)]],
    id_departamento: ["", Validators.required],
    fk_id_ciudad: ["", Validators.required],
    direccion: ["", [Validators.required, Validators.maxLength(30)]],
    celular: ["", [Validators.required, Validators.maxLength(10)]],
    fecha_nac: ["", Validators.required],
    contrasena: ["", Validators.required],
    contrasena2: ["", [Validators.required]],
    correo: [
      "",
      [
        Validators.required,
        Validators.pattern(
          "^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$"
        )
      ]
    ],
    foto: [""],
    option: ["CrearUsuario"]
  });
  base64Image: string;
  departamento: string;
  tpDocumentos: any;
  Departamentos: any;
  ciudades: any;
  photoTake: string;
  constructor(
    private fb: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ConfiguracionPage");
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.profileForm.controls;
  }
}

import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController } from "ionic-angular";
import { ServiceSpappProvider } from "../../providers/service-spapp/service-spapp";
import { FormControl,FormBuilder,Validators,FormArray ,FormGroup,} from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { StateKey } from "@angular/platform-browser";
import { Base64 } from '@ionic-native/base64';
import { File } from '@ionic-native/file';
import { matchOtherValidator } from "../util/validator";
import { AlertController } from 'ionic-angular';
import {  HomePage} from "../home/home";
@IonicPage()
@Component({
  selector: "page-crear-cuenta",
  templateUrl: "crear-cuenta.html",
  providers: [ServiceSpappProvider]
})
export class CrearCuentaPage {
  profileForm = this.fb.group({
    nombre: ['', [Validators.required,Validators.maxLength(65)]],
    apellido: ['', [Validators.required,Validators.maxLength(65)]],
    fk_id_tipo_doc: ['', Validators.required],
    num_documento: ['', [Validators.required,Validators.maxLength(11)]],
    id_departamento: ['', Validators.required],
    fk_id_ciudad: ['', Validators.required],
    direccion: ['', [Validators.required,Validators.maxLength(30)]],
    celular: ['', [Validators.required,Validators.maxLength(10)]],
    fecha_nac: ['', Validators.required],
    contrasena: ['', Validators.required],
    contrasena2: ['', [Validators.required]],
    correo:['',[ Validators.required,Validators.pattern("^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$")]],
    foto:[''],
    option:['CrearUsuario'],
    
  },this.passwordMatchValidator);
  base64Image:string;
  departamento:string;
  tpDocumentos: any;
  Departamentos: any;
  ciudades: any;
  photoTake:string;
  constructor(private fb: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: ServiceSpappProvider,
    private camera: Camera,
    private base64: Base64,
    private file: File,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {
    
  }

  ionViewDidLoad() {
    this.cargarTpDocumento();
    this.cargarDepartamento();
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Felicitacion !',
      subTitle: 'Registro Completado!',
      buttons: ['OK']
    });
    alert.present();
  }
  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Registro Completado',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  cargarTpDocumento() {
    this.service
      .ListarDatos("LogicaTipo_documento.php", "CargarTipoDocu")
      .subscribe(data => {
        this.tpDocumentos = data;
        //console.log(data);
      }),
      error => {
        alert(error);
      };
  }
   // convenience getter for easy access to form fields
   get f() { return this.profileForm.controls; }
  Registrar(){
    // console.log(this.profileForm.value);
    this.service.Crup("LogicaUsuario.php", this.profileForm.value)
    .subscribe(data => {
      //console.log(JSON.stringify(data));
      if (data=="1") {
        this.presentToast();
        this.navCtrl.push(HomePage);
    
      } else {
        
      }
      
    }),
    error => {
      alert(error);
    };
  }
  cargarDepartamento() {
    this.service
      .ListarDatos("LogicaDpto.php", "CargarDpto")
      .subscribe(data => {
        //console.log(data);
        this.Departamentos=data;
      }),
      error => {
        alert(error);
      };
  }
   passwordMatchValidator(group: FormGroup): any {
    if (group) {
      if (group.get("contrasena").value !==group.get("contrasena2").value) {
        return { notMatching : true };
      }
    }
   
    return null;
  }
  cargarCiudad(){
    //console.log("estoy en la ciudad"+this.departamento);
    this.service.ListarDatos2("LogicaCiudad.php",{option:"CargarCiuDpto",idDpto:this.departamento}).subscribe(data => {
      //console.log(data);
      this.ciudades=data;
    }),
    error => {
      alert(error);
    };
  }
//   checkPasswords(group: FormGroup) { // here we have the 'passwords' group
//   let pass = group.controls.contrasena.value;
//   let confirmPass = group.controls.contrasena2.value;

//   return pass === confirmPass ? null : { notSame: true }     
// }
  TomarFoto(){
    const options: CameraOptions = {
      quality: 75,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: true, 
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }
    
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
    //  this.base64Image = 'data:image/jpeg;base64,' + imageData;
    //  this.photoTake=imageData;
    let filename = imageData.substring(imageData.lastIndexOf('/')+1);
    let path =  imageData.substring(0,imageData.lastIndexOf('/')+1);
         //then use the method reasDataURL  btw. var_picture is ur image variable
         this.file.readAsDataURL(path, filename).then(res=> this.base64Image = res  );
         this.profileForm.patchValue({foto:this.base64Image });
     
    }, (err) => {
     // Handle error
    });
    // this.base64.encodeFile(this.base64Image).then((base64File: string) => {
    //   //alert(base64File);
    //   this.photoTake=base64File;
    //   //this.profileForm.patchValue({foto:base64File });
    // }, (err) => {
    //   console.log(err);
    // });
  }
}

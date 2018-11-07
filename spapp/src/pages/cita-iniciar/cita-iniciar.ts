import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the CitaIniciarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cita-iniciar',
  templateUrl: 'cita-iniciar.html',
})
export class CitaIniciarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CitaIniciarPage');
  }
  close() {
    let data = {option:"0"};
    this.viewCtrl.dismiss(data);
  }
  Page()
  {
    let data = {option:"1"};
    this.viewCtrl.dismiss(data);
  }
}

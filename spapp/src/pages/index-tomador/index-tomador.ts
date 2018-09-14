import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the IndexTomadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index-tomador',
  templateUrl: 'index-tomador.html',
})
export class IndexTomadorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(false, "Admin");
    this.menuCtrl.enable(false, "Prestador");
    this.menuCtrl.enable(true, "Tomador");
  }

}

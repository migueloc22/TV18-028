import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the IndexPrestadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index-prestador',
  templateUrl: 'index-prestador.html',
})
export class IndexPrestadorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(false, "Admin");
    this.menuCtrl.enable(true, "Prestador");
    this.menuCtrl.enable(false, "Tomador");
  }

}

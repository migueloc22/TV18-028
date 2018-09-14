import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the IndexAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index-admin',
  templateUrl: 'index-admin.html',
})
export class IndexAdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(true, "Admin");
    this.menuCtrl.enable(false, "Prestador");
    this.menuCtrl.enable(false, "Tomador");
  }

}

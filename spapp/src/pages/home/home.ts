import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import {CrearCuentaPage} from '../crear-cuenta/crear-cuenta';
import {LoginPage} from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public menuCtrl: MenuController) {
    menuCtrl.enable(false);
  }
  onclick(){
    this.navCtrl.push(CrearCuentaPage);
  }
  onclick2(){
    this.navCtrl.push(LoginPage);
  }
}

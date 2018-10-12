import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';

/**
 * Generated class for the IngresosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ingresos',
  templateUrl: 'ingresos.html',
})
export class IngresosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public locationTracker: LocationTrackerProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IngresosPage');
  }
  start(){
    this.locationTracker.startTracking();
  }
 
  stop(){
    this.locationTracker.stopTracking();
  }
      
}

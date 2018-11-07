import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';
/**
 * Generated class for the CitaTerminarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cita-terminar',
  templateUrl: 'cita-terminar.html',
})
export class CitaTerminarPage {
  rating: number = 4;
  constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events) {
    events.subscribe('star-rating:changed', (starRating) => {
      console.log(starRating);
      this.rating = starRating;
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CitaTerminarPage');
    
  }

}

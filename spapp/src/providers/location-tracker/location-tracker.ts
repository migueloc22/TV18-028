import { HttpClient } from "@angular/common/http";
import { Injectable, NgZone } from "@angular/core";
import { BackgroundGeolocation } from "@ionic-native/background-geolocation";
import { Geolocation, Geoposition } from "@ionic-native/geolocation";
import { ServiceSpappProvider } from '../../providers/service-spapp/service-spapp';
import "rxjs/add/operator/filter";

/*
  Generated class for the LocationTrackerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationTrackerProvider {
  public watch: any;
  public lat: number = 0;
  public lng: number = 0;

  constructor(public zone: NgZone,private backgroundGeolocation: BackgroundGeolocation,private geolocation: Geolocation,public service: ServiceSpappProvider) {}
  cargarUsuario(num_documento,latitud,longitud) {
    this.service
      .Crup("LogicaUsuario.php", {
        option: "ActulizarPosicion",
        num_documento:num_documento,
        latitud:latitud,
        longitud:longitud,
      })
      .subscribe(data => {
        console.log(data);
      }),
      error => {
        alert(error);
      };
  }
  startTracking() {
    // Background Tracking

    let config = {
      desiredAccuracy: 10,
      stationaryRadius: 20,
      distanceFilter: 10,
      debug: true,
      interval: 3000,
      stopOnTerminate: false,
    };

    this.backgroundGeolocation.configure(config).subscribe(
      location => {
        console.log(
          "BackgroundGeolocation:  " +
            location.latitude +
            "," +
            location.longitude
        );

        // Run update inside of Angular's zone
        this.zone.run(() => {
          this.lat = location.latitude;
          this.lng = location.longitude;
          var user =JSON.parse(localStorage.getItem("user"));
          this.cargarUsuario(user.num_documento, this.lat,this.lng);
        });
      },
      err => {
        console.log(err);
      }
    );

    // Turn ON the background-geolocation system.
    this.backgroundGeolocation.start();

    // Foreground Tracking

    let options = {
      frequency: 3000,
      enableHighAccuracy: true
    };

    this.watch = this.geolocation
      .watchPosition(options)
      .filter((p: any) => p.code === undefined)
      .subscribe((position: Geoposition) => {
        console.log(position);

        // Run update inside of Angular's zone
        this.zone.run(() => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          var user =JSON.parse(localStorage.getItem("user"));
          this.cargarUsuario(user.num_documento, this.lat,this.lng);
        });
      });
  }

  stopTracking() {
    console.log('stopTracking');
 
    this.backgroundGeolocation.finish();
    this.watch.unsubscribe();
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs";
import { HTTP } from "@ionic-native/http";

/*
  Generated class for the ServiceSpappProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
interface Iron_usuario {
  id_rol_usuario;
  rol_usuario;
}
@Injectable()
export class ServiceSpappProvider {
  servidor = "http://10.73.54.53/GitHub/TV18-028/conexion/Logica/";
  constructor(
    public http: HttpClient,
    public http2: Http,
    private http3: HTTP
  ) {
    // console.log("Hello ServiceSpappProvider Provider");
  }
  ListarDatos(url, option) {
    return this.http
      .post(this.servidor + url, JSON.stringify({option:option}))
      .map(res => res);
  }
  Crup(url, parameter) {
    return this.http
      .post(this.servidor + url, JSON.stringify(parameter),{responseType:'text'})
      .map(res => res);
  }
  ListarDatos2(url, option) {
    return this.http
      .post(this.servidor + url, JSON.stringify(option))
      .map(res => res);
  }
}

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {IndexAdminPage} from '../pages/index-admin/index-admin';
import {IndexPrestadorPage} from '../pages/index-prestador/index-prestador';
import {IndexTomadorPage} from '../pages/index-tomador/index-tomador';
import {CitasPage} from '../pages/citas/citas';
import {IngresosPage} from '../pages/ingresos/ingresos';
import {ConfiguracionPage} from '../pages/configuracion/configuracion';
import {ReportePage} from '../pages/reporte/reporte';
import {UsuarioPage} from '../pages/usuario/usuario';
import {ConfirmarCitaPage} from '../pages/confirmar-cita/confirmar-cita';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages_tomador: Array<{title: string, component: any}>;
  pages_Prestador: Array<{title: string, component: any}>;
  pages_Admin: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages_tomador = [
      { title: 'Inicio', component: IndexTomadorPage },
      { title: 'Citas', component: CitasPage },
      { title: 'Configuración', component: ConfiguracionPage }
    ];
    this.pages_Prestador = [
      { title: 'Inicio', component: IndexPrestadorPage },
      { title: 'Citas', component: CitasPage },
      { title: 'Ingresos', component: IngresosPage },
      { title: 'Configuración', component: ConfiguracionPage }
    ];
    this.pages_Admin = [
      { title: 'Inicio', component: IndexAdminPage },
      { title: 'Usuario', component: UsuarioPage },
      { title: 'Reporte', component: ReportePage },
      { title: 'Configuración', component: ConfiguracionPage }
    ];
    if (localStorage.getItem("user")!=null) {
      var lgUser=JSON.parse(localStorage.getItem("user"));
      switch (lgUser.fk_id_rol_usuario) {
        case "1":
          //console.log("Tomador");
           this.rootPage=IndexTomadorPage;
          break;
        case "2":
          //console.log("Prestador";
          this.rootPage=IndexPrestadorPage;
          break;
        case "3":
          //console.log("Administrador";
           this.rootPage=IndexAdminPage;
          break;

        default:
        localStorage.removeItem("user");
        this.rootPage = HomePage;
          break;
      }
      
    } else {
      this.rootPage = HomePage;
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(pages_tomador) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(pages_tomador.component);
  }
  closeMenu(){
    localStorage.removeItem("user");
    this.nav.setRoot(HomePage);
  }
  openPage_Prestador(pages_Prestador) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(pages_Prestador.component);
  }
  openPage_Admin(pages_Admin) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(pages_Admin.component);
  }
}

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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

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

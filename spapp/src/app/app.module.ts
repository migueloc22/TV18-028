import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// paginas
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {CrearCuentaPage} from '../pages/crear-cuenta/crear-cuenta';
import {LoginPage} from '../pages/login/login';
import {IndexAdminPage} from '../pages/index-admin/index-admin';
import {IndexPrestadorPage} from '../pages/index-prestador/index-prestador';
import {IndexTomadorPage} from '../pages/index-tomador/index-tomador';
import {CitasPage} from '../pages/citas/citas';
import {IngresosPage} from '../pages/ingresos/ingresos';
import {ConfiguracionPage} from '../pages/configuracion/configuracion';
import {ReportePage} from '../pages/reporte/reporte';
import {UsuarioPage} from '../pages/usuario/usuario';
import {PerfilUsuarioPage} from '../pages/perfil-usuario/perfil-usuario';
import {UbicaionPerfilPage} from '../pages/ubicaion-perfil/ubicaion-perfil';
import {ConfirmarCitaPage} from '../pages/confirmar-cita/confirmar-cita';
import {CitaDetallePage} from '../pages/cita-detalle/cita-detalle';
import {CitaConfirmarPage} from '../pages/cita-confirmar/cita-confirmar';
import {CitaNavPage} from '../pages/cita-nav/cita-nav';

// api
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceSpappProvider } from '../providers/service-spapp/service-spapp'; 
import { HttpClientModule } from "@angular/common/http";
import { HttpModule} from '@angular/http';
import { HTTP } from '@ionic-native/http';
import { Camera } from '@ionic-native/camera';
import { Base64 } from '@ionic-native/base64';
import { File } from '@ionic-native/file';
import { AgmCoreModule } from '@agm/core';
import { BackgroundGeolocation} from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationTrackerProvider } from '../providers/location-tracker/location-tracker';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CrearCuentaPage,
    LoginPage,
    IndexAdminPage,
    IndexPrestadorPage,
    IndexTomadorPage,
    CitasPage,
    IngresosPage,
    ConfiguracionPage,
    ReportePage,
    UsuarioPage,
    PerfilUsuarioPage,
    UbicaionPerfilPage,
    ConfirmarCitaPage,
    CitaDetallePage,
    CitaConfirmarPage,
    CitaNavPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCAWIFGXpkhOT8-7G3o66tHcWiTE1n5H3k'
    }),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CrearCuentaPage,
    LoginPage,
    IndexAdminPage,
    IndexPrestadorPage,
    IndexTomadorPage,
    CitasPage,
    IngresosPage,
    ConfiguracionPage,
    ReportePage,
    UsuarioPage,
    PerfilUsuarioPage,
    UbicaionPerfilPage,
    ConfirmarCitaPage,
    CitaDetallePage,
    CitaConfirmarPage,
    CitaNavPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceSpappProvider,
    HTTP,
    Camera,
    Base64,
    BackgroundGeolocation,
    File,
    Geolocation,
    LocationTrackerProvider,
    
  ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// paginas
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {CrearCuentaPage} from '../pages/crear-cuenta/crear-cuenta';
import {LoginPage} from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceSpappProvider } from '../providers/service-spapp/service-spapp'; 
import { HttpClientModule } from "@angular/common/http";
import { HttpModule} from '@angular/http';
import { HTTP } from '@ionic-native/http';
import { Camera } from '@ionic-native/camera';
import { Base64 } from '@ionic-native/base64';
import { File } from '@ionic-native/file';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CrearCuentaPage,
    LoginPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CrearCuentaPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceSpappProvider,
    HTTP,
    Camera,
    Base64,
    File
  ]
})
export class AppModule {}

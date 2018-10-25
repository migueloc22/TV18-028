import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ActionSheetController
} from "ionic-angular";
import { LocationTrackerProvider } from "../../providers/location-tracker/location-tracker";
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
/**
 * Generated class for the IngresosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface Ifecha{
  fechaInicia:String;
  fechaResta:String;
}
@Pipe({
  name: 'dateFormatPipe',
})
@IonicPage()
@Component({
  selector: "page-ingresos",
  templateUrl: "ingresos.html"
})
export class IngresosPage {
  public anyoActual: Date = new Date();
  Fechas:Ifecha[]=new Array();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public locationTracker: LocationTrackerProvider,
    public actionSheetCtrl: ActionSheetController
  ) {}

  ionViewDidLoad() {
    //console.log('ionViewDidLoad IngresosPage');
  }
  // start(){
  //   this.locationTracker.startTracking();
  // }

  // stop(){
  //   this.locationTracker.stopTracking();
  // }
  // lineChart
  public lineChartData: Array<any> = [[65, 59, 80, 81, 56, 55, 40]];
  public lineChartLabels: Array<any> = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July"
  ];
  public lineChartType: string = "line";
  public pieChartType: string = "pie";
  public randomizeType(): void {
    this.lineChartType = this.lineChartType === "line" ? "bar" : "line";
    this.pieChartType = this.pieChartType === "doughnut" ? "pie" : "doughnut";
  }
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  VER() {
    // Creas la fecha
    var fecha1 = new Date();
    var fecha2 = new Date();
    var fecha3 = new Date();
    var fecha4 = new Date();
    fecha2.setMonth(fecha2.getMonth() - 1 );
    fecha3.setMonth(fecha3.getMonth() - 2 );
    fecha4.setMonth(fecha3.getMonth() - 3 );
    var datePipe = new DatePipe("en-US");
    this.Fechas.push({fechaInicia: datePipe.transform(fecha1, 'dd/MM/yyyy'),fechaResta:datePipe.transform(fecha2, 'dd/MM/yyyy')});
    this.Fechas.push({fechaInicia:datePipe.transform(fecha2, 'dd/MM/yyyy'),fechaResta:datePipe.transform(fecha3, 'dd/MM/yyyy')});
    this.Fechas.push({fechaInicia:datePipe.transform(fecha3, 'dd/MM/yyyy'),fechaResta:datePipe.transform(fecha4, 'dd/MM/yyyy')});
    console.log(this.Fechas);
  }

  restarFecha(fecha:Date,num:any)
  {
    fecha.setMonth(fecha.getMonth() - num );
    return fecha;
  }
}

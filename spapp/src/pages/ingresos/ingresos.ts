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
import { ServiceSpappProvider } from "../../providers/service-spapp/service-spapp";
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
    public actionSheetCtrl: ActionSheetController,
    public service: ServiceSpappProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad IngresosPage');
    this.cargarFechas();
    var user =JSON.parse(localStorage.getItem("user"));
    var fecha1 = new Date();
    var fecha2 = new Date(); 
    fecha2.setMonth(fecha2.getMonth() - 1 );
    var datePipe = new DatePipe("en-US");
    this.CargarReporte(user.num_documento,datePipe.transform(fecha1, 'yyyy/MM/dd'),datePipe.transform(fecha2, 'yyyy/MM/dd'));
  }
  // start(){
  //   this.locationTracker.startTracking();
  // }

  // stop(){
  //   this.locationTracker.stopTracking();
  // }
  // lineChart
  public lineChartData: Array<any> = [[0, 59, 80, 81, 56, 55, 40]];
  public lineChartLabels: Array<any> = [
    "01",
    "02",
    "12",
    "15",
    "16",
    "20",
    "22"
  ];
  public lineChartType: string = "line";
  // public pieChartType: string = "pie";
  public randomizeType(): void {
    this.lineChartType = this.lineChartType === "line" ? "bar" : "line";
    // this.pieChartType = this.pieChartType === "doughnut" ? "pie" : "doughnut";
  }
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  cargarFechas() {
    // Creas la fecha
    var fecha1 = new Date();
    var fecha2 = new Date();
    var fecha3 = new Date();
    var fecha4 = new Date();
    fecha2.setMonth(fecha2.getMonth() - 1 );
    fecha3.setMonth(fecha3.getMonth() - 2 );
    fecha4.setMonth(fecha4.getMonth() - 3 );
    var datePipe = new DatePipe("en-US");
    this.Fechas.push({fechaInicia: datePipe.transform(fecha1, 'yyyy/MM/dd'),fechaResta:datePipe.transform(fecha2, 'yyyy/MM/dd')});
    this.Fechas.push({fechaInicia:datePipe.transform(fecha2, 'yyyy/MM/dd'),fechaResta:datePipe.transform(fecha3, 'yyyy/MM/dd')});
    this.Fechas.push({fechaInicia:datePipe.transform(fecha3, 'yyyy/MM/dd'),fechaResta:datePipe.transform(fecha4, 'yyyy/MM/dd')});
    console.log(this.Fechas);
  }
  CargarDatos(){
    console.log("Carga daTos");
  }
  CargarReporte(id,FechaF,FechaI){
    var filter="WHERE fk_id_prestador="+id+" AND fecha_cita BETWEEN '"+FechaI+"' AND '"+FechaF+"'";
    this.service
      .ListarDatos2("LogicaCita.php", {option:"reportePrestador",filter:filter})
      .subscribe(data => {
        console.log(data);
      }),
      error => {
        alert(error);
      };
  }
}

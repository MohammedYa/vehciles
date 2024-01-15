import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ReportsService } from '../../services/reports.service';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';
import { ExportPdfService } from '../../services/export-pdf.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import jspdf from 'jspdf';
export interface carBig {
  color: string;
  destinationType: string;
  module: string;
  outCount: number;
  plateNumber:string;
  scrapDate:string;
  structureNumber:string;
  type:string;
  vehicleType:string;

}

@ViewChild('table', { read: ElementRef })

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})


export class ReportsComponent implements OnInit {
  table!: ElementRef;

  displayedColumns: string[] = ['color', 'destinationType', 'module',  'plateNumber', 'type', 'structureNumber'];
  dataSource: any;

  StatisticsBigCars:any=[] 
  // StatisticsSmallCars:any=[]
  // StatisticsMotorcycle:any=[] 
  // GeneralStatisticsMotorcycle:any=[]
  // GeneralStatisticsVihcles:any=[] 
  // SellSmallCars:any=[]
  // SellBigCars:any=[] 
  // SellCarsInPeriod:any=[]
  // SellMotorcycleInPeriod:any=[] 
  // StatisticsSmallCarsInDate:any=[]
  formDate:string=''
constructor(private _ReportsService:ReportsService,private pdfExportService:ExportPdfService ){
  // this.getStatisticsBigCars()
  // this.getStatisticsSmallCars()
  // this.getStatisticsMotorcycle()
  // this.getGeneralStatisticsMotorcycle()
  // this.getGeneralStatisticsMotorcycle()
  // this.getGeneralStatisticsVihcles()
  // this.getSellSmallCars()
  // this.getSellBigCars()
  // this.getSellCarsInPeriod(this.formDate)
  // this.getSellMotorcycleInPeriod(this.formDate)
  // this.getStatisticsSmallCarsInDate(this.formDate)

}
ngOnInit(): void {
  this.getStatisticsBigCars()
  
}

getStatisticsBigCars(){
  this._ReportsService.getStatisticsBigCars().subscribe((res)=>{
    this.StatisticsBigCars=res
     this.dataSource = new MatTableDataSource<any>(res);
     console.log(this.dataSource._data.value);

  })
}
// getStatisticsSmallCars(){
//   this._ReportsService.getStatisticsSmallCars().subscribe((res)=>{
//     console.log(res);
//     this.StatisticsSmallCars=res

//   })
// }
// getStatisticsMotorcycle(){
//   this._ReportsService.getStatisticsMotorcycle().subscribe((res)=>{
//     console.log(res);
//     this.StatisticsMotorcycle=res
 
//   })
// }
// getGeneralStatisticsMotorcycle(){
//   this._ReportsService.getGeneralStatisticsMotorcycle().subscribe((res)=>{
//     console.log(res);
//     this.GeneralStatisticsMotorcycle=res
 
//   })
// }
// getGeneralStatisticsVihcles(){
//   this._ReportsService.getGeneralStatisticsVihcles().subscribe((res)=>{
//     console.log(res);
//     this.GeneralStatisticsVihcles=res

//   })
// }
// getSellSmallCars(){
//   this._ReportsService.getSellSmallCars().subscribe((res)=>{
//     console.log(res);
//     this.SellSmallCars=res
  
//   })
// }
// getSellBigCars(){
//   this._ReportsService.getSellBigCars().subscribe((res)=>{
//     console.log(res);
//     this.SellBigCars=res
 
//   })
// }
// getSellCarsInPeriod(DateFrom:string){
//   this._ReportsService.getSellCarsInPeriod(DateFrom).subscribe((res)=>{
//     console.log(res);
//     this.SellCarsInPeriod=res

//   })
// }
// getSellMotorcycleInPeriod(DateFrom:string){
//   this._ReportsService.getSellMotorcycleInPeriod(DateFrom).subscribe((res)=>{
//     console.log(res);
//     this.SellMotorcycleInPeriod=res

//   })
// }
// getStatisticsSmallCarsInDate(DateFrom:string){
//   this._ReportsService.getStatisticsSmallCarsInDate(DateFrom).subscribe((res)=>{
//     console.log(res);
//     this.StatisticsSmallCarsInDate=res
//   })
// }









//defult  name of  file 
fileName:string="تقرير عن احصائيات السيارات الكبيرة"
exportAsExel(){
// get table 
let data=document.getElementById("table") 
const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(data)

//generate work book and add the worksheet
const wb:XLSX.WorkBook=XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb,ws,'sheet1')

//save to file 
XLSX.writeFile(wb,'Data.xlsx')
}

exportToPdf() {
  const pdfData = document.getElementById('table');

  html2canvas(pdfData!).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jspdf('p', 'mm', 'a4');
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('table-export.pdf');
  });
}
}

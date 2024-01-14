import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;


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
constructor(private _ReportsService:ReportsService){
  this.getStatisticsBigCars()
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
}

getStatisticsBigCars(){
  this._ReportsService.getStatisticsBigCars().subscribe((res)=>{
    console.log(res);
    this.StatisticsBigCars=res

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

}

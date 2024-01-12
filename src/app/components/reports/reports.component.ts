import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements OnInit {
  StatisticsBigCars:any=[] 
  StatisticsSmallCars:any=[]
  StatisticsMotorcycle:any=[] 
  GeneralStatisticsMotorcycle:any=[]
  GeneralStatisticsVihcles:any=[] 
  SellSmallCars:any=[]
  SellBigCars:any=[] 
  SellCarsInPeriod:any=[]
  SellMotorcycleInPeriod:any=[] 
  StatisticsSmallCarsInDate:any=[]
  formDate:string=''
constructor(private _ReportsService:ReportsService){
  this.getStatisticsBigCars()
  this.getStatisticsSmallCars()
  this.getStatisticsMotorcycle()
  this.getGeneralStatisticsMotorcycle()
  this.getGeneralStatisticsMotorcycle()
  this.getGeneralStatisticsVihcles()
  this.getSellSmallCars()
  this.getSellBigCars()
  this.getSellCarsInPeriod(this.formDate)
  this.getSellMotorcycleInPeriod(this.formDate)
  this.getStatisticsSmallCarsInDate(this.formDate)

}
ngOnInit(): void {
}
getStatisticsBigCars(){
  this._ReportsService.getStatisticsBigCars().subscribe((res)=>{
    console.log(res);
    this.StatisticsBigCars=res

  })
}
getStatisticsSmallCars(){
  this._ReportsService.getStatisticsSmallCars().subscribe((res)=>{
    console.log(res);
    this.StatisticsSmallCars=res

  })
}
getStatisticsMotorcycle(){
  this._ReportsService.getStatisticsMotorcycle().subscribe((res)=>{
    console.log(res);
    this.StatisticsMotorcycle=res
 
  })
}
getGeneralStatisticsMotorcycle(){
  this._ReportsService.getGeneralStatisticsMotorcycle().subscribe((res)=>{
    console.log(res);
    this.GeneralStatisticsMotorcycle=res
 
  })
}
getGeneralStatisticsVihcles(){
  this._ReportsService.getGeneralStatisticsVihcles().subscribe((res)=>{
    console.log(res);
    this.GeneralStatisticsVihcles=res

  })
}
getSellSmallCars(){
  this._ReportsService.getSellSmallCars().subscribe((res)=>{
    console.log(res);
    this.SellSmallCars=res
  
  })
}
getSellBigCars(){
  this._ReportsService.getSellBigCars().subscribe((res)=>{
    console.log(res);
    this.SellBigCars=res
 
  })
}
getSellCarsInPeriod(DateFrom:string){
  this._ReportsService.getSellCarsInPeriod(DateFrom).subscribe((res)=>{
    console.log(res);
    this.SellCarsInPeriod=res

  })
}
getSellMotorcycleInPeriod(DateFrom:string){
  this._ReportsService.getSellMotorcycleInPeriod(DateFrom).subscribe((res)=>{
    console.log(res);
    this.SellMotorcycleInPeriod=res

  })
}
getStatisticsSmallCarsInDate(DateFrom:string){
  this._ReportsService.getStatisticsSmallCarsInDate(DateFrom).subscribe((res)=>{
    console.log(res);
    this.StatisticsSmallCarsInDate=res
  })
}

}

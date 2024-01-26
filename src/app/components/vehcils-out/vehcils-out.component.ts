import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VehcilsOutService } from '../../services/vehcils-out.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-vehcils-out',
  templateUrl: './vehcils-out.component.html',
  styleUrl: './vehcils-out.component.css'
})
export class VehcilsOutComponent implements OnInit {
  isSuccess:boolean=false
  error:string=""
  Id:number=0;
  vehicleId: any;
  dayes: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
  Date: string="";
  resipt:any= { };

constructor(private _ActivatedRoute : ActivatedRoute , private _VehcilsOutService:VehcilsOutService,private _SearchService: SearchService ) {

  this.Id= _ActivatedRoute.snapshot.params['Id']
 }

getOutForm:FormGroup=new FormGroup(
  {
    "outDestination": new FormControl (null ,[Validators.required,Validators.maxLength(15),Validators.minLength(4)]),
    "caseOfOut": new FormControl (null , [Validators.required,Validators.minLength(4),Validators.maxLength(15)]),   
    "PlateNumber":new FormControl (this.Id,[Validators.required])
  }
)


saleForm(form:FormGroup){
  this.resipt={
    outDestination:form.value.outDestination,
    caseOfOut:form.value.caseOfOut,
    PlateNumber:form.value.PlateNumber,
    date:new Date(), 
    }  
this._SearchService.getVehcilSearch(form.value.PlateNumber).subscribe((res)=>{
  // this.Date = form.value.Addedmonth + "-" + form.value.Addedday + "-" + form.value.Addedyear;    

  this.vehicleId=res.id
   let obj={
    outDestination:form.value.outDestination, 
    caseOfOut:form.value.caseOfOut, 
    date:new Date(), 
    vehicleId:this.vehicleId, 
 }
 
  this._VehcilsOutService.outVehcils(obj).subscribe(
    (res)=>{
      if(res.isSuccess){
        form.reset();
      this.isSuccess=true
      }  
      },
      (er)=>{
        this.error=er.message
      }
  )
   })
}
ngOnInit(): void {}
}

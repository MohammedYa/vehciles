import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SaleVehcilsService } from '../../services/sale-vehcils.service';
import {NgxPrintModule} from 'ngx-print';
import { SearchService } from '../../services/search.service';
@Component({
  selector: 'app-sale-vehcils',
  templateUrl: './sale-vehcils.component.html',
  styleUrl: './sale-vehcils.component.css',
})
export class SaleVehcilsComponent implements OnInit {
   resipt:any={}
  isSuccess:boolean=false
  error:string=""
  Id:number= 0 ;
  vehcile: any;
  vehicleId:number=0;
  constructor(private _ActivatedRoute : ActivatedRoute , private _SaleVehcilsService :SaleVehcilsService,private _SearchService: SearchService ) {
    this.Id= _ActivatedRoute.snapshot.params['Id']
   }


  gatSaleForm:FormGroup=new FormGroup(
    {
      "buyingDestination": new FormControl (null ,[Validators.required,Validators.maxLength(15),Validators.minLength(4)]),
      "buyerIdentity": new FormControl (null , [Validators.required,Validators.minLength(4),Validators.maxLength(15)]),
      "value":new FormControl (null, [Validators.required]),
      "PlateNumber":new FormControl (null,[Validators.required])
    }
  )


saleForm(form:FormGroup){
 this.resipt={
  buyingDestination:form.value.buyingDestination,
  buyerIdentity:form.value.buyerIdentity,
  value:form.value.value,
  PlateNumber:form.value.PlateNumber

  }
this._SearchService.getVehcilSearch(form.value.PlateNumber).subscribe((res)=>{
 this.vehicleId=res.id
  let obj={
  buyingDestination:form.value.buyingDestination, 
  buyerIdentity:form.value.buyerIdentity, 
  value:Number(form.value.value), 
  vehicleId:this.vehicleId, 
}

this._SaleVehcilsService.saleVehcils(obj).subscribe(
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

},
(er)=>{
  this.error="رقم اللوحة غير صحيح"
}
,
)



}


  ngOnInit(): void {

  }
}

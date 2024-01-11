import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SaleVehcilsService } from '../../services/sale-vehcils.service';

@Component({
  selector: 'app-sale-vehcils',
  templateUrl: './sale-vehcils.component.html',
  styleUrl: './sale-vehcils.component.css',
})
export class SaleVehcilsComponent implements OnInit {

  Id:number= 0 ;

  constructor(private _ActivatedRoute : ActivatedRoute , private _SaleVehcilsService :SaleVehcilsService) {
    this.Id= _ActivatedRoute.snapshot.params['Id']
   }


  gatSaleForm:FormGroup=new FormGroup(
    {
      "buyingDestination": new FormControl (null ,[Validators.required,Validators.maxLength(15),Validators.minLength(4)]),
      "buyerIdentity": new FormControl (null , [Validators.required,Validators.minLength(4),Validators.maxLength(15)]),
      "value":new FormControl (null, [Validators.required]),
      "vehicleId":new FormControl (this.Id,[Validators.required])
    }
  )


saleForm(form:FormGroup){
this._SaleVehcilsService.saleVehcils(form).subscribe((res)=>{
  console.log(res);
  
})
}


  ngOnInit(): void {

  }
}

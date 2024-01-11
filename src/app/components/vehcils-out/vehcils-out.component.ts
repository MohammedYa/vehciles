import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VehcilsOutService } from '../../services/vehcils-out.service';

@Component({
  selector: 'app-vehcils-out',
  templateUrl: './vehcils-out.component.html',
  styleUrl: './vehcils-out.component.css'
})
export class VehcilsOutComponent implements OnInit {

  Id:number=0;

constructor(private _ActivatedRoute : ActivatedRoute , private _VehcilsOutService:VehcilsOutService ) {

  this.Id= _ActivatedRoute.snapshot.params['Id']
 }

getOutForm:FormGroup=new FormGroup(
  {
    "outDestination": new FormControl (null ,[Validators.required,Validators.maxLength(15),Validators.minLength(4)]),
    "caseOfOut": new FormControl (null , [Validators.required,Validators.minLength(4),Validators.maxLength(15)]),
    "date":new FormControl (null, [Validators.required]),
    "vehicleId":new FormControl (this.Id,[Validators.required])
  }
)


saleForm(form:FormGroup){
  this._VehcilsOutService.outVehcils(form).subscribe((res)=>{
    console.log(res);
  })
  }

ngOnInit(): void {

}
}

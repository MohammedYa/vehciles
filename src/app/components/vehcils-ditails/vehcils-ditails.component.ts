import { Component } from '@angular/core';
import { VehcilsDitailsService } from '../../services/vehcils-ditails.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehcils-ditails',
  templateUrl: './vehcils-ditails.component.html',
  styleUrl: './vehcils-ditails.component.css'
})
export class VehcilsDitailsComponent {
  Id:string=""
  vehcile:any={}
  errors:string=""
  isValid=true
constructor( private _GetVehcilService: VehcilsDitailsService  ,private _ActivatedRoute  :ActivatedRoute   ){
 this.Id= _ActivatedRoute.snapshot.params['Id']
 console.log(this.Id);
 
 this.getVehcils(this.Id)
}
  ngOnInit(): void {
  }
  getVehcils(Id:string){
    
  this._GetVehcilService.getVehciles(Id).subscribe(
    (res)=>{
      console.log(res);
      this.vehcile=res
    }
    ,(error)=>{
      // console.log(error);
      // this.errors=error.error.message
      // this.isValid=false
    }
  )
  }
}

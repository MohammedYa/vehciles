import { Component } from '@angular/core';
import { VehcilsDitailsService } from '../../services/vehcils-ditails.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteVehcilService } from '../../services/delete-vehcil.service';
Router
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
constructor(private _Router:Router, private _GetVehcilService: VehcilsDitailsService  ,private _ActivatedRoute  :ActivatedRoute ,private  _DeleteVehcilService:DeleteVehcilService  ){
 this.Id= _ActivatedRoute.snapshot.params['Id']
 
 this.getVehcils(this.Id)
}

  ngOnInit(): void {
  }
  getVehcils(Id:string){
    
  this._GetVehcilService.getVehciles(Id).subscribe(
    (res)=>{
      this.vehcile=res
    }
    ,(error)=>{
      this.errors=error.error.message
      this.isValid=false
    }
  )
  }

  deleteVehcil(id:number){
   
    this._DeleteVehcilService.deleteVehcil(id).subscribe(
      (res)=>{
        if(res.isSuccess){
          this._Router.navigateByUrl("/Home")
          }  
          },
        
          )

  }
}

import { Component, OnInit } from '@angular/core';
import { GetAllVehcilsService } from '../../services/get-all-vehcils.service';
import { RevertVehcilService } from '../../services/revert-vehcil.service';

@Component({
  selector: 'app-vehcils',
  templateUrl: './vehcils.component.html',
  styleUrl: './vehcils.component.css'
})
export class VehcilsComponent implements OnInit {
  condition:boolean=true
  condition1:boolean=false
  isDeleted:boolean=false
  constructor( private _GetAllVehcilsService:GetAllVehcilsService,private _RevertVehcilService:RevertVehcilService ){
  this.getAllVehcils()
  }
  ngOnInit(): void {

  }
  
  vehcils:any=[];
  changeCon(){
    this.condition=false
    this.condition1=true
  }
  changeCon1(){
    this.condition1=false
    this.condition=true
  }
  // isDeleted():boolean{
  //   return true
  // }
  getAllVehcils(){
    this._GetAllVehcilsService.getAllVehcils().subscribe((res)=>{
      
     this.vehcils=res   

    })

  }
revertVehcils(Id:number){
this._RevertVehcilService.revertVehicles(Id).subscribe(
  (res)=>{
    
  }
)
}
}

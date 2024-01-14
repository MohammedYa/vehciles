import { Component, OnInit } from '@angular/core';
import { GetAllVehcilsService } from '../../services/get-all-vehcils.service';

@Component({
  selector: 'app-vehcils',
  templateUrl: './vehcils.component.html',
  styleUrl: './vehcils.component.css'
})
export class VehcilsComponent implements OnInit {

  constructor( private _GetAllVehcilsService:GetAllVehcilsService ){
  this.getAllVehcils()
  }
  ngOnInit(): void {

  }
  
  vehcils:any=[];

  getAllVehcils(){
    this._GetAllVehcilsService.getAllVehcils().subscribe((res)=>{
      
     this.vehcils=res   
     console.log(this.vehcils);

    })

  }
}

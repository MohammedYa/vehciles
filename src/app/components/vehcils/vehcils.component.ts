import { Component, OnInit } from '@angular/core';
import { GetAllVehcilsService } from '../../services/get-all-vehcils.service';

@Component({
  selector: 'app-vehcils',
  templateUrl: './vehcils.component.html',
  styleUrl: './vehcils.component.css'
})
export class VehcilsComponent implements OnInit {

  constructor( private _GetAllVehcilsService:GetAllVehcilsService ){

  }
  ngOnInit(): void {

  }
  
  vehcils:any=[];

  getAllVehcils(){
    this._GetAllVehcilsService.getAllVehcils().subscribe((res)=>{
     this.vehcils=res
    })

  }
}

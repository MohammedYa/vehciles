import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddVechilsService } from '../../services/add-vechils.service';

@Component({
  selector: 'app-add-vehcils',
  templateUrl: './add-vehcils.component.html',
  styleUrl: './add-vehcils.component.css'
})
export class AddVehcilsComponent {
  constructor(private _AddvehiclsService:AddVechilsService) { }
  addVehcilForm:FormGroup= new FormGroup({
    'PlateNumber':new FormControl(null,[Validators.minLength(3),Validators.maxLength(5),Validators.required]),
    'StructureNumber': new FormControl (null,[Validators.minLength(3),Validators.maxLength(15),Validators.required]),
    'Module': new FormControl (null,[Validators.required]),
    'Type': new FormControl (null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    'Color': new FormControl (null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    'AddedDate': new FormControl (null,[Validators.pattern(/^[A-Za-z0-9]{6,}$/),Validators.required]),
    'VehicleType': new FormControl (null,[Validators.required]),
    'DestinationType': new FormControl (null,[Validators.required]),
    'Notes': new FormControl (null,[Validators.required]),
    'Image': new FormControl (null,[Validators.required])
  })

  addVehcilsForm(form:FormGroup){
    console.log(form.value);

  }

  url:string= '../../../assets/images/add-image 1.png' ;
  onSelectFile(e:any){
  if (e.target.files){
     var reader= new FileReader();
     reader.readAsDataURL(e.target.files[0]);
     reader.onload=(event:any)=> {
      this.url=event.target.result ;
     }
    }
  }
}


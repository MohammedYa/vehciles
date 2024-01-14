import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddVechilsService } from '../../services/add-vechils.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VehcilsDitailsService } from '../../services/vehcils-ditails.service';
import { UpdateVehcilsService } from '../../services/update-vehcils.service';

@Component({
  selector: 'app-editvehcils',
  templateUrl: './editvehcils.component.html',
  styleUrl: './editvehcils.component.css'
})
export class EditvehcilsComponent implements OnInit {
  month: any = ["محرم", "صفر", "ربيع الاول", "ربيع الثاني ", "جمادي الاول ", "جمادي الاخرة","رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة"]
  dayes: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
  selectedFile!: File;
  Img: any;
  error = "يجب اختيار اليوم او الشهر بشكل صحيح "
  er: boolean = false;
  date: string = ""
  AddedDate: Date;
  Id:string=""
  vehcile:any={}

  constructor(private _UpdateVehcilsService: UpdateVehcilsService,private _Router:Router, private _GetVehcilService: VehcilsDitailsService  ,private _ActivatedRoute  :ActivatedRoute  ) {
    this.Id= _ActivatedRoute.snapshot.params['Id']
    this.AddedDate = new Date(this.date);
    this.getVehcils(this.Id)
    // this.setValues()
  }
ngOnInit(): void {
}
addVehcilForm: FormGroup = new FormGroup({
'PlateNumber': new FormControl(null, [Validators.minLength(3), Validators.maxLength(15), Validators.required]),
'StructureNumber': new FormControl(null, [Validators.minLength(3), Validators.maxLength(15), Validators.required]),
'Module': new FormControl(null, [Validators.required]),
'Type': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
'Color': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
'Addedyear': new FormControl(null, [Validators.required]),
'Addedday': new FormControl("اليوم", [Validators.required]),
'Addedmonth': new FormControl("الشهر", [Validators.required]),
'VehicleType': new FormControl(null, [Validators.required]),
'DestinationType': new FormControl(null, [Validators.required]),
'Notes': new FormControl(null, [Validators.required]),
'Image': new FormControl(null)
})
getVehcils(Id:string){

this._GetVehcilService.getVehciles(Id).subscribe(
(res)=>{
this.vehcile=res
this.addVehcilForm.controls['PlateNumber'].setValue(this.vehcile.plateNumber);
this.addVehcilForm.controls['StructureNumber'].setValue(this.vehcile.structureNumber);
this.addVehcilForm.controls['Module'].setValue(this.vehcile.module);
this.addVehcilForm.controls['Type'].setValue(this.vehcile.type);
this.addVehcilForm.controls['Color'].setValue(this.vehcile.color);
this.addVehcilForm.controls['VehicleType'].setValue(this.vehcile.vehicleType);
this.addVehcilForm.controls['DestinationType'].setValue(this.vehcile.destinationType);
this.addVehcilForm.controls['Notes'].setValue(this.vehcile.notes);
// this.addVehcilForm.controls['Color'].setValue(this.vehcile.plateNumber);
// this.addVehcilForm.controls['Color'].setValue(this.vehcile.plateNumber);

}

)
}
Back(){
this._Router.navigateByUrl("/Home")
} 

  updateVehcilsForm(form: FormGroup) {
    
    this.date = form.value.Addedmonth + "-" + form.value.Addedday + "-" + form.value.Addedyear;    
    let obj = {
      plateNumber: form.value.PlateNumber,
      structureNumber: form.value.StructureNumber,
      Module: form.value.Module,
      Type: form.value.Type,
      Color: form.value.Color,
      VehicleType: Number(form.value.VehicleType),
      DestinationType: Number(form.value.DestinationType),
      Notes: form.value.Notes,
      Image: this.selectedFile,
      Addedyear:this.date
    }

    var formData = new FormData();
    formData.append("PlateNumber", obj.plateNumber);
    formData.append("StructureNumber", obj.structureNumber);
    formData.append("Module", obj.Module);
    formData.append("Type", obj.Type);
    formData.append("Color", obj.Color);
    formData.append("VehicleType", obj.VehicleType.toString());
    formData.append("DestinationType", obj.DestinationType.toString());
    formData.append("Notes", obj.Notes);
    formData.append("AddedDate", this.date);
    formData.append("Image", this.selectedFile)
    formData.append("Id", this.vehcile.id)
   console.log(formData);

    this._UpdateVehcilsService.updateVehcils(formData).subscribe((res) => {
    if(res.isSuccess){
   
      
      this._Router.navigate(['/VehicleDetails',this.vehcile.plateNumber])
    }
    })
  }

  url: string = '../../../assets/images/add-image 1.png';

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  
 
}


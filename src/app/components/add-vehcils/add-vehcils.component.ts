import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddVechilsService } from '../../services/add-vechils.service';

@Component({
  selector: 'app-add-vehcils',
  templateUrl: './add-vehcils.component.html',
  styleUrls: ['./add-vehcils.component.css']
})
export class AddVehcilsComponent implements OnInit {
  month: any = ["محرم", "صفر", "ربيع الاول", "ربيع الثاني ", "جمادي الاول ", "جمادي الاخرة","رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة"]
  dayes: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
  selectedFile!: File;
  Img: any;
  error = "يجب اختيار اليوم او الشهر بشكل صحيح "
  er: boolean = false;
  date: string = ""
  AddedDate: Date;

  constructor(private _AddvehiclsService: AddVechilsService) {
    this.AddedDate = new Date(this.date);
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
    'Image': new FormControl(null, [Validators.required])
  })

  addVehcilsForm(form: FormGroup) {
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
      Image: null,
      Addedyear:this.date
    }
    console.log(obj);

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

    this._AddvehiclsService.addVehcils(formData).subscribe((res) => {
      console.log(res);
      console.log(obj);
    })
  }

  url: string = "../../../assets/images/upload-photo.jpg";

  onFileSelected(e:any ) {

    this.selectedFile = e.target.files[0];
    if(e.target.files){
      console.log(e.target.files);
      var reader=new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload=(Event:any)=>{
        this.url=Event.target.result
        console.log(this.url);
        
      }
 }





}

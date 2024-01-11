import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddVechilsService } from '../../services/add-vechils.service';

@Component({
  selector: 'app-add-vehcils',
  templateUrl: './add-vehcils.component.html',
  styleUrl: './add-vehcils.component.css'
})
export class AddVehcilsComponent implements OnInit {
  selectFile:any=null;
  Img:any;
  error="يجب اختيار اليوم او الشهر بشكل صحيح "
  er:boolean=false;
  constructor(private _AddvehiclsService:AddVechilsService) { }
  ngOnInit(): void {
  }
  addVehcilForm:FormGroup= new FormGroup({
    'PlateNumber':new FormControl(null,[Validators.minLength(3),Validators.maxLength(5),Validators.required]),
    'StructureNumber': new FormControl (null,[Validators.minLength(3),Validators.maxLength(15),Validators.required]),
    'Module': new FormControl (null,[Validators.required]),
    'Type': new FormControl (null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    'Color': new FormControl (null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    'Addedyear': new FormControl (null,[Validators.required]),
    'Addedday': new FormControl ("اليوم",[Validators.required]),
    'Addedmonth': new FormControl ("الشهر",[Validators.required]),
    'VehicleType': new FormControl (null,[Validators.required]),
    'DestinationType': new FormControl (null,[Validators.required]),
    'Notes': new FormControl (null,[Validators.required]),
    'Image': new FormControl (null,[Validators.required])
  })

  addVehcilsForm(form:FormGroup){
    console.log(form.value);
    let obj={
      PlateNumber:form.value.PlateNumber,
      StructureNumber:form.value.StructureNumber,
      Module:form.value.Module,
      Type:form.value.Type,
      Color:form.value.Color,
      VehicleType:form.value.PlateNumber,
      DestinationType:form.value.DestinationType,
      Notes:form.value.Notes,
      Image:form.value.Img

    }
    if(form.value.Addedday=="اليوم"||form.value.Addedmonth=="الشهر"){
     this.er=true
    }
    else{
      this.er=false
    }

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
 
  onFileSelected(event: any): void {
  //   const file: File = event.target.files[0];

  //   if (file) {
  //     this.uploadFile(file);
  //   }
  // }

  // uploadFile(file: File): void {
  //   // Perform the file upload logic here (e.g., using Angular HttpClient)
  //   // You can use FormData to send the file to a server

  //   // For demonstration purposes, log the file details
  //   console.log('File Name:', file.name);
  //   console.log('File Size:', file.size);
  //   console.log('File Type:', file.type);

  console.log(event);
  this.selectFile=<File>event.target.files[0]
  const formData=new FormData()
  formData.append('image',this.selectFile,this.selectFile.name)
  this.Img=formData
  console.log(this.Img);
  
  }

}


import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddUserService } from '../../services/add-user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  status: boolean = false;
  okstatus: boolean = false;
  Unstatus: boolean = false;
  user:string=''
  admin:string=''
  changeStatusOk() {
    this.Unstatus = false;
    this.okstatus = true;
  }
  changeStatusUn() {
    this.Unstatus = true;
    this.okstatus = false;
  }
  addUserForm:FormGroup= new FormGroup({
    'firstName':new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    'lastName': new FormControl (null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    'userName': new FormControl (null,[Validators.minLength(6),Validators.maxLength(30),Validators.required]),
    'phoneNumber': new FormControl (null,[Validators.required]),
    'password': new FormControl (null,[Validators.pattern(/^[A-Za-z0-9]{6,}$/),Validators.required]),
    'confirmPassword': new FormControl (null,[Validators.pattern(/^[A-Za-z0-9]{6,}$/),Validators.required]),
    'rolesIdList': new FormControl (null,[Validators.required])
  })

  sendUserData(form:FormGroup){
  let obj={
    firstName:form.value.firstName,
    lastName: form.value.lastName,
    userName: form.value.userName,
    phoneNumber: form.value.phoneNumber,
    password: form.value.password,
    confirmPassword: form.value.confirmPassword,
    rolesIdList: [
      `${form.value.rolesIdList}`
    ]
  }
 
  
this._CreateUserService.addUser(obj).subscribe((res)=>{
this.addUserForm.reset() 
  this.okstatus = false;
  this.Unstatus = false; 
},
(err)=>{
  
})
  }
  clear(){
    this.addUserForm.reset()
  }
  getAllPermion(){
    this._CreateUserService.getAllPrimion().subscribe(
      (res)=>{

        for(let i=0; i<res.length;i++){
          this.admin=res[0].id
         this.user=res[1].id

      
        }
      
      }
    )
  }

constructor(private _CreateUserService:AddUserService){
  this.getAllPermion()
  
}
}

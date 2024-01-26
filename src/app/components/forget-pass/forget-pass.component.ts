import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ForgetPassService } from '../../services/forget-pass.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrl: './forget-pass.component.css'
})
export class ForgetPassComponent {
err:boolean=false
isSuccess:string=""
Id: string = ""
forgetForm:FormGroup=new FormGroup(
{
"password":new FormControl(null,[Validators.pattern(/^[A-Za-z0-9]{6,}$/),Validators.required]),
"confirmPassword":new FormControl(null,[Validators.pattern(/^[A-Za-z0-9]{6,}$/),Validators.required])
}
)
sendForgetForm(form:FormGroup){
let obj={
  userId:this.Id,
  password:this.forgetForm.value.password,
  confirmPassword:this.forgetForm.value.confirmPassword
}
if(this.Id==undefined){
  this._ForgetPassService.updatePass(form.value).subscribe(
    (res)=>{if(res.isSuccess==true){this.isSuccess="تم التعديل بنجاح"}},
    (error)=>{if(error.error.isSuccess===false){this.isSuccess="كلمه المرور لا تساوي تاكيد كلمه المرور"}}
    ) 
}
else{
 this._ForgetPassService.updatePassOfAnyUsers(obj).subscribe(
  (res)=>{if(res.isSuccess==true){this.isSuccess="تم التعديل بنجاح"}},
  (error)=>{if(error.error.isSuccess===false){this.isSuccess="كلمه المرور لا تساوي تاكيد كلمه المرور"}}
  ) 
}

}
constructor(private _ForgetPassService:ForgetPassService, private _ActivatedRoute: ActivatedRoute){
  this.Id = _ActivatedRoute.snapshot.params['id']
  
}
ngOnInit(): void {}

}

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ForgetPassService } from '../../services/forget-pass.service';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrl: './forget-pass.component.css'
})
export class ForgetPassComponent {
  error:boolean=false
  forgetForm:FormGroup=new FormGroup(
    {
      "userName":new FormControl(null,[Validators.minLength(3),Validators.maxLength(30),Validators.required]),
      "password":new FormControl(null,[Validators.pattern(/^[A-Za-z0-9]{6,}$/),Validators.required]),
      "confirmedpassword":new FormControl(null,[Validators.pattern(/^[A-Za-z0-9]{6,}$/),Validators.required])
    }
)
sendForgetForm(form:FormGroup){
this._ForgetPassService.fogetPass(form.value).subscribe(
  (res)=>{
    console.log(res);
  
  }
)
}
constructor(private _ForgetPassService:ForgetPassService){}
ngOnInit(): void {}
 
}

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  error:boolean=false
  LoginForm:FormGroup=new FormGroup(
    {
      "userName":new FormControl(null,[Validators.minLength(3),Validators.maxLength(30),Validators.required]),
      "password":new FormControl(null,[Validators.pattern(/^[A-Za-z0-9]{6,}$/),Validators.required])
    }
)
sendLoginForm(form:FormGroup){
this._LoginService.login(form.value).subscribe(
(res)=>{

if(res.isSuccess==true){
this.LoginForm.reset()
localStorage.setItem("userToken",res.data.token)
localStorage.setItem("isAdmin",res.data.isAdmin)
this._Router.navigateByUrl('/Home')
}


}
,(err)=>{
if(err.error.isSuccess==false){
  this.error=true
}
}
)
}
constructor(private _LoginService:LoginService,private _Router:Router){}
ngOnInit(): void {}
 
}
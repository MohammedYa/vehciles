import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isAdmin:boolean=false;
  role=localStorage.getItem("isAdmin")
  isLogin:boolean=false
  constructor(private _LoginService:LoginService ){
  }
  ngOnInit(): void {
    this.islogin()

  }
  logOut(){
    this._LoginService.logOut()
  }
  islogin(){
this._LoginService.UserData.subscribe(
      ()=>{
        if(this._LoginService.UserData.getValue()!=null){
          this.isLogin=true 
            if(this.role=="true"){
            this.isAdmin=true
            }
            else{
            this.isAdmin=false
            }
        }
        else{
          this.isLogin=false
            if(this.role=="true"){
            this.isAdmin=true
            }
            else{
            this.isAdmin=false
            }
        }
      }
    )
    
  }
}


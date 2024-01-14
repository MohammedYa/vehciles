import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private _LoginService:LoginService ){    

  }
  ngOnInit(): void 
  {
    
  }
  logOut(){
    this._LoginService.logOut()
  }
      

  isLogin(){
if(localStorage.getItem("userToken"))
return true
else
return false
}
isAdmin(){
  if(localStorage.getItem("isAdmin")==='true')
  return true
  else
  return false
  }
}


import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
// User:any={}
err:string=""
users:any=[]
isconfirmed:boolean=false
constructor(private _UsersService:UsersService){
  this.getAllUsers();
}
getAllUsers(){
this._UsersService.getAllUsers().subscribe((res)=>{
this.users=res

})
}
deleteUser(Id:string){
  this._UsersService.deleteUser(Id).subscribe((res)=>{
if(res.isSuccess){
  this.getAllUsers()
}    
  },
  (error)=>{
    console.log(error);
    if(error.error.isSuccess== false){
      setTimeout(() => {
        this.err= error.error.message
      
        }, 2000);
        setTimeout(() => {
        this.err=""
      
        }, 4000);
      
    }
   
  }
  )
}
confirmUser(Id:string){
  let obj={
    userId:Id
  }
  this._UsersService.confirmUsers(obj).subscribe(
    (res)=>{
      if(res.isSuccess)
      this.getAllUsers()
    }
  )
}
}

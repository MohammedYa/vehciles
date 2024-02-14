import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
constructor(private _HttpClient:HttpClient,private _LoginService:LoginService) {}

getAllUsers():Observable<any> {

const token = localStorage.getItem("userToken");
// Create headers with Authorization token
const headers = new HttpHeaders({
'Authorization': `Bearer ${token}`
  });

return this._HttpClient.get(`${this._LoginService.BaseUrl}/Auth/GetAllUsers`,{headers});

}
confirmUsers(form:any):Observable<any> {

const token = localStorage.getItem("userToken");

  // Create headers with Authorization token
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

return this._HttpClient.post(`${this._LoginService.BaseUrl}/Auth/ConfirmUserByAdmins`,form,{headers});

}
deleteUser(Id:string):Observable<any> {
const token = localStorage.getItem("userToken");
// Create headers with Authorization token
const headers = new HttpHeaders({
'Authorization': `Bearer ${token}`
});
return this._HttpClient.post(`${this._LoginService.BaseUrl}/Auth/DeleteUser?userId=${Id}`,null,{headers});
}

}

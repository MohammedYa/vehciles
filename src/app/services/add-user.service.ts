import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {
  constructor(private _httpClient:HttpClient,private _LoginService:LoginService) { }
  addUser(form:any):Observable<any>{
      // Replace 'YOUR_TOKEN_HERE' with the actual token you want to send
      const token = localStorage.getItem("userToken");

      // Create headers with Authorization token
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
  
    return this._httpClient.post(`${this._LoginService.BaseUrl}/Auth/AddUser`,form,{headers})
  }
  getAllPrimion():Observable<any>{
    const token = localStorage.getItem("userToken");

    // Create headers with Authorization token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this._httpClient.get(`${this._LoginService.BaseUrl}/Auth/GetAllRoles`,{headers})
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AddVechilsService {

  constructor(private _httpClient:HttpClient,private _LoginService:LoginService) { }
  addVehcils(form:any):Observable<any>{

    const token = localStorage.getItem("userToken");

      // Create headers with Authorization token
      

      var headers = new HttpHeaders({
        'Authorization':`Bearer ${token}`        
      })
      headers.append('Content-Type', 'multipart/form-data; boundary=your_boundary');

      // You may need to set additional headers based on your API requirements
      //headers.append('Content-Type', 'multipart/form-data')
      

    return this._httpClient.post(`${this._LoginService.BaseUrl}/Vehicles/Create`,form, {headers})
   }
}

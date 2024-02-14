import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateVehcilsService {

  constructor(private _httpClient:HttpClient,private _LoginService:LoginService) { }
  updateVehcils(form:any):Observable<any>{
    const token = localStorage.getItem("userToken");
      // Create headers with Authorization token
      var headers = new HttpHeaders({
        'Authorization':`Bearer ${token}`        
      })
      headers.append('Content-Type', 'multipart/form-data; boundary=your_boundary');
      // You may need to set additional headers based on your API requirements
    return this._httpClient.post(`${this._LoginService.BaseUrl}/Vehicles/Update`,form, {headers})
}}

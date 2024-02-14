import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class VehcilsDitailsService {

  constructor(private _HttpClient:HttpClient,private _LoginService:LoginService) { }
  getVehciles(id:string):Observable<any>{
          // Replace 'YOUR_TOKEN_HERE' with the actual token you want to send
          const token = localStorage.getItem("userToken");

          // Create headers with Authorization token
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });
      
  return this._HttpClient.get(`${this._LoginService.BaseUrl}/Vehicles/Search?PlateNumber=${id}`,{headers})
  }
}

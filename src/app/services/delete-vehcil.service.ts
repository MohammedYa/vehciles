import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteVehcilService {
  deleteVehcil(Id:number):Observable<any> {
    
    const token = localStorage.getItem("userToken");

      // Create headers with Authorization token
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

   return this._HttpClient.post(`${this._LoginService.BaseUrl}/Vehicles/Delete?Id=${Id}`,null,{headers});

  }
  constructor(private _HttpClient :HttpClient,private _LoginService:LoginService) { }
}

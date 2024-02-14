import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  getVehcilSearch(PlateNumber:any):Observable<any> {
    
    const token = localStorage.getItem("userToken");

      // Create headers with Authorization token
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

   return this._HttpClient.get(`${this._LoginService.BaseUrl}/Vehicles/Search?PlateNumber=${PlateNumber}`,{headers});

  }
  constructor(private _HttpClient :HttpClient,private _LoginService:LoginService) { }
}

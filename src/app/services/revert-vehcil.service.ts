import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RevertVehcilService {
  constructor(private _httpClient:HttpClient,private _LoginService:LoginService) { }
  revertVehicles(ID: number): Observable<any> {
    const token = localStorage.getItem("userToken");
  
    // Create headers with Authorization token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    // You may need to set additional headers based on your API requirements
    return this._httpClient.post(`${this._LoginService.BaseUrl}/Vehicles/Revert?Id=${ID}`, null, { headers });
  }
  scrapVehicles(ID: number): Observable<any> {
    const token = localStorage.getItem("userToken");
  
    // Create headers with Authorization token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    // You may need to set additional headers based on your API requirements
    return this._httpClient.post(`${this._LoginService.BaseUrl}/Vehicles/ScrapVehicle?Id=${ID}`, null, { headers });
  }
}

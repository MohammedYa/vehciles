import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateVehcilsService {

  constructor(private _httpClient:HttpClient) { }
  updateVehcils(form:any):Observable<any>{
    const token = localStorage.getItem("userToken");
      // Create headers with Authorization token
      var headers = new HttpHeaders({
        'Authorization':`Bearer ${token}`        
      })
      headers.append('Content-Type', 'multipart/form-data; boundary=your_boundary');
      // You may need to set additional headers based on your API requirements
    return this._httpClient.put(`http://mohammedramadan-001-site1.htempurl.com/api/Vehicles/Update`,form, {headers})
}}

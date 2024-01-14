import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddVechilsService {

  constructor(private _httpClient:HttpClient) { }
  addVehcils(form:any):Observable<any>{

    const token = localStorage.getItem("userToken");

      // Create headers with Authorization token
      

      var headers = new HttpHeaders({
        'Authorization':`Bearer ${token}`        
      })
      headers.append('Content-Type', 'multipart/form-data; boundary=your_boundary');

      // You may need to set additional headers based on your API requirements
      //headers.append('Content-Type', 'multipart/form-data')
      

    return this._httpClient.post(`http://mohammedramadan-001-site1.htempurl.com/api/Vehicles/Create`,form, {headers})
   }
}

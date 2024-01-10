import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {
  constructor(private _httpClient:HttpClient) { }
  addUser(form:any):Observable<any>{
      // Replace 'YOUR_TOKEN_HERE' with the actual token you want to send
      const token = localStorage.getItem("userToken");

      // Create headers with Authorization token
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
  
    return this._httpClient.post('http://mohammedramadan-001-site1.htempurl.com/api/Auth/AddUser',form,{headers})
  }
}

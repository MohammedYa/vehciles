import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetAllVehcilsService {
  constructor(private _HttpClient:HttpClient) {}


  getAllVehcils():Observable<any> {
    
    const token = localStorage.getItem("userToken");

      // Create headers with Authorization token
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

   return this._HttpClient.get('http://mohammedramadan-001-site1.htempurl.com/api/Vehicles/GetAll',{headers});

  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

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

   return this._HttpClient.get(`http://mohammedramadan-001-site1.htempurl.com/api/Vehicles/Search?PlateNumber=${PlateNumber}`,{headers});

  }
  constructor(private _HttpClient :HttpClient) { }
}

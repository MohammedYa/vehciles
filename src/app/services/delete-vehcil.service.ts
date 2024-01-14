import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

   return this._HttpClient.delete(`http://mohammedramadan-001-site1.htempurl.com/api/Vehicles/Delete?Id=${Id}`,{headers});

  }
  constructor(private _HttpClient :HttpClient) { }
}

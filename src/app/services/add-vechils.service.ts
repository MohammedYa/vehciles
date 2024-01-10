import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddVechilsService {

  constructor(private _httpClient:HttpClient) { }
  addVehcils(form:FormGroup):Observable<any>{
    
    return this._httpClient.post(`http://mohammedramadan-001-site1.htempurl.com/api/Vehicles/Create`,form)
   }
}
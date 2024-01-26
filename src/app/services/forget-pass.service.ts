import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetPassService {

 
updatePassOfAnyUsers(form:any):Observable<any>{
const token = localStorage.getItem("userToken");

// Create headers with Authorization token
const headers = new HttpHeaders({
'Authorization': `Bearer ${token}`
});

return this._HttpClient.post('http://mohammedramadan-001-site1.htempurl.com/api/Auth/ChangePassword',form,{headers});
}
updatePass(form:any):Observable<any>{
const token = localStorage.getItem("userToken");

// Create headers with Authorization token
const headers = new HttpHeaders({
'Authorization': `Bearer ${token}`
});

return this._HttpClient.post('http://mohammedramadan-001-site1.htempurl.com/api/Auth/UpdateCurrentUserPassword',form,{headers});
}
  constructor(private _HttpClient:HttpClient) { }
}

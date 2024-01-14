import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
constructor(private _HttpClient:HttpClient) {}

getAllUsers():Observable<any> {

const token = localStorage.getItem("userToken");
// Create headers with Authorization token
const headers = new HttpHeaders({
'Authorization': `Bearer ${token}`
  });

return this._HttpClient.get('http://mohammedramadan-001-site1.htempurl.com/api/Auth/GetAllUsers',{headers});

}
confirmUsers(form:any):Observable<any> {

const token = localStorage.getItem("userToken");

  // Create headers with Authorization token
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

return this._HttpClient.post('http://mohammedramadan-001-site1.htempurl.com/api/Auth/ConfirmUserByAdmins',form,{headers});

}
deleteUser(Id:string):Observable<any> {
const token = localStorage.getItem("userToken");
// Create headers with Authorization token
const headers = new HttpHeaders({
'Authorization': `Bearer ${token}`
});
return this._HttpClient.delete(`http://mohammedramadan-001-site1.htempurl.com/api/Auth/DeleteUser?userId=${Id}`,{headers});
}

}

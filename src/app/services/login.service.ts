import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
//http://mohammedramadan-001-site1.htempurl.com/api
BaseUrl:string='http://localhost:8088/api'

  UserData=new BehaviorSubject(null)
  isAdmin=new BehaviorSubject(null)
  
  constructor(private _HttpClient:HttpClient,private _Router:Router) {
    if(localStorage.getItem('userToken')!=null){
      this.saveUserData( )
    }
  }

  login(form:any):Observable<any>{
  return this._HttpClient.post(`${this.BaseUrl}/Login`,form)
  }
  saveUserData(){
    let encodedToken=localStorage.getItem("userToken")
    let decodedToken:any=jwtDecode(<string>encodedToken)
    let Admin:any=<string>localStorage.getItem("isAdmin")
    this.UserData.next(decodedToken)
    this.isAdmin.next(Admin)

  }
  logOut(){
    localStorage.removeItem("userToken")
    localStorage.removeItem("isAdmin")
    this.UserData.next(null)
    this._Router.navigateByUrl('/Login')

  }}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private _HttpClient:HttpClient,private _LoginService:LoginService) { }
getStatisticsBigCars():Observable<any> {  
  const token = localStorage.getItem("userToken");
  // Create headers with Authorization token
  const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
  });
  return this._HttpClient.get(`${this._LoginService.BaseUrl}/Reports/StatisticsBigCars`,{headers});
}
getStatisticsSmallCars():Observable<any> {  
  const token = localStorage.getItem("userToken");
  // Create headers with Authorization token
  const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
  });
  return this._HttpClient.get(`${this._LoginService.BaseUrl}/Reports/StatisticsSmallCars`,{headers});
}
getStatisticsMotorcycle():Observable<any> {  
  const token = localStorage.getItem("userToken");
  // Create headers with Authorization token
  const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
  });
  return this._HttpClient.get(`${this._LoginService.BaseUrl}/Reports/StatisticsMotorcycle`,{headers});
}
getGeneralStatisticsMotorcycle():Observable<any> {  
  const token = localStorage.getItem("userToken");
  // Create headers with Authorization token
  const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
  });
  return this._HttpClient.get(`${this._LoginService.BaseUrl}/Reports/GeneralStatisticsMotorcycle`,{headers});
}
getGeneralStatisticsVihcles():Observable<any> {  
  const token = localStorage.getItem("userToken");
  // Create headers with Authorization token
  const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
  });
  return this._HttpClient.get(`${this._LoginService.BaseUrl}/Reports/GeneralStatisticsVihcles`,{headers});
}
getSellSmallCars():Observable<any> {  
  const token = localStorage.getItem("userToken");
  // Create headers with Authorization token
  const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
  });
  return this._HttpClient.get(`${this._LoginService.BaseUrl}/Reports/SellSmallCars`,{headers});
}
getSellBigCars():Observable<any> {  
  const token = localStorage.getItem("userToken");
  // Create headers with Authorization token
  const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
  });
  return this._HttpClient.get(`${this._LoginService.BaseUrl}/Reports/SellBigCars`,{headers});
}
getSellCarsInPeriod(DateFrom:string,DateTO:string):Observable<any> {  
  const token = localStorage.getItem("userToken");
  // Create headers with Authorization token
  const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
  });
  return this._HttpClient.get(`${this._LoginService.BaseUrl}/Reports/SellCarsInPeriod?DateFrom=${DateFrom}&DateTo=${DateTO}`,{headers});
}
getSellMotorcycleInPeriod(DateFrom:string,DateTO:string):Observable<any> {  
  const token = localStorage.getItem("userToken");
  // Create headers with Authorization token
  const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
  });
  return this._HttpClient.get(`${this._LoginService.BaseUrl}/Reports/SellMotorcycleInPeriod?DateFrom=${DateFrom}&DateTo=${DateTO}`,{headers});
}
getStatisticsSmallCarsInDate(DateFrom:string,DateTO:string):Observable<any> {  
  const token = localStorage.getItem("userToken");
  // Create headers with Authorization token
  const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
  });
  return this._HttpClient.get(`${this._LoginService.BaseUrl}/Reports/StatisticsSmallCarsInDate?DateFrom=${DateFrom}&DateTo=${DateTO}`,{headers});
}

}

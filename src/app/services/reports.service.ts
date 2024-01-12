import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private _HttpClient:HttpClient) { }
getStatisticsBigCars():Observable<any> {  
  const token = localStorage.getItem("userToken");
  // Create headers with Authorization token
  const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
  });
  return this._HttpClient.get('http://mohammedramadan-001-site1.htempurl.com/api/Reports/StatisticsBigCars',{headers});
}
getStatisticsSmallCars():Observable<any> {  
  const token = localStorage.getItem("userToken");
  // Create headers with Authorization token
  const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
  });
  return this._HttpClient.get('http://mohammedramadan-001-site1.htempurl.com/api/Reports/StatisticsSmallCars',{headers});
}
getStatisticsMotorcycle():Observable<any> {  
  const token = localStorage.getItem("userToken");
  // Create headers with Authorization token
  const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
  });
  return this._HttpClient.get('http://mohammedramadan-001-site1.htempurl.com/api/Reports/StatisticsMotorcycle',{headers});
}
getGeneralStatisticsMotorcycle():Observable<any> {  
  const token = localStorage.getItem("userToken");
  // Create headers with Authorization token
  const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
  });
  return this._HttpClient.get('http://mohammedramadan-001-site1.htempurl.com/api/Reports/GeneralStatisticsMotorcycle',{headers});
}
getGeneralStatisticsVihcles():Observable<any> {  
  const token = localStorage.getItem("userToken");
  // Create headers with Authorization token
  const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
  });
  return this._HttpClient.get('http://mohammedramadan-001-site1.htempurl.com/api/Reports/GeneralStatisticsVihcles',{headers});
}
getSellSmallCars():Observable<any> {  
  const token = localStorage.getItem("userToken");
  // Create headers with Authorization token
  const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
  });
  return this._HttpClient.get('http://mohammedramadan-001-site1.htempurl.com/api/Reports/SellSmallCars',{headers});
}
getSellBigCars():Observable<any> {  
  const token = localStorage.getItem("userToken");
  // Create headers with Authorization token
  const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
  });
  return this._HttpClient.get('http://mohammedramadan-001-site1.htempurl.com/api/Reports/SellBigCars',{headers});
}
getSellCarsInPeriod(DateFrom:string):Observable<any> {  
  const token = localStorage.getItem("userToken");
  // Create headers with Authorization token
  const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
  });
  return this._HttpClient.get(`http://mohammedramadan-001-site1.htempurl.com/api/Reports/SellCarsInPeriod?DateFrom=${DateFrom}`,{headers});
}
getSellMotorcycleInPeriod(DateFrom:string):Observable<any> {  
  const token = localStorage.getItem("userToken");
  // Create headers with Authorization token
  const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
  });
  return this._HttpClient.get(`http://mohammedramadan-001-site1.htempurl.com/api/Reports/SellMotorcycleInPeriod?DateFrom=${DateFrom}`,{headers});
}
getStatisticsSmallCarsInDate(DateFrom:string):Observable<any> {  
  const token = localStorage.getItem("userToken");
  // Create headers with Authorization token
  const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
  });
  return this._HttpClient.get(`http://mohammedramadan-001-site1.htempurl.com/api/Reports/StatisticsSmallCarsInDate?DateFrom=${DateFrom}`,{headers});
}

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  // connect frontend to backend
  apiUrl = "http://192.168.29.119:8082"

  getAllData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getalluser`); 
  }

  createData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addUser`, data)
  }

}

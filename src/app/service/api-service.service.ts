import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  // connect frontend to backend
  apiUrl = environment.localhost

  getAllUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user`); 
  }

  addUser(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/user`, data, {responseType: "text"})
  }

  updateUser(id: any,data: any): Observable<any> {  
    return this.http.put(`${this.apiUrl}/user/${id}`,data,{responseType: "text"})
  }

  deleteUser(id: any): Observable<any> {  
    return this.http.delete(`${this.apiUrl}/user/${id}`,{responseType: "text"})
  }

}

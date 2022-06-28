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
    return this.http.get(`${this.apiUrl}/user/all`);
  }

  addUser(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/register`, data)
  }

  updateUser(id: any,data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/${id}`,data)
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/user/${id}`)
  }

  yojanaAdd(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/yojana/add`, data)
  }

  yojanaDoc_4(data: any, id:any): Observable<any> {
    return this.http.post(`${this.apiUrl}/yojana/doc4/${id}`, data)
  }
  yojanaDoc_6(data: any,  id:any): Observable<any> {
    return this.http.post(`${this.apiUrl}/yojana/doc6/${id}`, data)
  }
  yojanaDoc_award(data: any, id:any): Observable<any> {
    return this.http.post(`${this.apiUrl}/yojana/award-doc/${id}`, data)
  }
}

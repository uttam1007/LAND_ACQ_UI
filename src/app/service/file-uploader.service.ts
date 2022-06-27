import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FileUploaderService {

  baseApiUrl = environment.localhost

  constructor(private http:HttpClient) { }

  // Returns an observable
  upload(file,url):Observable<any> {
      const formData = new FormData();
      formData.append("document", file, file.name);
      return this.http.post(this.baseApiUrl+url,formData)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/classes/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://localhost:8080"
  constructor(private http: HttpClient) { }
  addUser(users?:User):Observable<object>{
    return this.http.post<Object>(`${this.url+"/signup"}`,users);
  }
  authuser(users?:User):Observable<Boolean>{
    return this.http.post<Boolean>(`${this.url}`,users);
  }
}

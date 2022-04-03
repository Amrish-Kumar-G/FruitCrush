import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/classes/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://localhost:8080/signup"
  constructor(private http: HttpClient) { }
  addUser(users?:User):Observable<object>{
    return this.http.post<Object>(`${this.url}`,users);
  }
}

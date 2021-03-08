import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../model/spring.model';
@Injectable({
  providedIn: 'root'
})
export class JavaService {

  constructor(private http:HttpClient) { }

  public getUsers():Observable<User[]>{
    return this.http.get<User[]>(`http://localhost:8080/api/demo`);
  };


  public convertToUppercase(data:any):Observable<any>{
      return this.http.post(`http://test-routes.herokuapp.com/test/uppercase`,data);
  };
  


}

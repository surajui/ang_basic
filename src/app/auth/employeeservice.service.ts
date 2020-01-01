import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Employee} from './employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  

  constructor(private http: HttpClient) { }
// baseUrl: string = 'http://localhost:3000/employee';

// getUsers() {
// return this.http.get<Employee[]>(this.baseUrl);
// }

// getUserById(id: number) {
// return this.http.get<Employee>(this.baseUrl + '/' + id);
// }

// createUser(user: Employee) {
// return this.http.post(this.baseUrl, user);
// }

// updateUser(user: Employee) {
// return this.http.put(this.baseUrl + '/' + user.id, user);
// }

// deleteUser(id: number) {
// return this.http.delete(this.baseUrl + '/' + id);
// }
url=' http://localhost:3000/employee';
  createemployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.url,employee)
  }
}
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { EmployeeDetails } from '../models/employee-details';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class EmployeeDataService {

  constructor(private http: HttpClient) { }

  getEmployeeDetails(): Observable<EmployeeDetails[]> {
    return this.http.get<EmployeeDetails[]>("http://localhost:3000/employee");
  }

  addEmployeeDetail(employee: EmployeeDetails) {
    console.log("Adding employee");
    // debugger
    let headers = new HttpHeaders();
        
    headers.append('Content-Type', 'application/json');
    return this.http.post<EmployeeDetails>("http://localhost:3000/employee", employee, {headers:headers});
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { Employee } from '../models/employee.model';

const LINK = 'http://localhost:8080/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }

  public create(formData: FormData): Observable<any> {    
    return this.http.post(LINK, formData);
  }

  public getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(LINK.concat("/current"));
  }

  public findById(id: any): Observable<Object> {
    return this.http.get(`${LINK.concat("/detail")}/${id}`);
  }

  public update(id: any, data: any): Observable<Object> {
    return this.http.put(`${LINK.concat("/update")}/${id}`, data);
  }

  public deleteById(id: any): Observable<Object> {
    return this.http.delete(`${LINK.concat("/delete")}/${id}`);
  } 
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject, EMPTY } from 'rxjs';
import { tap, pluck, map } from 'rxjs/operators';

import { Student } from '@app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  
  getStudent(){
    return this.http.get("/api/student/all").pipe(
      map(res => res)
    )
  }

  insertData(firstname:string,lastname:string,ssid:string){
    const data ={first:firstname,last:lastname,sid:ssid}
    return this.http.post("/api/student/",data).pipe(
      map(res=>res)
    )
  }
  deleteStudent(ssid:string){
    const data = {sid:ssid}
    return this.http.post("/api/student/delete",data).pipe(
      map(res=>res)
    )
  }
}

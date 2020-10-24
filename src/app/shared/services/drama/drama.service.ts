import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject, EMPTY } from 'rxjs';
import { tap, pluck, map } from 'rxjs/operators';

// import { Student } from '@app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DramaService {

  constructor(private http: HttpClient) { }
  insertDrama(name:string,imageurl:string,daytime:string,channel:string,review:string){
    // const data ={first:firstname,last:lastname,sid:ssid}
    const data={name:name,imageurl:imageurl,daytime:daytime,channel:channel,review:review}
    return this.http.post("/api/drama/",data).pipe(
      map(res=>res)
    )
  }
  getAllDrama(){
    return this.http.get("/api/drama/all").pipe(
      map(res => res)
    )
  }
  deleteDrama(id:string){
    const data = {sid:id}
    return this.http.post("/api/drama/delete",data).pipe(
      map(res=>res)
    )
  }

  editDrama(id:string,name:string,imageurl:string,daytime:string,channel:string,review:string){
    console.log('ind => ',id)
    const data = {
      id:id,
      set:{
      name:name,
      imageurl:imageurl,
      daytime:daytime,
      channel:channel,
      review:review
    }
  }
    return this.http.post("/api/drama/edit",data).pipe(
      map(res=>res)
    )
  }
}


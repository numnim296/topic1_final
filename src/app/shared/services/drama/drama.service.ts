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
}

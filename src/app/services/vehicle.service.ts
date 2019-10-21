import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  readonly BaseUri = 'https://localhost:44322/api';

  constructor(private http: HttpClient) {
   }

   getMakes() {
       let promise = new Promise((resolve, reject) => {
        let apiURL = `${this.BaseUri}/vehicle`;
         this.http
         .get(apiURL)
         .toPromise()
         .then(
           (res: any[]) => {
             resolve(res);
           },
           msg=> {
             console.log(msg);
             reject(msg);
           }
         )
       });

       return promise;
   }
}

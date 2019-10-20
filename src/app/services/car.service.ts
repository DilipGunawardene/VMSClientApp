import { Car } from './../models/car';
import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  readonly BaseUri = 'https://localhost:44322/api';

  constructor(private http: HttpClient) {
   }

   createCar(car: Car) {
       let promise = new Promise((resolve, reject) => {
        let apiURL = `${this.BaseUri}/car`;
         this.http
         .post(apiURL,car)
         .toPromise()
         .then(
           (res) => {
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


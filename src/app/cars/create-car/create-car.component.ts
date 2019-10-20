import { CarService } from './../../services/car.service';
import { VehicleService } from './../../services/vehicle.service';
import { Car } from './../../models/car';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  makes: any[];
  models: any[];
  transmissionTypes: any[];

  private results;

  car : Car = {
    id:0,
    makeId:0,
    modelId:0,
    transmissionId:0,
    year:0,
    price:0,
    noOfDoors:0,
    noOfSeats:0,
    engineSize:0
  }

  constructor(private vehicleSevice: VehicleService, private carServise: CarService, private toastyService: ToastyService) { }

  ngOnInit() {
    this.vehicleSevice.getMakes().then(a=> {
      this.results= a;
      this.makes = this.results;
    })
  }

  onMakeChange(){
    this.populateModels();
  }

  
  private populateModels() {
    var selectedMake = this.makes.find(m => m.makeId == this.car.makeId);
    this.models = selectedMake ? selectedMake.models : [];
  }

  submit() {
    this.carServise.createCar(this.car)
    .then(_=>  this.toastyService.success({
      title: 'Success',
      msg: 'Data was successfully saved.',
      theme: 'bootstrap',
      showClose: true,
      timeout: 5000
     }))
    .catch(this.handleError);  
  }

  private handleError(error: any): Promise <any> {
    let toast;
    toast = {
      type: 'info',
      title: 'Failure',
      body: 'Cannot submit data!',
      showCloseButton: true
    };
    this.toastyService.error(toast);
    return Promise.reject(error.message || error);
}
}

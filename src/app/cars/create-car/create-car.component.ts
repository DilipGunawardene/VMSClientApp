import { VehicleService } from './../../services/vehicle.service';
import { Car } from './../../models/car';
import { Component, OnInit } from '@angular/core';

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

  constructor(private vehicleSevice: VehicleService) { }

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

}

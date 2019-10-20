import { VehicleService } from './services/vehicle.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CreateCarComponent } from './cars/create-car/create-car.component';
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarsComponent,
    CreateCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'cars', component: CarsComponent},
      {path: 'cars/create', component: CreateCarComponent}
    ])
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

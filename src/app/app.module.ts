import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddVehcilsComponent } from './components/add-vehcils/add-vehcils.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';
import { SearchComponent } from './components/search/search.component';
import { VehcilsDitailsComponent } from './components/vehcils-ditails/vehcils-ditails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SaleVehcilsComponent } from './components/sale-vehcils/sale-vehcils.component';
import { VehcilsOutComponent } from './components/vehcils-out/vehcils-out.component';
import { VehcilsComponent } from './components/vehcils/vehcils.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ReportsComponent } from './components/reports/reports.component';

import { EditvehcilsComponent } from './components/editvehcils/editvehcils.component';
import { UsersComponent } from './components/users/users.component';
import { ScrapComponent } from './components/scrap/scrap.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { StatisticsBigCarsComponent } from './components/reportsCompnents/statistics-big-cars/statistics-big-cars.component';
import { StatisticsSmallCarsComponent } from './components/reportsCompnents/statistics-small-cars/statistics-small-cars.component';
import { GeneralStatisticsMotorcycleComponent } from './components/reportsCompnents/general-statistics-motorcycle/general-statistics-motorcycle.component';
import { GeneralStatisticsVihclesComponent } from './components/reportsCompnents/general-statistics-vihcles/general-statistics-vihcles.component';
import { SellSmallCarsComponent } from './components/reportsCompnents/sell-small-cars/sell-small-cars.component';
import { SellBigCarsComponent } from './components/reportsCompnents/sell-big-cars/sell-big-cars.component';
import { StatisticsMotorcycleComponent } from './components/reportsCompnents/statistics-motorcycle/statistics-motorcycle.component';

import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddVehcilsComponent,
    CreateUserComponent,
    LoginComponent,
    NavbarComponent,
    ForgetPassComponent,
    SearchComponent,
    VehcilsDitailsComponent,
    SaleVehcilsComponent,
    VehcilsOutComponent,
    VehcilsComponent,
    NotfoundComponent,
    ReportsComponent,
    EditvehcilsComponent,
    UsersComponent,
    ScrapComponent,
    StatisticsBigCarsComponent,
    StatisticsSmallCarsComponent,
    GeneralStatisticsMotorcycleComponent,
    GeneralStatisticsVihclesComponent,
    SellSmallCarsComponent,
    SellBigCarsComponent,
    StatisticsMotorcycleComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,  
    HttpClientModule, 
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

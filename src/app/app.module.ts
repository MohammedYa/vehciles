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
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,  
    HttpClientModule, 
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

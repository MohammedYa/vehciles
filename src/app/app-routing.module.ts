import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { AddVehcilsComponent } from './components/add-vehcils/add-vehcils.component';
import { VehcilsDitailsComponent } from './components/vehcils-ditails/vehcils-ditails.component';
import { VehcilsOutComponent } from './components/vehcils-out/vehcils-out.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SaleVehcilsComponent } from './components/sale-vehcils/sale-vehcils.component';
import { VehcilsComponent } from './components/vehcils/vehcils.component';
import { EditvehcilsComponent } from './components/editvehcils/editvehcils.component';
import { UsersComponent } from './components/users/users.component';
import { ScrapComponent } from './components/scrap/scrap.component';
import { AuthGuard } from './gards/auth.guard';
import { IsAdminGuard } from './gards/is-admin.guard';
import { ReportsComponent } from './components/reports/reports.component';
import { GeneralStatisticsMotorcycleComponent } from './components/reportsCompnents/general-statistics-motorcycle/general-statistics-motorcycle.component';
import { GeneralStatisticsVihclesComponent } from './components/reportsCompnents/general-statistics-vihcles/general-statistics-vihcles.component';
import { SellBigCarsComponent } from './components/reportsCompnents/sell-big-cars/sell-big-cars.component';
import { SellSmallCarsComponent } from './components/reportsCompnents/sell-small-cars/sell-small-cars.component';
import { StatisticsMotorcycleComponent } from './components/reportsCompnents/statistics-motorcycle/statistics-motorcycle.component';
import { StatisticsBigCarsComponent } from './components/reportsCompnents/statistics-big-cars/statistics-big-cars.component';
import { StatisticsSmallCarsComponent } from './components/reportsCompnents/statistics-small-cars/statistics-small-cars.component';
import { SellCarsInPeriodComponent } from './components/reportsCompnents/sell-cars-in-period/sell-cars-in-period.component';
import { SellMotorcycleInPeriodComponent } from './components/reportsCompnents/sell-motorcycle-in-period/sell-motorcycle-in-period.component';
import { StatisticsSmallCarsInPeriodComponent } from './components/reportsCompnents/statistics-small-cars-in-period/statistics-small-cars-in-period.component';
import { RoportOfStatusComponent } from './components/roport-of-status/roport-of-status.component';


const routes: Routes = [
  {path:"",redirectTo:"/Login",pathMatch:"full"},
  {path:'Login',component:LoginComponent}, 
  {path:"Home",component:HomeComponent},
  {path:'createUser',canActivate:[AuthGuard,IsAdminGuard],component:CreateUserComponent},
  {path:'ForgetPass',component:ForgetPassComponent},
  {path:'addVehicle',canActivate:[AuthGuard],component:AddVehcilsComponent},
  {path:'search',canActivate:[AuthGuard],component:SearchComponent},
  {path:"VehicleDetails/:Id",canActivate:[AuthGuard],component:VehcilsDitailsComponent},
  {path:"vehicles",canActivate:[IsAdminGuard,AuthGuard],component:VehcilsComponent},
  {path:'Users',canActivate:[IsAdminGuard,AuthGuard],component:UsersComponent},
  {path:'saleVehicles',canActivate:[AuthGuard],component:SaleVehcilsComponent},
  {path:'vehiclesOut',canActivate:[AuthGuard],component:VehcilsOutComponent},
  {path:'edit/:Id',canActivate:[AuthGuard],component:EditvehcilsComponent},
  {path:'scrapeVehicle',canActivate:[AuthGuard],component:ScrapComponent},
  {path:'reports',canActivate:[AuthGuard],component:ReportsComponent},
  //reports components 
  {path:'reportsOfGeneralStatisticsMotorcycle',canActivate:[AuthGuard],component:GeneralStatisticsMotorcycleComponent},
  {path:'reportsOfGeneralStatisticsVihcls',canActivate:[AuthGuard],component:GeneralStatisticsVihclesComponent},
  {path:'reportsOfSellBigCar',canActivate:[AuthGuard],component:SellBigCarsComponent},
  {path:'reportsOfSellSmallCar',canActivate:[AuthGuard],component:SellSmallCarsComponent},
  {path:'reportsOfStatisticsMotorcycle',canActivate:[AuthGuard],component:StatisticsMotorcycleComponent},
  {path:'reportsOfStatisticsBigCar',canActivate:[AuthGuard],component:StatisticsBigCarsComponent},
  {path:'reportsOfStatisticsSmallCar',canActivate:[AuthGuard],component:StatisticsSmallCarsComponent},
  {path:'SellCarsInPeriod',canActivate:[AuthGuard],component:SellCarsInPeriodComponent},
  {path:'SellMotorcycleInPeriod',canActivate:[AuthGuard],component:SellMotorcycleInPeriodComponent},
  {path:'StatisticsSmallCarsInPeriod',canActivate:[AuthGuard],component:StatisticsSmallCarsInPeriodComponent},
  {path:'RoportOfStatus',canActivate:[AuthGuard],component:RoportOfStatusComponent},
 
  {path:'notFound',component:NotfoundComponent},


  {path:'**',component:NotfoundComponent},

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

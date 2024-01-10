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

const routes: Routes = [
  {path:"",redirectTo:"/Login",pathMatch:"full"},
  {path:"Home",component:HomeComponent},
  {path:'Login',component:LoginComponent},
  {path:'createUser',component:CreateUserComponent},
  {path:'ForgetPass',component:ForgetPassComponent},
  {path:'addVehicle',component:AddVehcilsComponent},
  {path:'search',component:SearchComponent},
  {path:"VehicleDetails/:Id",component:VehcilsDitailsComponent},
  {path:"vehicles",component:AddVehcilsComponent},
  {path:'saleVehicles',component:SaleVehcilsComponent},
  {path:'Vehicles-out',component:VehcilsOutComponent},
  {path:'vehiclesOut',component:VehcilsOutComponent},
  {path:'**',component:NotfoundComponent},

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

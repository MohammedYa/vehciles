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


const routes: Routes = [
  {path:"",redirectTo:"/Login",pathMatch:"full"},
  {path:'Login',component:LoginComponent}, 
  {path:"Home",component:HomeComponent},
  {path:'createUser',canActivate:[AuthGuard,IsAdminGuard],component:CreateUserComponent},
  {path:'ForgetPass',canActivate:[AuthGuard,IsAdminGuard],component:ForgetPassComponent},
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
  {path:'notFound',component:NotfoundComponent},
  {path:'**',component:NotfoundComponent},

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

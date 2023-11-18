import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { CountryComponent } from './country/country.component';
import { ListallcountriesComponent } from './listallcountries/listallcountries.component';
import { UpdatecountryComponent } from './updatecountry/updatecountry.component';
ListallcountriesComponent

const routes: Routes = [  
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  
  
 { path: 'menu', component: MenuComponent },
{path: 'home', component: HomeComponent},
 {path: 'login', component: LoginComponent},
 {path: 'country', component:CountryComponent},
 {path: 'listallcountries', component:ListallcountriesComponent},
 {path:'updatecountry',component:UpdatecountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

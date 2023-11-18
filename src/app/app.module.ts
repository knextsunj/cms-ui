import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import {MatSortModule} from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountryComponent } from './country/country.component';
import { ListallcountriesComponent } from './listallcountries/listallcountries.component';
import { UpdatecountryComponent } from './updatecountry/updatecountry.component';
import { EditdialogComponent } from './dialogs/editdialog/editdialog.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    HeaderComponent,
    CountryComponent,
    ListallcountriesComponent,
    UpdatecountryComponent,
    EditdialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }

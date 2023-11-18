import { Component, Input, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

    
  countryName:string='';
  data:any;
  loading:boolean=false;

  token = sessionStorage.getItem("jwt");

  config = {
    headers:{
      'Authorization' : this.token
    }
  }

  private countryService: CountryService;

  constructor(countryService:CountryService) {
    this.countryService = countryService
  }

 ngOnInit(): void {
   
 }

 onSubmit() {
  console.log("countryName is::::"+this.countryName);
  let result:boolean = this.countryService.saveCountry(this.countryName,this.config)
  // let result = true
  if(result) {
    alert("Country registered successfully");
  }
  else {
    alert("Error failed to register country");
  }
}

}

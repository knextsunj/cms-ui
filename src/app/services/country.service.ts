import { Injectable } from '@angular/core';
import axios from 'axios';
import { Country } from '../entities/country';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  saveUrl="http://localhost:8080/cms-0.1.0/country/save"

   findAllURL = "http://localhost:8080/cms-0.1.0/country/findAll"

   updateURL = "http://localhost:8080/cms-0.1.0/country/update"


   token = sessionStorage.getItem("jwt"); 
   headersArr:any = { 'Authorization' : this.token ,'Content-Type':'application/json'};
   countryList:any

    countryDataList:Country[] = [];


  constructor() { }

  saveCountry(countryName:String,config:any):boolean {

     let result:boolean = false

      try {
  axios.post(this.saveUrl, {name: countryName },config)
  .then(res=>{
    console.log(res);
    console.log(res.data);
    if(res.data==true) {
//      alert("Country registered successfully");
      result = true;
    } 
  })
}
  catch{((err: any)=> console.log(err))}
  return result
  }

  fetchCountries():any{
    fetch(this.findAllURL , {
      method: 'GET',
      headers:this.headersArr
 
    })
    .then(response=>response.json())
    .then(data=>{return this.setCountryList(data)})
    .catch(err=>console.error(err));
    console.log("country list size::: "+this.countryList)
    return this.countryList;
  }

  setCountryList(data:any) {
    this.countryList = data;
    console.log(data);
    console.log(data[0].id)
    console.log(data[0].name)
    console.log(data[0].deleted)


    for(let count=0;count<data.length;count++) {
      console.log("count is :::"+count);
        let country:Country = new Country(data[count].serialNo,data[count].id,data[count].name,data[count].deleted);
        this.countryDataList[count] = country;
    } 
  }

  edit(country: Country) {
    fetch(this.updateURL,
      {
        method:'PUT',
        headers:this.headersArr,
        body:JSON.stringify(country)
      })
      .then(response=> {
         if(response.ok) {
            alert("Updated successfully")
        } 
         else {
          alert("Something went wrong.")
         }
      })
      .catch(err=>console.error(err));

  }

  getCountryList() {
    return this.countryDataList;
  }
  }



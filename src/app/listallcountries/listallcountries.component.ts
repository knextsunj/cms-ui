import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, OnInit, ViewChild ,} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Country } from '../entities/country';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-listallcountries',
  templateUrl: './listallcountries.component.html',
  styleUrls: ['./listallcountries.component.css']
})
export class ListallcountriesComponent implements OnInit,AfterViewInit {


displayedColumns: string[] = ['serialNo','name'];
  countries = new  MatTableDataSource<Country>([]);
  // countries = new  MatTableDataSource<any>([]);



@ViewChild(MatPaginator) paginator:MatPaginator | null = null;
@ViewChild(MatSort) sort: MatSort| null = null;


// @ViewChild(MatPaginator) paginator:MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);

// @ViewChild(MatSort) sort: MatSort= new MatSort();

constructor(private countryService:CountryService) {



}

  ngAfterViewInit(): void {
    this.getCountries();
    console.log("ngAfterViewInit called")
  }
  ngOnInit(): void {

    console.log("ngonInit called")
    
  }

private getCountries() {
  let countryDataList:Country[] = [];
  console.log("getCountries called") 

  // for(let i=0;i<7;i++) {
  //   let countryList = new Country(i,i+2,"John Acheson"+i);
  //   countryDataList[i] = countryList;
  // }
  let resultList:Country[] = this.countryService.fetchCountries();
  console.log("resultList::::"+resultList)
  for(let count=0;count<resultList.length;count++) {
    console.log(resultList[count].name);
  }
  //  resultList = this.countryService.getCountryList(); 
 this.countries = new MatTableDataSource(resultList);
  // this.countries = new MatTableDataSource(resultList);
  // setTimeout(() => this.countries.paginator = this.paginator);
  console.log("Paginator is::: "+this.paginator)
  this.countries.paginator = this.paginator;
  this.countries.sort = this.sort;
}


}





//   const ELEMENT_DATA:Element[] = [
//     {serialNo:1,slNo:12,name:"John Acheson"},
//     {serialNo:2,slNo:13,name:"Matt Acheson"},
//     {serialNo:3,slNo:14,name:"Matt Acheson"},
//     {serialNo:4,slNo:15,name:"Matt Acheson"},
//     {serialNo:5,slNo:16,name:"Matt Acheson"},
//     {serialNo:6,slNo:17,name:"Matt Acheson"},
//     {serialNo:7,slNo:18,name:"Matt Acheson"},
//     {serialNo:8,slNo:19,name:"Matt Acheson"},
//     {serialNo:9,slNo:20,name:"Matt Acheson"}
// ]
// export interface Element {
//   serialNo:number;
//   slNo: number,
//   name:string;
// }
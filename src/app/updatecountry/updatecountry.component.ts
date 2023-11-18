import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, OnInit, ViewChild, } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Country } from '../entities/country';
import { CountryService } from '../services/country.service';
import { EditdialogComponent } from '../dialogs/editdialog/editdialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-updatecountry',
  templateUrl: './updatecountry.component.html',
  styleUrls: ['./updatecountry.component.css']
})
export class UpdatecountryComponent {
  displayedColumns: string[] = ['serialNo', 'name'];
  columnsToDisplay: string[] = [...this.displayedColumns, 'actions'];
  countries = new MatTableDataSource<Country>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor(private countryService: CountryService,public dialog: MatDialog) {

  }

  ngAfterViewInit(): void {
    this.getCountriesForUpdate();
    console.log("ngAfterViewInit called")
  }
  ngOnInit(): void {

    console.log("ngonInit called")

  }

  private getCountriesForUpdate() {
    let countryDataList: Country[] = [];
    console.log("getCountriesForUpdate called")

    let resultList: Country[] = this.countryService.fetchCountries();
    console.log("resultList::::" + resultList)
    for (let count = 0; count < resultList.length; count++) {
      console.log(resultList[count].name);
    }
    this.countries = new MatTableDataSource(resultList);

    console.log("Paginator is::: " + this.paginator)
    this.countries.paginator = this.paginator;
    this.countries.sort = this.sort;
  }

  edit(data: Country) {
    const dialogRef = this.dialog.open(EditdialogComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.countryService.edit(result);
      }
    });
  }
}

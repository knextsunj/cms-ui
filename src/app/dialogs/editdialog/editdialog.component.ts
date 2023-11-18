import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Country } from 'src/app/entities/country';

@Component({
  selector: 'app-editdialog',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.css']
})
export class EditdialogComponent implements OnInit {
  formInstance: FormGroup;

  constructor(public dialogRef: MatDialogRef<EditdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Country) {
    this.formInstance = new FormGroup({
      "serialNo":  new FormControl(''),
      "name":  new FormControl('', Validators.required),
      "id":  new FormControl(''),
      "deleted":  new FormControl(''),
    });

    this.formInstance.setValue(data);
  }
  ngOnInit(): void {

  }

  save(): void {
    let country = new Country()
    this.dialogRef.close(Object.assign(country, this.formInstance.value));
    console.log("updated country is::: "+country)
  }
}

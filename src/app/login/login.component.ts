
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { Router } from '@angular/router';
import { User } from '../entities/user';
import {MatSnackBar,  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() error: string = "";
  @Input() title: string = "Login"

   loginBkgnd = './images/mars2.jpg'


  private user!: User;

  private authenticateService:AuthenticateService 

  authForm: FormGroup;

  loginResult: boolean = false

  actionButtonLabel: string = 'Retry';
  action: boolean = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  addExtraClass: boolean = false;
  autoHide: number = 2000;
  setAutoHide: boolean = true;

  constructor(private fb: FormBuilder,authenticateService:AuthenticateService,private router: Router,public snackBar: MatSnackBar) {
    this.authForm = this.fb.group({
      username: [''],
      password: ['']
    })
    this.authenticateService = authenticateService
  }



  ngOnInit(): void {
  }

  submit() {
    this.user = new User(this.authForm.controls['username'].value,this.authForm.controls['password'].value)
   this.authenticateService.login(this.user)

    // this.loginResult = true
    if(this.authenticateService.getAuth()) {
      this.router.navigate(['home'])
    }
    else {
      let config = new MatSnackBarConfig();
      config.verticalPosition = this.verticalPosition;
      config.horizontalPosition = this.horizontalPosition;
      config.duration = this.setAutoHide ? this.autoHide : 0;
      this.snackBar.open("Login failed: Check your username and password", this.action ? this.actionButtonLabel : undefined, config);
    }
  }

}

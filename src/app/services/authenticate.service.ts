import { Injectable } from '@angular/core';
import { SERVER_URL } from '../constants';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {


  isAuthenticated:boolean = false

  constructor() { }


    login(user:User) {
      fetch(SERVER_URL + 'login', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify(user)
      })
      .then(res => {
        const jwtToken = res.headers.get('Authorization');
        if (jwtToken !== null) {
          console.log("Setting jwt token")
          sessionStorage.setItem("jwt", jwtToken);
          this.setAuth(true);
        }
        else {
          console.log("Auth failed")
         this.setAuth(false);
        }
      })
      .catch(err => console.error(err))
      console.log("Auth status is:"+this.isAuthenticated)
    }

    setAuth(result:boolean) {
      this.isAuthenticated = result
      return this.isAuthenticated
    }

    getAuth():boolean {
      return this.isAuthenticated
    }


}

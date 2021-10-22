import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null)
  });

  send(loginForm: FormGroup) {
    this._AuthService.login(loginForm.value).subscribe((response) => {
      if (response.message == 'login Successfuly') {
        localStorage.setItem('userToken', response.data.access_token)
        this._AuthService.saveUserData(); 
        this._Router.navigate(['dashboard'])
      }
      else {
        alert("un correct email or password")
      }
    })
  }


  constructor(private _AuthService: AuthService, private _Router: Router) { }

  ngOnInit(): void {

  }

}

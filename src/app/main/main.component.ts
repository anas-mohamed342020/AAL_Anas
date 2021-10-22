import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private _AuthService: AuthService) { }
  isLogin: boolean = false;
  
  ngOnInit(): void {
    if (localStorage.getItem('userToken')) {
      this._AuthService.saveUserData()
    }
    this._AuthService.userData.subscribe(() => {
      if (this._AuthService.userData.getValue() != null) {
        this.isLogin = true;
      }
      else{
        this.isLogin = false;

      }
    })
  }


}



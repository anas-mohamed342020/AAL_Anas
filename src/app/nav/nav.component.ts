import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

declare var $: any;
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private _AuthService: AuthService) {

  }
  logout() {
    this._AuthService.logout();
    $('#nav-nav-person').hide(500)
    this._AuthService.saveUserData()
 
  }

  ngOnInit(): void {

    $('#user').click(() => {
      $('#nav-nav-person').fadeToggle(500)

    })


  }

}

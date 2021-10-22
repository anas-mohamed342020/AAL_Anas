import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

declare var $:any;
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(private _AuthService:AuthService) { }

  ngOnInit(): void {




    let w=$('#nav').innerWidth();
    let h=$('#nav').innerHeight();
    $("#nav-containerx").innerWidth(w)
    $("#nav-containerx").innerHeight(h);
    let sidebar:any = document.querySelector(".sidebar");
    let closeBtn:any = document.querySelector("#btn");
    let searchBtn:any = document.querySelector(".bx-search");

    closeBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      menuBtnChange();//calling the function(optional)
      w=$('#nav').innerWidth();
      if(w==78){
        $("#nav-containerx").animate({width:250},300)
      }
      else if(w==250){
        $("#nav-containerx").animate({width:78},300)
      }
    });

    searchBtn.addEventListener("click", () => { // Sidebar open when you click on the search iocn
      sidebar.classList.toggle("open");
      menuBtnChange(); //calling the function(optional)

    });

    // following are the code to change sidebar button(optional)
    function menuBtnChange() {
      if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
      } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
      }
    }

 
  }

}

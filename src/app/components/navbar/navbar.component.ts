import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  isUserLogin: boolean = false;
  isUserNotLogin: boolean = false;

  userValidToken: any;

  constructor() { }

  ngOnInit() {
    this.userValidToken = localStorage.getItem('loginValidToken')
    if (this.userValidToken =='') {
      this.isUserNotLogin = true;
      this.isUserLogin = false;
    } else {
      this.isUserLogin = true;
      this.isUserNotLogin = false;
    }


  }

}

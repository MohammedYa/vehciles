import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  // <-- Corrected property name to styleUrls
})
export class HomeComponent {
  isAdmin: boolean = false;

  constructor() {
    if (localStorage.getItem("isAdmin") === "true") {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }
}

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements OnInit {
isAdmin: boolean = false;
constructor( ){

if (localStorage.getItem("isAdmin") === "true") {
this.isAdmin = true;
} else {
this.isAdmin = false;
}
}
ngOnInit(): void {}
}


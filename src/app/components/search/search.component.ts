import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  ngOnInit(): void {
  }
  SearchForm:FormGroup=new FormGroup(
    {
      "Id":new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    }
  )
  // search(form:FormGroup){
  //   this._Router.navigate(['/VehicleDetails'],form.value.Id)
  // }
  // this.Router.navigate(['/VehicleDetails'], { queryParams: { Id: form.value.Id } });
back(){
  this._Router.navigateByUrl("/Home")
}
  constructor(private _Router:Router){
    
  }
}
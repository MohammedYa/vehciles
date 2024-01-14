import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehcilsDitailsService } from '../../services/vehcils-ditails.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RevertVehcilService } from '../../services/revert-vehcil.service';

VehcilsDitailsService
@Component({
  selector: 'app-scrap',
  templateUrl: './scrap.component.html',
  styleUrl: './scrap.component.css'
})
export class ScrapComponent {
  massaage: string = ""
  error: string = ""
  constructor(private _Router: Router, private _VehcilsDitailsService: VehcilsDitailsService, private _RevertVehcilService: RevertVehcilService) { }
  scrapeForm: FormGroup = new FormGroup(
    {
      "PlateNumber": new FormControl(null, [Validators.minLength(3), Validators.maxLength(20), Validators.required]),
    }
  )
  getVecile(form: FormGroup) {

    this._VehcilsDitailsService.getVehciles(form.value.PlateNumber).subscribe(
      (res) => {
        console.log(res);
        this._RevertVehcilService.scrapVehicles(res.id).subscribe(
          (res) => {

            if (res.isSuccess) {
              setTimeout(() => {
                this.massaage = "تمت العمليه بنجاح"

              }, 2000);
              setTimeout(() => {
                this.massaage = ""

              }, 4000);
            }
          },
          (err) => {
            if (err.isSuccess == false) {
              setTimeout(() => {
                this.error = "الرجاء التاكدمن ان المركبه صاحبه اللوحة موجوده بالفعل   "

              }, 2000);
              setTimeout(() => {
                this.error = ""

              }, 4000);
            }

          }
        )

      },
      (err) => {

        this.error = err.error.message
      }
    )

  }
  back() {
    this._Router.navigateByUrl("/Home")
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss']
})
export class AddBrandComponent implements OnInit {

  addBrandForm: FormGroup
  brandName: FormControl
  subBrand: FormControl

  constructor() { }

  ngOnInit() {
    this.addBrandFormValidation()
  }

  addBrandFormValidation(){
    this.brandName = new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
    this.subBrand = new FormControl('', [
      Validators.minLength(3)
    ])

    this.addBrandForm = new FormGroup({
      brandName: this.brandName,
      subBrand: this.subBrand
    })
  }

  addBrand(formValues){
    console.log(formValues)
  }

}

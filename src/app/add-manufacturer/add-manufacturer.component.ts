import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ManufacturerService } from '../services/manufacturer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-manufacturer',
  templateUrl: './add-manufacturer.component.html',
  styleUrls: ['./add-manufacturer.component.scss']
})
export class AddManufacturerComponent implements OnInit {

  form:FormGroup;

  constructor(
    private fb:FormBuilder,
    private manufacturerService: ManufacturerService,
    private toastr: ToastrService
  ) { 
    this.form = this.fb.group({
      'manufacturer' : ['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(50),Validators.pattern("^[A-Za-z]+[A-Za-z ]+[a-zA-Z0-9~`!@#$%^&*()-_+=|\{}'\":;/?,<>. ]*")])],
    });
  }

  ngOnInit() {
  }

  addManufacturer(){
    let data = this.form.value;
    this.manufacturerService.addManufacturer(data.manufacturer).subscribe(response =>{
      if(response.status=="success"){
        this.toastr.success(response.message, 'Success', {timeOut: 5000});
      }else{
        this.toastr.error(response.message, 'Error', {timeOut: 5000})
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ManufacturerService } from '../services/manufacturer.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.scss']
})
export class AddModelComponent implements OnInit {

  form:FormGroup;
  manufacturers$: Observable<any[]>;
  constructor(
    private fb:FormBuilder,
    private manufacturerService: ManufacturerService,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      'name' : ['', Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(50),Validators.pattern("^[A-Za-z]+[A-Za-z ]+[a-zA-Z0-9~`!@#$%^&*()-_+=|\{}'\":;/?,<>. ]*")])],
      'manufacturer': ['', Validators.required],
      'color': ['', Validators.required],
      'year': ['', Validators.required],
      'registration_number': ['', Validators.required],
      'note': ['', Validators.required],
      'count': [0, Validators.required],
      'image1': [null, Validators.required],
      'image2': [null,Validators.required]
    });
   }

  ngOnInit() {
    this.manufacturers$ = this.manufacturerService.getManufacturers();
  }

  addModel(){
    let data = this.form.value;
    console.log(data);
    
  }

}

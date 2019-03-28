import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ManufacturerService } from '../services/manufacturer.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ModelService } from '../services/model.service';
@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.scss']
})
export class AddModelComponent implements OnInit {

  form:FormGroup;
  manufacturers$: Observable<any[]>;
  request = new FormData();
  constructor(
    private fb:FormBuilder,
    private cd: ChangeDetectorRef,
    private manufacturerService: ManufacturerService,
    private modelService: ModelService,
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
    
    this.request.append('name',data.name);
    this.request.append('manufacturer',data.manufacturer);
    this.request.append('color',data.color);
    this.request.append('year',data.year);
    this.request.append('registration_number',data.registration_number);
    this.request.append('note',data.note);
    this.request.append('count',data.count);
    console.log(data);
    this.modelService.addModel(this.request).subscribe(response =>{
      if(response.status=="success"){
        this.toastr.success(response.message, 'Success', {timeOut: 5000});
      }else{
        this.toastr.error(response.message, 'Error', {timeOut: 5000})
      }
    });
  }

  onFileChange(event,image_index) {
    if(event.target.files && event.target.files.length) {
      let file = event.target.files;
      this.request.append(image_index,file[0]);
    }
  }

}

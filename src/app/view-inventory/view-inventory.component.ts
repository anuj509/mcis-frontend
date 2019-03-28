import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { InventoryService } from '../services/inventory.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.scss']
})
export class ViewInventoryComponent implements OnInit, AfterViewInit, OnDestroy{
  @ViewChild(DataTableDirective) datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  inventoryRows = [];
  closeResult: string;
  modelDetails;
  constructor(
    private inventoryService: InventoryService,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.loadInventory();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }

  loadInventory(){
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        "emptyTable": "No Models available in the system"
      }
    };
    this.inventoryService.getInventory().subscribe(response =>{
      this.inventoryRows = response;
      console.log("rows",response);
      this.rerender();
    });
  }

  rerender(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  showModel(content,model){
    this.modelDetails = model;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  modelSold(model_id){
    this.inventoryService.markAsSold(model_id).subscribe(response =>{
      if(response.status=="success"){
        this.toastr.success(response.message, 'Success', {timeOut: 5000});
        this.modalService.dismissAll();
        this.loadInventory();
      }else{
        this.toastr.error(response.message, 'Error', {timeOut: 5000})
      }
    });
  }

}

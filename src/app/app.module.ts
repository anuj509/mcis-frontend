import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { AddManufacturerComponent } from './add-manufacturer/add-manufacturer.component';
import { LandingComponent } from './landing/landing.component';
import { AddModelComponent } from './add-model/add-model.component';
import { ViewInventoryComponent } from './view-inventory/view-inventory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddManufacturerComponent,
    LandingComponent,
    AddModelComponent,
    ViewInventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

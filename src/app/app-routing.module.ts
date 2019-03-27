import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddManufacturerComponent } from './add-manufacturer/add-manufacturer.component';
import { LandingComponent } from './landing/landing.component';
import { AddModelComponent } from './add-model/add-model.component';
import { ViewInventoryComponent } from './view-inventory/view-inventory.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: LandingComponent },
  { path: 'add-manufacturer', component: AddManufacturerComponent },
  { path: 'add-model', component: AddModelComponent },
  { path: 'view-inventory', component: ViewInventoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

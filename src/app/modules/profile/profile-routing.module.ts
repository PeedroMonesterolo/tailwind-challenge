import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByProductComponent } from './by-product/by-product.component';

const routes: Routes = [
  { path: "", component: ByProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }

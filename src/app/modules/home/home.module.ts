import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BrandsComponent } from './brands/brands.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    BrandsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule
  ]
})
export class HomeModule { }

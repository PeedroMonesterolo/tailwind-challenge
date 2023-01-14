import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ByProductComponent } from './by-product/by-product.component';
import { NavigationTopComponent } from 'src/app/components/navigation-top/navigation-top.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    ByProductComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ComponentsModule
  ]
})
export class ProfileModule { }

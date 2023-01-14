import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBottomComponent } from './navigation-bottom/navigation-bottom.component';
import { NavigationTopComponent } from './navigation-top/navigation-top.component';
import { TabsComponent } from './tabs/tabs.component';
import { ProfileComponent } from './profile/profile.component';
import { ButtonComponent } from './button/button.component';
import { ProfileCarruselComponent } from './profile-carrusel/profile-carrusel.component';
import { CardProgressComponent } from './card-progress/card-progress.component';
import { DescriptionsProfileComponent } from './descriptions-profile/descriptions-profile.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavigationBottomComponent,
    NavigationTopComponent,
    TabsComponent,
    ProfileComponent,
    ButtonComponent,
    ProfileCarruselComponent,
    CardProgressComponent,
    DescriptionsProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigationBottomComponent,
    NavigationTopComponent,
    TabsComponent,
    ProfileComponent,
    ButtonComponent,
    ProfileCarruselComponent,
    CardProgressComponent,
    DescriptionsProfileComponent
  ]
})
export class ComponentsModule { }

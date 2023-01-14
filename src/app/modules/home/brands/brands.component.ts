import { Component, OnInit } from '@angular/core';
import { Navigation, NavigationBottom } from 'src/app/models/navigation.model';
import { Tabs } from 'src/app/models/tabs.model';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  navigation!: Navigation;
  tabs!: Tabs[];
  navigationOption!: NavigationBottom;
  constructor() {
    this.navigation = {
      type: 1
    };
    this.tabs = [
      {
        name: 'Videos',
        selected: false
      },
      {
        name: 'Productos',
        selected: false
      },
      {
        name: 'Marcas',
        selected: true
      }
    ];
    this.navigationOption = {
      type: 1,
      selected: 'Inicio'
    };
  }

  ngOnInit(): void {
  }

}

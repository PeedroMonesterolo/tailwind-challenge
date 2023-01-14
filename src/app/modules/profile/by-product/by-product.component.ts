import { Component, OnInit } from '@angular/core';
import { Navigation, NavigationBottom } from 'src/app/models/navigation.model';
import { Tabs } from 'src/app/models/tabs.model';

@Component({
  selector: 'app-by-product',
  templateUrl: './by-product.component.html',
  styleUrls: ['./by-product.component.scss']
})
export class ByProductComponent implements OnInit {
  navigation!: Navigation;
  navigationOption!: NavigationBottom;
  tabs!: Tabs[];
  constructor() {
    this.navigation = {
      type: 2
    };
    this.tabs = [
      {
        name: 'Neta',
        selected: false
      },
      {
        name: 'Bruta',
        selected: false
      },
      {
        name: 'Comisiones',
        selected: true
      }
    ];
    this.navigationOption = {
      type: 2,
      selected: 'Perfil'
    };
  }

  ngOnInit(): void {
  }

}

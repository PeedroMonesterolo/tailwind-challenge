import { Component, Input, OnInit } from '@angular/core';
import { NavigationBottom } from 'src/app/models/navigation.model';

@Component({
  selector: 'app-navigation-bottom',
  templateUrl: './navigation-bottom.component.html',
  styleUrls: ['./navigation-bottom.component.scss']
})
export class NavigationBottomComponent implements OnInit {
  @Input() navigationOption: NavigationBottom = { type: 1, selected: 'Inicio'};
  constructor() { }

  ngOnInit(): void {
  }

}

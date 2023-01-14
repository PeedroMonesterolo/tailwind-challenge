import { Component, Input, OnInit } from '@angular/core';
import { Navigation } from 'src/app/models/navigation.model';

@Component({
  selector: 'app-navigation-top',
  templateUrl: './navigation-top.component.html',
  styleUrls: ['./navigation-top.component.scss']
})
export class NavigationTopComponent implements OnInit {
  @Input() navigation: Navigation = { type: 1};
  
  constructor() { }

  ngOnInit(): void {
  }

}

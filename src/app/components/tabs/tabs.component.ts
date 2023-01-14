import { Component, Input, OnInit } from '@angular/core';
import { Tabs } from 'src/app/models/tabs.model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() tabs!: Tabs[];
  @Input() type: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}

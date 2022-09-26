import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  @Input()
  isMainPageVisible!: boolean;

  @Input()
  isPortfolioPageVisible!: boolean;
  
  @Input()
  isContactsPageVisible!: boolean;

  @Input()
  isDogsPageVisible!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

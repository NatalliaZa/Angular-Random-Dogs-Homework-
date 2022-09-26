import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  isMainPageVisible = true;

  @Input()
  isPortfolioPageVisible = false;

  @Input()
  isContactsPageVisible = false;

  @Input()
  isDogsPageVisible = false;

  @Output()
  onMainPageSelected = new EventEmitter();
  
  @Output()
  onPortfolioPageSelected = new EventEmitter();
 
  @Output()
  onContactsPageSelected = new EventEmitter();
  
  @Output()
  onDogsPageSelected = new EventEmitter();

 

  constructor() { }

  ngOnInit(): void {
  }

  showMainPage() {
    this.onMainPageSelected.emit();
  }

  showPortfolioPage() {
    this.onPortfolioPageSelected.emit();
  }

  showContactsPage() {
    this.onContactsPageSelected.emit();
  }

  showDogsPage() {
    this.onDogsPageSelected.emit();
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMainPageVisible: boolean = true;
  isPortfolioPageVisible: boolean = false;
  isContactsPageVisible: boolean = false;
  isDogsPageVisible: boolean = false;

  showMainPage() {
    this.isMainPageVisible = true;
    this.isPortfolioPageVisible = false;
    this.isContactsPageVisible = false;
    this.isDogsPageVisible = false;
  }

  showPortfolioPage() {
    this.isMainPageVisible = false;
    this.isPortfolioPageVisible = true;
    this.isContactsPageVisible = false;
    this.isDogsPageVisible = false;
  }

  showContactsPage() {
    this.isMainPageVisible = false;
    this.isPortfolioPageVisible = false;
    this.isContactsPageVisible = true;
    this.isDogsPageVisible = false;
  }

  showDogsPage() {
    this.isMainPageVisible = false;
    this.isPortfolioPageVisible = false;
    this.isContactsPageVisible = false;
    this.isDogsPageVisible = true;
  }

}

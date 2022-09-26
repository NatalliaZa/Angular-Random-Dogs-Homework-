import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { DogsPageComponent } from './pages/dogs-page/dogs-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLayoutComponent,
    FooterComponent,
    MainPageComponent,
    PortfolioPageComponent,
    ContactsPageComponent,
    DogsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

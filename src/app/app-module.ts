import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Layout } from './components/layout/layout';
import { HomePage } from './components/home-page/home-page';
import { Header } from './components/header/header';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { Adminpage } from './components/adminpage/adminpage';
import { Sidebar } from './components/sidebar/sidebar';
import { Viewalltrains } from './components/viewalltrains/viewalltrains';
import { Allbookings } from './components/allbookings/allbookings';
import { Central } from './components/central/central';
import { Mybookings } from './components/mybookings/mybookings';




@NgModule({
  declarations: [
    App,
    Layout,
    HomePage,
    Header,
    Login,
    Register,
    Adminpage,
    Sidebar,
    Viewalltrains,
    Allbookings,
    Central,
    Mybookings,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }

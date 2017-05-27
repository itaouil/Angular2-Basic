import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';
import { RouterModule, Routes } from '@angular/router';

// Configure routes
const appRoutes: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, NavbarComponent, JumbotronComponent, HomeComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

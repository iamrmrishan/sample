import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';
import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app-routing.module";

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // the created component should be imported
// import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule , MatCheckboxModule,MatSidenavModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HomeComponent,
    DashboardComponent // also marked in the declaratons
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

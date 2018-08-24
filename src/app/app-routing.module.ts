import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';  // routing librarires are imported
import {HomeComponent} from "./home/home.component"; // importing the home components
import {HeroesComponent} from "./heroes/heroes.component"; // importing the heroes component


// routes should be declare this way
const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path:'heroes/:id', // the passing parameter is declared as id
    component : HeroesComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // router module is exported
})
export class AppRoutingModule { }

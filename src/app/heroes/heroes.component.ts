import { Component, OnInit } from '@angular/core'; // data biniding is done here
import {Hero} from 'src/app/hero'; // external classs are imported
import {ActivatedRoute} from "@angular/router";
// import {router} from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //the constructor should be modified so that it will catch the value
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((res)=>{
      console.log(res.id); // value displyed on the scren by console log
    });
  }
  hero: Hero = {
    id :12,
    name : 'chathura',
    age :12,
    married :false
  };
  ngOnInit() { // this is called as soon as the component is created
  }
  // this function will be called in html
  openHome(){
    // this.router.navigate([''])//navigate to home , since home path is '' , the array is left ''
  }
// test commnt  added by  dj
}

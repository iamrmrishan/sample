import { Component, OnInit } from '@angular/core';
// import {trigger,style,transition,animate,keyframes,query,stagger} from "@angular/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemCount : number = 0 ; // item count is declared here
  btnTextAdd : string = 'Add Item' ; // btn text is displyed here
  phText : string = 'Items ...' ; // place holder text is declared here

  itemName : string = 'item 01';
  items = [];
  constructor() { }



  ngOnInit() {
    this.itemCount = this.items.length;
  }
// add item item is declared here
  addItem(){
    this.itemCount = this.itemCount + 1;
    this.items.push(this.itemName);
    this.itemName = '';
  }

}

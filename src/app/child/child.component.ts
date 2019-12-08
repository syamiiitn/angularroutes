import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ispolled:boolean=false;
  @Input() name:string;
  @Output() cmpoll=new EventEmitter();
  poll(opn:string):void{
    this.cmpoll.emit(opn);
    this.ispolled=true;
  }


}

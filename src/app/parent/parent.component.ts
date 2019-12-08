import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  jagan:number=0;
  cbn:number=0;
  pk:number=0;

  people:string[]=['Gopi','Akhil','Abram','Sai'];

  opinion(opn:string):void{
    if(opn=='jagan'){
      this.jagan=this.jagan+1;
    }
    else if(opn=='cbn'){
      this.cbn=this.cbn+1;
    }
    else{
      this.pk=this.pk+1;
    }
  }

}

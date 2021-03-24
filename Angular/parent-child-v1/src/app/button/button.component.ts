import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {


  @Input()
  btnLable: string;

  btnCount:number= 0;

  btnHitCount() {
    this.btnCount=this.btnCount + 1;    
  }


  constructor() { }



  ngOnInit(): void {
  }

}

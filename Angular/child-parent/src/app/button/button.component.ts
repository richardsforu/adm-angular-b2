import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {


  @Input()
  btnLable: number;

  btnCount:number= 0;

  @Output()
  hitBack=new EventEmitter();

  btnHitCount() {
    this.btnCount=this.btnCount + 1;
    this.hitBack.emit(this.btnLable);
    console.log('emited....');
    
    
  }




  constructor() { }



  ngOnInit(): void {
  }

}

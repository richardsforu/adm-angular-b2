import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent {

 @Input() 
 message:String;

 @Input()
 name:String;


 @Input()
 n1:number
 @Input()
 n2:number

 @Input()
 emp:any;



}

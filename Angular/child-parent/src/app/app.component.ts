import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-child-v1';

  btnLable=100;

  totalbtnHitsCount=0;

  buttons = [5,10,15,20,-5,-10,-15,-20]

  totalBtnHitsCount(childMessage){
    console.log('APP Component:: totalBtnHitsCount');
    console.log(childMessage);
    this.totalbtnHitsCount= this.totalbtnHitsCount+childMessage;
    
  }



}

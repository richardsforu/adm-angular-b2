import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-child';
  message:string;


  sendGreeting(message){
    this.message = message;
  }
  n1 = 0;
  n2 = 0;

  emp = {
    id: 10,
    name: 'Praveen',
    salary: 150000
  }


}

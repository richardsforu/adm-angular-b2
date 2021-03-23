import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';

  status = true;
  numStatus: number = 1;
  testStatus: string = '';

  cities = ['Chennai', 'Bangalore', 'Delhi', 'Mumbai'];

  employees = [
    { id: 10, name: 'Praveen', salary: 4856458 },
    { id: 11, name: 'James', salary: 459845945 },
    { id: 12, name: 'Kavya', salary: 9457495 },
    { id: 13, name: 'Ravi', salary: 736433 },
    { id: 14, name: 'Devi', salary: 253462 },
  ];

  handleCheckbox(s1) {
    console.log(s1);

  }




}

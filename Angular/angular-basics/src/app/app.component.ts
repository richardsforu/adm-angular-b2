import { Component } from '@angular/core';

@Component({ // '@' Component decarator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'Learn Angular 11';

  f1() {
    console.log('f1 function....')
  }
}

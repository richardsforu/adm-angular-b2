import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-clock';

  props:string;

  loadClock(props) {
    this.props=props;
    return new Date().toLocaleTimeString('en-US', { timeZone: props })

  }

  number = setInterval(() => {
    this.loadClock(this.props);
  }, 1000)


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components-v1';
  status = false;
  imageAlignment = 'left';

  product = {
    id: '',
    name: '',
    price: '',
    description: ''
  }

  basePath = "assets/images";
  imageUrl = this.basePath + "/tj2.jpeg";


  changePosition(position) {
    this.imageAlignment = position;
    console.log(position);

  }

  b1Click() {
    alert('Hellow from B1 button');
  }

  btnBgColor = '';

  b2Click() {
    this.btnBgColor = 'background-color: green';
  }

  b2ClickV1() {
    this.btnBgColor = '';

  }

  messageText = '';
  messageText2 = '';

  handleChange(s1) {
    this.messageText = s1;
  }

  handleSubmit() {
    console.log(this.product);

  }


}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { ProductComponent } from './product/product.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    ProductComponent,
    FormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

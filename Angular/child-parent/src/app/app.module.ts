import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { SunmmaryComponent } from './sunmmary/sunmmary.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SunmmaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

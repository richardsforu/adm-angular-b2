import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule(
  { // '@' - Decarator
  declarations: [ // declare user defined components
    AppComponent
  ],
  imports: [ // predefined  modules
    BrowserModule
  ],
  providers: [], // DI -> Dependency Injection management
  bootstrap: [AppComponent] // intial start of of a component
}
)
export class AppModule { }

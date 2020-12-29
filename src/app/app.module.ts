import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimoComponentComponent } from './componenti/primo-component/primo-component.component';
import { SecondoComponentComponent } from './componenti/secondo-component/secondo-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimoComponentComponent,
    SecondoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

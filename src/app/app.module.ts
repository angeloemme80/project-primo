import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimoComponentComponent } from './componenti/primo-component/primo-component.component';
import { SecondoComponentComponent } from './componenti/secondo-component/secondo-component.component';
import { HeaderComponent } from './componenti/header/header.component';
import { ProvaNGComponent } from './componenti/prova-ng/prova-ng.component';
import { FormComponent } from './componenti/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './componenti/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { CallRestComponent } from './componenti/call-rest/call-rest.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimoComponentComponent,
    SecondoComponentComponent,
    HeaderComponent,
    ProvaNGComponent,
    FormComponent,
    TableComponent,
    CallRestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

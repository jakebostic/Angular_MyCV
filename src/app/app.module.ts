import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { WorkExpComponent } from './work-exp/work-exp.component';
import { EducationComponent } from './education/education.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    WorkExpComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownModule } from "ng2-date-countdown";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms'; 
import {DpDatePickerModule} from 'ng2-date-picker';
import { ToDoComponent } from './to-do/to-do.component';
import { CountdownComponent } from './countdown/countdown.component';
@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    DpDatePickerModule,
  ],
  providers: [MatNativeDateModule,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

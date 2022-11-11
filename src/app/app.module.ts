import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StepperComponent } from 'src/app/stepper/stepper.component';
import { CourseCardComponent } from 'src/app/course-card/course-card.component';

@NgModule({
  declarations: [AppComponent, StepperComponent, CourseCardComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

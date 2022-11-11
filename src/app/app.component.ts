import { Component } from '@angular/core';
import { COURSES } from '../data/db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  courses = COURSES;

  data = {
    title: 'Angular DEV',
  };

  updateTitle(newTitle: string) {
    this.data.title = newTitle;
  }
}

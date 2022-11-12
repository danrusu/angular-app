import { Component } from '@angular/core';
import { COURSES } from '../data/db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  courses = COURSES.filter((x) => x?.description);

  data = {
    title: 'Angular DEV',
  };

  updateTitle(newTitle: string) {
    this.data.title = newTitle;
  }

  onCourseSelected(course: Course) {
    console.log(`App component - courseSelected event bubbled up`);
    console.log(`Selected: ${JSON.stringify(course, null, 2)}`);
  }
}

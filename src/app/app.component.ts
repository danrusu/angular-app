import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Inject,
  Injector,
  OnInit,
} from '@angular/core';
import { COURSES } from '../../server/db-data';
import { Course } from './model/course';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const params = new HttpParams().set('page', 1).set('pageSize', 10);

    this.courses$ = this.http.get<Course[]>('/api/courses', { params });

    // .subscribe((courses: Course[]) => {
    //   this.courses = courses;
    // });
  }

  // courses = COURSES.filter(x => x?.description);

  data = {
    title: 'Angular DEV Course',
    price: 10.55,
    currency: 'EUR',
  };

  updateTitle(newTitle: string) {
    this.data.title = newTitle;
  }

  onCourseSelected(course: Course) {
    console.log(`App component - courseSelected event bubbled up`);
    console.log(`Selected: ${JSON.stringify(course, null, 2)}`);
  }
}

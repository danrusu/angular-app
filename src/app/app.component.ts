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
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(
    private http: HttpClient,
    private coursesService: CoursesService,
  ) {}

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
  }

  data = {
    title: 'Angular DEV Course',
    price: 10.55,
    currency: 'EUR',
  };

  updateTitle(newTitle: string) {
    this.data.title = newTitle;
  }

  save(course: Course) {
    console.log('app save course');
    this.coursesService.save(course).subscribe(() => {
      console.log('Course saved');
    });
  }
}

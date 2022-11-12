import { BoundElementProperty } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() {}

  ngOnInit(): void {}

  onCourseViewed() {
    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    return {
      beginner: this.course.category == 'BEGINNER',
      advanced: this.course.category == 'ADVANCED',
      intermediate: this.course.category == 'INTERMEDIATE',
    };
  }

  cardStyle() {
    return {
      'font-weight': 'bold',
      'font-size': '1.1em',
      color: 'black',
    };
  }
}

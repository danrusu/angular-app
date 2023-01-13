import { Request, Response } from 'express';
import { COURSES } from './db-data';

function findCourseById(courseId: number) {
  return COURSES.find((course: any) => course?.id === courseId);
}

export function saveCourse(req: Request, res: Response) {
  const id = parseInt(req.params['id']);
  const changes = req.body;

  console.log('Saving course', id, JSON.stringify(changes));

  const course = findCourseById(id);

  course.description = changes.description;

  res.status(200).json(course);
}

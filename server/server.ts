import * as express from 'express';
import { Application } from 'express';
import { getAllCourses } from './get-courses.route';
import { saveCourse } from './save-course.route';

const cors = require('cors');
const bodyParser = require('body-parser');

const app: Application = express();

app.use(cors({ origin: true }));
app.use(bodyParser.json());

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/:id').put(saveCourse);

const httpServer = app.listen(9000, () => {
  console.log(
    'HTTP REST API Server running at http://localhost:' +
      httpServer.address()['port'],
  );
  console.log(
    `Endpoints: ${JSON.stringify(
      ['/api/courses', '/api/courses/:id'],
      null,
      2,
    )}`,
  );
});

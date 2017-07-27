import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './pages/App';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import CoursePage from './pages/course/container/CoursePage';
import ManageCoursePage from './pages/course/container/ManageCoursePage';

export default (
  <Route path="/" components={App}>
    <IndexRoute components={HomePage} />
    <Route path="courses" components={CoursePage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />

    <Route path="about" components={AboutPage} />
  </Route>
);
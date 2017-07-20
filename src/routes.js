import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursePage from './components/course/CoursePage.js';

export default(
  <Route path="/" components={App}>
    <IndexRoute components={HomePage}/>
    <Route path="course" components={CoursePage}/>
    <Route path="about" components={AboutPage}/>
  </Route>
);
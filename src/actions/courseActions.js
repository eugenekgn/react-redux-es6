import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

const loadCoursesSuccess = (courses) => {
  return {
    type: types.LOAD_COURSES_SUCESS,
    courses: courses
  };
};


const loadCourses = () => {
  return (dispatch) => {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw (error);
    });
  };
};

export { loadCoursesSuccess, loadCourses };
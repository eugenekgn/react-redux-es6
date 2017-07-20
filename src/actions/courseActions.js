export function createCourse(course) {
  console.log('1) this is an [ACTION] call ', course);
  return {
    type: 'CREATE_COURSE',
    course: course
  };
}

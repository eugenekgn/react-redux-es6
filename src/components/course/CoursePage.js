import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursePage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: {title: ""}
    };

    /*
     To enhance performance declare all the bindings here,
     otherwise if they are declare in the mark up binding
     will have to take place during rendering which will take
     performance hit.
    */

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({
      course: course
    });
  }

  onClickSave() {
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    console.log('4) this is an course page, render content ');
    return (<div>
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
      </div>
      <input
        type="text"
        onChange={this.onTitleChange}
        value={this.state.course.title}
      />
      <input
        type="submit"
        value="Save"
        onClick={this.onClickSave}
      />
    </div>);
  }
}

CoursePage.propType = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
  console.log('3) this is an course page, with state ', state);

  return {
    courses: state.courses
  };
};

// since second parameter is not provided, connect ejects connect prop
export default connect(mapStateToProps)(CoursePage);
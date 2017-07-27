import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return ();
  }
}

ManageCoursePage.PropTypes = {

};

const mapStateToProps = (state, ownProps) => {

};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: (actions) => bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);


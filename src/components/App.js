import React, {PropTypes} from 'react';
import Header from '../common/Header.js';

class App extends React.Component {
  /**
   * this.props.children trickle down from the router
   */
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

App.propType = {
  children: PropTypes.object.isRequired
};

export default App;
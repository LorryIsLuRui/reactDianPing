import React, { Component } from 'react';
import Page from './containers/index.jsx';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userInfoActionsFromOtherFile from './actions/userinfo.js';

// import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Page/>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    userinfo:state.userinfo
  };
}
function mapDispatchToProps(dispatch){
  return {
      userInfoActions:bindActionCreators(userInfoActionsFromOtherFile,dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

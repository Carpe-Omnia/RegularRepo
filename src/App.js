import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions/orientationActions'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount() {
    this.props.actions.home();
  }
  render() {
    var orientation = `${this.props.orientation.orientation}` ;
    var Parent =  parentHash[orientation]  ;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>Welcome</h4>
          <span className="non_mobile" >press ';' to access hotkeys from within an input </span>
        </header>
          < Parent />
      </div>
    );
  }
}


class ParentTopCenter extends React.Component {
  render() {
    return (
      <div id="parent-top-center" >
        <h3> Top-Center </h3>
        <EnterText />
      </div>
    )
  }
}
class ParentTopLeft extends React.Component {
  render() {
    return(
      <div id="parent-top-left" >
        <h3> Top-left </h3>
      </div>
    )
  }
}
class ParentTopRight extends React.Component {
  render() {
    return(
      <div id="parent-top-right" >
        <h3> Top-Right </h3>
      </div>
    )
  }
}
class EnterText extends React.Component {
  render() {
    return (
      <form>
        <input type="text" id="hotkey1" />
        <span className="non_mobile" >(a)</span>
      </form>
    )
  }
}
var parentHash = {
  "-1,0": ParentTopLeft ,
  "0,0": ParentTopCenter ,
  "1,0": ParentTopRight ,
}

function mapStateToProps(state){
  return {orientation: state.orientation}
}
function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}
const connector = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = connector(App)

export default connectedComponent;

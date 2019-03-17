import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {  BrowserRouter as Router, Route} from 'react-router-dom';
import * as actions from './actions/orientationActions'
import NavBar from './components/NavBar';
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
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>Welcome</h4>
          <span className="non_mobile" >press ';' to access hotkeys from within an input </span>
        </header>
        <Router>
          <React.Fragment >
            <NavBar />
            <Route
              exact path="/"
              render={(props) => <GrandParent0 {...props} actions={this.props.actions} orientation={this.props.orientation} z="0" />}
            />
            <Route
              exact path="/second"
              render={(props) => <GrandParent1 {...props} actions={this.props.actions} orientation={this.props.orientation} z="1" />}
            />
            <Route
              exact path="/third"
              render={(props) => <GrandParent2 {...props} actions={this.props.actions} orientation={this.props.orientation} z="2" />}
            />
          </React.Fragment >
        </Router >
      </div>
    );
  }
}

class GrandParent0 extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    var orientation = this.props.orientation.orientation[0] ;
    var Parent =  parentHash[`${orientation}`]  ;
    return (
    <div>
      <h1> Container 0 </h1>
      < Parent actions={this.props.actions}  z={this.props.z} />
    </div>
    )
  }
}

class GrandParent1 extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    var orientation = this.props.orientation.orientation[1] ;
    var Parent =  parentHash[`${orientation}`]  ;
    return (
    <div>
      <h1> Container 1 </h1>
      < Parent actions={this.props.actions}  z={this.props.z} />
    </div>
    )
  }
}

class GrandParent2 extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    var orientation = this.props.orientation.orientation[2] ;
    var Parent =  parentHash[`${orientation}`]  ;
    return (
    <div>
      <h1> Container 2 </h1>
      < Parent actions={this.props.actions}  z={this.props.z} />
    </div>
    )
  }
}

class ParentTopCenter extends React.Component {
  render() {
    return (
      <div id="parent-top-center" className="parentElement">
        <h3> Top-Center </h3>
        <EnterText />
        <NavArrow direction="Left" actions={this.props.actions} z={this.props.z} />
        <NavArrow direction="Right" actions={this.props.actions} z={this.props.z} />
      </div>
    )
  }
}
class ParentTopLeft extends React.Component {
  render() {
    return(
      <div id="parent-top-left" className="parentElement">
        <h3> Top-left </h3>
        <NavArrow direction="Right" actions={this.props.actions} z={this.props.z} />
      </div>
    )
  }
}
class ParentTopRight extends React.Component {
  render() {
    return(
      <div id="parent-top-right" className="parentElement" >
        <h3> Top-Right </h3>
        <NavArrow direction="Left" actions={this.props.actions} z={this.props.z} />
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
        <input id="test_button" type="button" onClick={() => console.log("button click")} />
      </form>
    )
  }
}
var parentHash = {
  "-1,0": ParentTopLeft ,
  "0,0": ParentTopCenter ,
  "1,0": ParentTopRight ,
}
const NavArrow = (props) => {
  var name = `arrow ${props.direction}`
  function doClick(){
    props.actions.move(props.direction, props.z);
  }
  return (
    <div className={name} onClick={doClick}>
      ^
    </div>
  )
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

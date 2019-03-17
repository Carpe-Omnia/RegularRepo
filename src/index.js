import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import configureStore from './store/configureStore'
//import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import {home} from './actions/orientationActions'
// import $ from 'jquery'
import * as actions from './actions/orientationActions'

const store = configureStore();
store.dispatch(home());
ReactDOM.render(<App store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

document.addEventListener('keydown', function(e){
  var act = document.activeElement;
  if (act.tagName !== "INPUT"){
    handleKey(e, act);
  }
  else if (e.key === ";"){
    act.blur();
  }
})

function handleKey(e, act){
  var target;
  if (e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "ArrowDown") {
    moveAround(e, act);
  }
  else if (!!parseInt(e.key, 10)) {
    navigate(e)
  }
  else {
    switch(e.key){
      case 'a':
        target = document.getElementById('hotkey1')
        break;
      default:
        target = act ;
    }
    if (!!target) {target.focus()}
  }
}

function moveAround(e, act) {
  var direction = e.key.replace("Arrow","");
  var z ;
  if (window.location.pathname === '/') { z = "0" }
  if (window.location.pathname === '/second') { z = "1" }
  if (window.location.pathname === '/third') { z = "2" }
  store.dispatch(actions.move(direction, z));
}
function navigate(e, act) {
  if (e.key === "1") {document.getElementById("navlink1").click(); }
  else if (e.key === "2") {document.getElementById("navlink2").click(); }
  else if (e.key === "3") {document.getElementById("navlink3").click(); }
}

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import {home} from './actions/orientationActions'
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
  console.log(e.key)
  if (e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "ArrowDown") {
    navigate(e, act);
  }
  else {
    switch(e.key){
      case 'a':
        target = document.getElementById('hotkey1')
        break;
      default:
        target = act ;
    }
    target.focus()
  }
}

function navigate(e, act) {
  var direction = e.key.replace("Arrow","");
  store.dispatch(actions.move(direction));
}

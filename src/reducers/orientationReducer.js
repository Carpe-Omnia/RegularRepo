import React, { Component } from 'react';

function orientationReducer(state={orientation: [0,0] }, action){
  var pos = state.orientation ;
  var newState;
  switch(action.type) {
    case 'DEFAULT_ORIENTATION':
      return state
    case 'MOVE_ORIENTATION':
      if (action.payload.direction === "Left"){
        pos[0] > -1 ? newState = {orientation: [ pos[0] - 1, pos[1] ] } : newState = state ;
        return newState ;
      }
      if (action.payload.direction === "Right") {
        pos[0] < 1 ? newState =  {orientation: [pos[0] + 1, pos[1] ]} : newState = state ;
        return newState ;
      }
      else {
        return state
      }
    default:
      return state
  }
}

export default orientationReducer

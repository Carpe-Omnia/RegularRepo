export function move(direction){
  return (
    {
      type: 'MOVE_ORIENTATION',
      payload: {
        direction: direction
      }
    }
  )
}

export function home(){
  console.log("Home is being called");
  return (
    {
      type: 'DEFAULT_ORIENTATION',
      payload: {
        orientation: [0,0]
      }
    }
  )
}

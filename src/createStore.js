export default function createStore(reducer, initialState) {
  let state

  function dispatch(action) {
    state = reducer(state, action)
    render()
  }

  function getState() {
    if (state) {
      return state
    } else {
      dispatch({ type: '@@INIT' })
      return state
    }
  }

  return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}

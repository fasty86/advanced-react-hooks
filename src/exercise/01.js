// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(state, action) {
  console.log(state, action)
  switch (action.type) {
    case 'increment': {
      return {count: state.count + action.value}
    }
    case 'decrement':
      return {count: state.count - action.value}
  }
}
function init(arg) {
  return {count: arg}
}

function Counter({initialCount = 11, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  // const [count, setCount] = React.useState(initialCount)
  const [count, dispath] = React.useReducer(countReducer, initialCount, init)
  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const increment = () => dispath({type: 'increment', value: step})
  const decrement = () => dispath({type: 'decrement', value: step})
  return (
    <>
      <button onClick={increment}>{count.count}</button>
      <button onClick={decrement}>{count.count}</button>
    </>
  )
}

function App() {
  return <Counter />
}

export default App

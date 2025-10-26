import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [x, setX] = useState(0)

  function subtractx () {
    setX(x-10);
  }

  function addx () {
    setX(x+10);
  }

  return (
    <>
      <div className="header">
        <h1>The value of x is {x}</h1>
      <button className='btn' onClick={subtractx}>Click to Subtract</button>
      <button className='btn' onClick={addx}>Click to Add</button>
      <p>
        Since React reloades the entire component if there is any change in code, storing persistent data becomes an issue. <br />
        useState hook of React comes to the rescue.
      </p>
      </div>
    </>
  )
}
 
export default App

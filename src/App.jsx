import { useState } from 'react'
import './App.css'
import Post from './post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>React Core concepts</h3>
      
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>Load Data</li>
      </ol>
      <hr />
      <Post></Post>
    </>
  )
}

export default App

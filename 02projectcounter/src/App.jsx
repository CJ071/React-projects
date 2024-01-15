import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addVal=()=>{
    // know the concept of batching,here below the value is incremented by 3 as it using prevcount as callback
    setCount(prevcount=>prevcount+1)
    setCount(prevcount=>prevcount+1)
    setCount(prevcount=>prevcount+1)
  }
  const subVal=()=>{
    setCount(count-1)
  }
  return (
    <>
      <div>
      <h1>React course {count}</h1>
      <h2>Counter value {count}</h2>
      <button onClick={addVal}>Add value</button>
      <button onClick={subVal}>Reduce value</button>
      </div>
    </>
  )
}

export default App

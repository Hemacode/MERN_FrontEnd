import { useState } from 'react'
import Movie from './Movie'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Movie/>
    </div>
  )
}

export default App

import Movie from './pages/Movie'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './index.scss'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={ <Movie/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Skills from './pages/Skills'
import Weather from './pages/Weather'
import Err from './pages/Err'
import Submit from './pages/Submit'
// import Navbar from './Component/Navbar'


function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

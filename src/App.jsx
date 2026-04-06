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
        <nav>
          <Link to="/">Home</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/education">Education</Link>
          <Link to="/weather">Weather</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/education' element={<Education />} />
          <Route path='/weather' element={<Weather />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

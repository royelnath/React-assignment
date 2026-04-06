import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Skills from './pages/Skills'
import Weather from './pages/Weather'
import Err from './pages/Err'
import Submit from './pages/Submit'
import Navbar from './Component/Navbar'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/education' element={<Education />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/weather' element={<Weather />} />
          <Route path='*' element={<Err />} />
          <Route path='/submit' element={<Submit />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

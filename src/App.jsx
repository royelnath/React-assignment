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



function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top custom-nav ">
        <div class="container-fluid d-flex flex-row align-items-center justify-content-center justify-content-lg-end">
          <a class="navbar-brand fw-bold" href="#">PORTFOLIO</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/contact">Contact</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/skills">Skills</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/education">Education</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/weather">Weather</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}


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

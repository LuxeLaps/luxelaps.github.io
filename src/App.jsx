import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import './App.css'
import Home from './components/pages/home'
import Footer from './components/pages/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/pages/about'
import Services from './components/pages/services'
import Projects from './components/pages/projects'
import Blog from './components/pages/blog'
function App() {
  return(<>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
    <Footer />
    </>
  )
}
export default App

import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Header from './Header/Header'
import M from './m'
import Footer from './Footer/Footer'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
// import Pot from './Portfolio/pot'
import Por from './Portfolio/por'
import Contact from './Sections/Contact'

const RedirectHandler = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const redirect = params.get('redirect')

    if (redirect) {
      const normalizedRedirect = redirect.startsWith('/') ? redirect : `/${redirect}`
      navigate(normalizedRedirect, { replace: true })
    }
  }, [location.search, navigate])

  return null
}

const App = () => {
  return (
    <Router>
      <RedirectHandler />
      <Header />
      <Routes>
        <Route path="/" element={<M />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Por />} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home/Hero'
import About from './Pages/AboutUs/AboutHero'
import Services from './Pages/Services/OurServices'
import Treatments from './Pages/Treatments/Treatments'
import Gallery from './Pages/Gallery/Gallery'
import Contact from './Pages/Contact/Contact'
import PrivacyPolicy from './Components/PrivacyPolicy'
import TermsConditions from './Components/TermsAndConditions'
import Appointments from './Components/Appointments'
import Testimonials from './Pages/Testimonials/Testimonials'
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/appointments" element={<Appointments />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
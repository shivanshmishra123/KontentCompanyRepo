import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OurServices from './components/OurServices'
import OurWork from './components/OurWork'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'

function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <OurServices />
            <OurWork />
            <AboutUs />
            <Footer />
        </>
    )
}

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactForm />} />
            </Routes>
        </div>
    )
}

export default App

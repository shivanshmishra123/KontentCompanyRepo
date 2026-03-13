import { Routes, Route } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
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
            <Helmet>
                <title>KoCo. | Kontent Company</title>
                <meta name="description" content="Kontent Company - Creative Agency for End-to-End Content, 3D VFX, Brand Shoots & Films, and Website Design." />
                <link rel="canonical" href="https://kontentcompany.in/" />
            </Helmet>
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
        <HelmetProvider>
            <div className="app">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact" element={<ContactForm />} />
                </Routes>
            </div>
        </HelmetProvider>
    )
}

export default App

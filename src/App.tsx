import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { ServicesPage } from './pages/ServicesPage'
import { ClientsPage } from './pages/ClientsPage'
import { Podcasts } from './pages/Podcasts'
import { ContactUs } from './pages/ContactUs'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

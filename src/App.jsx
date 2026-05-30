import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Mission from './components/Mission'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink-800 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Mission />
      </main>
      <Footer />
    </div>
  )
}

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="py-10 text-center text-sm text-gray-500 border-t border-gray-100">
        <p>© {new Date().getFullYear()} InstaVibes. Crafted for creators.</p>
      </footer>
    </div>
  )
}

export default App

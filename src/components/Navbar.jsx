import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.jpeg"
              alt="Fountain Blue Pools"
              className="h-12 w-auto rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
            />
            <div className="hidden sm:block">
              <span className={`font-display font-bold text-lg leading-tight block transition-colors duration-300 ${
                scrolled ? 'text-deep-blue' : 'text-white'
              }`}>
                Fountain Blue
              </span>
              <span className={`text-xs font-medium tracking-wider uppercase transition-colors duration-300 ${
                scrolled ? 'text-pool-blue' : 'text-pool-blue'
              }`}>
                Pools
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? scrolled
                      ? 'text-deep-blue bg-deep-blue/10'
                      : 'text-white bg-white/20'
                    : scrolled
                    ? 'text-charcoal/70 hover:text-deep-blue hover:bg-deep-blue/5'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+263780292970"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                scrolled ? 'text-charcoal/70 hover:text-deep-blue' : 'text-white/80 hover:text-white'
              }`}
            >
              <Phone size={16} />
              <span>+263 780 292 970</span>
            </a>
            <a
              href="https://wa.me/263780292970?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20pool%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-deep-blue to-deep-blue/90 hover:from-pool-blue hover:to-pool-blue/90 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled ? 'text-charcoal hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white shadow-xl border-t border-gray-100 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === link.path
                  ? 'text-deep-blue bg-deep-blue/10'
                  : 'text-charcoal/70 hover:text-deep-blue hover:bg-deep-blue/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100 space-y-2">
            <a
              href="tel:+263780292970"
              className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-charcoal/70 hover:text-deep-blue rounded-lg hover:bg-deep-blue/5 transition-all duration-200"
            >
              <Phone size={16} />
              +263 780 292 970
            </a>
            <a
              href="https://wa.me/263780292970?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20pool%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-gradient-to-r from-deep-blue to-deep-blue/90 text-white px-5 py-3 rounded-lg text-sm font-semibold shadow-md"
            >
              Get a Quote on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

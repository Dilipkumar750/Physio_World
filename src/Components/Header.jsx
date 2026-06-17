import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/bglogo.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar with Vibrant Gradient */}
      <div className="bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] text-white py-1.5 text-sm shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center gap-6">
            {/* Phone Link */}
            <a 
              href="tel:+917904818494" 
              className="flex items-center gap-2 hover:text-cyan-200 transition font-medium group"
            >
              <svg 
                className="w-4 h-4 group-hover:animate-pulse" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                />
              </svg>
              +91 79048 18494
            </a>

            {/* Email Link */}
            <a 
              href="mailto:info@physioworld.com" 
              className="flex items-center gap-2 hover:text-cyan-200 transition font-medium group"
            >
              <svg 
                className="w-4 h-4 group-hover:animate-pulse" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
              info@physioworld.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Header with Premium Gradient Background - Reduced Height */}
      <div className="bg-gradient-to-r from-white via-gray-50 to-white shadow-[0_8px_32px_-8px_rgba(0,0,0,0.15)] border-b border-gray-100">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            
            {/* Logo with Gradient - Smaller Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
            >
              <img 
                src={logo} 
                alt="PhysioWorld Logo" 
                className="w-32 h-16 object-contain" 
              />
            </Link>

            {/* Desktop Navigation with Gradient Hover Effects - Reduced spacing */}
            <nav className="hidden lg:flex space-x-6">
              <NavLink 
                to="/" 
                className={({isActive}) => 
                  isActive 
                    ? 'bg-gradient-to-r from-[#0a2540] to-teal-600 bg-clip-text text-transparent font-semibold border-b-2 border-teal-600 pb-0.5 text-sm' 
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-[#0a2540] hover:to-teal-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium text-sm'
                }
              >
                Home
              </NavLink>
              
              <NavLink 
                to="/about" 
                className={({isActive}) => 
                  isActive 
                    ? 'bg-gradient-to-r from-[#0a2540] to-teal-600 bg-clip-text text-transparent font-semibold border-b-2 border-teal-600 pb-0.5 text-sm' 
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-[#0a2540] hover:to-teal-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium text-sm'
                }
              >
                About
              </NavLink>
              
              <NavLink 
                to="/services" 
                className={({isActive}) => 
                  isActive 
                    ? 'bg-gradient-to-r from-[#0a2540] to-teal-600 bg-clip-text text-transparent font-semibold border-b-2 border-teal-600 pb-0.5 text-sm' 
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-[#0a2540] hover:to-teal-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium text-sm'
                }
              >
                Services
              </NavLink>
              
              <NavLink 
                to="/gallery" 
                className={({isActive}) => 
                  isActive 
                    ? 'bg-gradient-to-r from-[#0a2540] to-teal-600 bg-clip-text text-transparent font-semibold border-b-2 border-teal-600 pb-0.5 text-sm' 
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-[#0a2540] hover:to-teal-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium text-sm'
                }
              >
                Gallery
              </NavLink>
              
              <NavLink 
                to="/testimonials" 
                className={({isActive}) => 
                  isActive 
                    ? 'bg-gradient-to-r from-[#0a2540] to-teal-600 bg-clip-text text-transparent font-semibold border-b-2 border-teal-600 pb-0.5 text-sm' 
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-[#0a2540] hover:to-teal-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium text-sm'
                }
              >
                Testimonials
              </NavLink>
              
              <NavLink 
                to="/contact" 
                className={({isActive}) => 
                  isActive 
                    ? 'bg-gradient-to-r from-[#0a2540] to-teal-600 bg-clip-text text-transparent font-semibold border-b-2 border-teal-600 pb-0.5 text-sm' 
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-[#0a2540] hover:to-teal-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium text-sm'
                }
              >
                Contact
              </NavLink>
            </nav>

            {/* Appointment Button with Animated Gradient - Smaller Button */}
            <Link 
              to="/appointments" 
              className="hidden lg:block"
            >
              <button className="bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] hover:via-cyan-500 text-white px-5 py-1.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 bg-[length:200%_200%] animate-gradient text-sm">
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                  />
                </svg>
                Book Appointment
              </button>
            </Link>

            {/* Mobile Menu Button with Gradient */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden text-2xl text-gray-700 focus:outline-none bg-gradient-to-r from-[#0a2540] to-teal-600 bg-clip-text text-transparent"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Mobile Menu with Gradient Background */}
          {isOpen && (
            <nav className="lg:hidden mt-3 pb-3 flex flex-col space-y-2 bg-gradient-to-br from-white via-gray-50 to-white rounded-xl p-3 shadow-lg">
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)} 
                className="text-gray-700 hover:bg-gradient-to-r hover:from-[#0a2540] hover:to-teal-600 hover:bg-clip-text hover:text-transparent py-1.5 transition font-medium text-sm"
              >
                Home
              </Link>
              
              <Link 
                to="/about" 
                onClick={() => setIsOpen(false)} 
                className="text-gray-700 hover:bg-gradient-to-r hover:from-[#0a2540] hover:to-teal-600 hover:bg-clip-text hover:text-transparent py-1.5 transition font-medium text-sm"
              >
                About
              </Link>
              
              <Link 
                to="/services" 
                onClick={() => setIsOpen(false)} 
                className="text-gray-700 hover:bg-gradient-to-r hover:from-[#0a2540] hover:to-teal-600 hover:bg-clip-text hover:text-transparent py-1.5 transition font-medium text-sm"
              >
                Services
              </Link>
              
              <Link 
                to="/gallery" 
                onClick={() => setIsOpen(false)} 
                className="text-gray-700 hover:bg-gradient-to-r hover:from-[#0a2540] hover:to-teal-600 hover:bg-clip-text hover:text-transparent py-1.5 transition font-medium text-sm"
              >
                Gallery
              </Link>
              
              <Link 
                to="/testimonials" 
                onClick={() => setIsOpen(false)} 
                className="text-gray-700 hover:bg-gradient-to-r hover:from-[#0a2540] hover:to-teal-600 hover:bg-clip-text hover:text-transparent py-1.5 transition font-medium text-sm"
              >
                Testimonials
              </Link>
              
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)} 
                className="text-gray-700 hover:bg-gradient-to-r hover:from-[#0a2540] hover:to-teal-600 hover:bg-clip-text hover:text-transparent py-1.5 transition font-medium text-sm"
              >
                Contact
              </Link>
              
              <Link 
                to="/appointments" 
                onClick={() => setIsOpen(false)}
              >
                <button className="bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] text-white px-5 py-1.5 rounded-full font-semibold w-full mt-1 transition-all duration-300 text-sm">
                  📅 Book Appointment
                </button>
              </Link>
            </nav>
          )}
        </div>
      </div>

      {/* Add global styles for animated gradient */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </header>
  )
}

export default Header
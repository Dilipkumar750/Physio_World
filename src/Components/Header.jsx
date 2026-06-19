import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from "../assets/bglogo.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  const floatAnimation = {
    y: [0, -4, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/gallery", label: "Gallery" },
    { to: "/testimonials", label: "Testimonials" },
    { to: "/contact", label: "Contact" }
  ]

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-2xl' : 'shadow-lg'
      }`}
    >
      {/* Top Bar with Vibrant Gradient */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] text-white py-1.5 text-sm shadow-lg relative overflow-hidden"
      >
        <motion.div 
          animate={floatAnimation}
          className="absolute inset-0 opacity-10"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-400 rounded-full blur-3xl"></div>
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-end items-center gap-4 sm:gap-6">
            {/* Phone Link */}
            <motion.a 
              href="tel:+917904818494" 
              whileHover={{ scale: 1.05, x: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 sm:gap-2 hover:text-cyan-200 transition font-medium group text-xs sm:text-sm"
            >
              <motion.svg 
                animate={pulseAnimation}
                className="w-3 h-3 sm:w-4 sm:h-4 group-hover:animate-pulse" 
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
              </motion.svg>
              <span className="xs:inline">+91 79048 18494</span>
            </motion.a>

            {/* Email Link */}
            <motion.a 
              href="mailto:info@physioworld.com" 
              whileHover={{ scale: 1.05, x: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 sm:gap-2 hover:text-cyan-200 transition font-medium group text-xs sm:text-sm"
            >
              <motion.svg 
                animate={pulseAnimation}
                className="w-3 h-3 sm:w-4 sm:h-4 group-hover:animate-pulse" 
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
              </motion.svg>
              <span className="hidden sm:inline">info@physioworld.com</span>
              <span className="inline sm:hidden">Email</span>
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={`bg-gradient-to-r from-white via-gray-50 to-white border-b border-gray-100 transition-shadow duration-300 ${
          scrolled ? 'shadow-2xl' : 'shadow-[0_8px_32px_-8px_rgba(0,0,0,0.15)]'
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4 py-1.5 sm:py-2">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Link 
                to="/" 
                className="flex items-center space-x-2 group"
              >
                <motion.img 
                  whileHover={{ rotate: [-2, 2, -2, 0] }}
                  transition={{ duration: 0.5 }}
                  src={logo} 
                  alt="PhysioWorld Logo" 
                  className="w-28 h-14 sm:w-32 sm:h-16 md:w-36 md:h-18 object-contain" 
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav 
              variants={navVariants}
              initial="hidden"
              animate="visible"
              className="hidden lg:flex space-x-4 xl:space-x-6"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <NavLink 
                    to={link.to} 
                    className={({isActive}) => 
                      isActive 
                        ? 'bg-gradient-to-r from-[#0a2540] to-teal-600 bg-clip-text text-transparent font-semibold border-b-2 border-teal-600 pb-0.5 text-sm relative' 
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-[#0a2540] hover:to-teal-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium text-sm relative'
                    }
                  >
                    {({isActive}) => (
                      <>
                        {link.label}
                        {isActive && (
                          <motion.span 
                            layoutId="underline"
                            className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0a2540] to-teal-600 rounded-full"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>

            {/* Appointment Button */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="hidden lg:block"
            >
              <Link to="/appointments">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] hover:via-cyan-500 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-1.5 sm:gap-2 bg-[length:200%_200%] animate-gradient text-xs sm:text-sm"
                >
                  <motion.svg 
                    animate={pulseAnimation}
                    className="w-3 h-3 sm:w-4 sm:h-4" 
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
                  </motion.svg>
                  Book Appointment
                </motion.button>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden text-2xl text-gray-700 focus:outline-none bg-gradient-to-r from-[#0a2540] to-teal-600 bg-clip-text text-transparent"
            >
              {isOpen ? '✕' : '☰'}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.nav 
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="lg:hidden mt-2 pb-3 flex flex-col space-y-1.5 bg-gradient-to-br from-white via-gray-50 to-white rounded-xl p-3 shadow-lg border border-gray-100"
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link 
                      to={link.to} 
                      onClick={() => setIsOpen(false)} 
                      className="text-gray-700 hover:bg-gradient-to-r hover:from-[#0a2540] hover:to-teal-600 hover:bg-clip-text hover:text-transparent py-1.5 transition font-medium text-sm block px-2 rounded-lg hover:bg-gray-50"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.3 }}
                >
                  <Link 
                    to="/appointments" 
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] text-white px-5 py-1.5 rounded-full font-semibold w-full mt-1 transition-all duration-300 text-sm"
                    >
                      📅 Book Appointment
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Global styles */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-pulse-custom {
          animation: pulse 2s ease-in-out infinite;
        }
        
        /* Responsive breakpoints */
        @media (max-width: 480px) {
          .xs\\:inline {
            display: inline;
          }
          .xs\\:hidden {
            display: none;
          }
        }
      `}</style>
    </motion.header>
  )
}

export default Header
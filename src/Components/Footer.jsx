import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, 
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaArrowRight,
  FaHeart, FaShieldAlt, FaFileAlt, FaWhatsapp
} from 'react-icons/fa';
import logo from "../assets/whitelogo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#0a1628] text-gray-300 pt-12 pb-6 relative overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-cyan-500/5 to-blue-500/5"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Brand Section - With Logo */}
          <div className="text-center sm:text-left">
            <div className="flex justify-center sm:justify-start mb-3">
              <img 
                src={logo} 
                alt="PhysioWorld Logo" 
                className="w-24 sm:w-28 md:w-32 h-auto object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed px-4 sm:px-0">
              Your trusted partner for pain-free living with expert physiotherapy care.
            </p>
            
            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start space-x-2 sm:space-x-3 mt-4">
              <a 
                href="https://www.facebook.com/physioworld.tn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 bg-[#1a365d] hover:bg-[#1877f2] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 hover:text-white" />
              </a>
              <a 
                href="https://www.instagram.com/physioworld.tn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 bg-[#1a365d] hover:bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 hover:text-white" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 bg-[#1a365d] hover:bg-[#1da1f2] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="Twitter"
              >
                <FaTwitter className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 hover:text-white" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 bg-[#1a365d] hover:bg-[#0a66c2] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 hover:text-white" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 bg-[#1a365d] hover:bg-[#ff0000] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="YouTube"
              >
                <FaYoutube className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold mb-3 pb-2 text-base sm:text-lg border-b border-teal-500/30 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-teal-400 transition flex items-center justify-center sm:justify-start gap-2 group text-sm sm:text-base">
                  <FaArrowRight className="text-teal-400 text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-4 group-hover:ml-0" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-teal-400 transition flex items-center justify-center sm:justify-start gap-2 group text-sm sm:text-base">
                  <FaArrowRight className="text-teal-400 text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-4 group-hover:ml-0" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">About</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-400 transition flex items-center justify-center sm:justify-start gap-2 group text-sm sm:text-base">
                  <FaArrowRight className="text-teal-400 text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-4 group-hover:ml-0" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Services</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-teal-400 transition flex items-center justify-center sm:justify-start gap-2 group text-sm sm:text-base">
                  <FaArrowRight className="text-teal-400 text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-4 group-hover:ml-0" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-teal-400 transition flex items-center justify-center sm:justify-start gap-2 group text-sm sm:text-base">
                  <FaArrowRight className="text-teal-400 text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-4 group-hover:ml-0" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Testimonials</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-teal-400 transition flex items-center justify-center sm:justify-start gap-2 group text-sm sm:text-base">
                  <FaArrowRight className="text-teal-400 text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-4 group-hover:ml-0" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold mb-3 pb-2 text-base sm:text-lg border-b border-teal-500/30 inline-block">
              Our Services
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 mt-3 sm:mt-4">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-400 transition text-xs sm:text-sm block text-center sm:text-left hover:translate-x-1 transition-all duration-300">
                  Neuro Rehabilitation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-400 transition text-xs sm:text-sm block text-center sm:text-left hover:translate-x-1 transition-all duration-300">
                  Sports Rehabilitation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-400 transition text-xs sm:text-sm block text-center sm:text-left hover:translate-x-1 transition-all duration-300">
                  Pain Management
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-400 transition text-xs sm:text-sm block text-center sm:text-left hover:translate-x-1 transition-all duration-300">
                  Pediatric Physiotherapy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-400 transition text-xs sm:text-sm block text-center sm:text-left hover:translate-x-1 transition-all duration-300">
                  Geriatric Physiotherapy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-400 transition text-xs sm:text-sm block text-center sm:text-left hover:translate-x-1 transition-all duration-300">
                  Stroke Rehabilitation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-400 transition text-xs sm:text-sm block text-center sm:text-left hover:translate-x-1 transition-all duration-300">
                  Home Visit Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold mb-3 pb-2 text-base sm:text-lg border-b border-teal-500/30 inline-block">
              Get in Touch
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 mt-3 sm:mt-4">
              <li className="flex items-start justify-center sm:justify-start gap-2 sm:gap-3 group">
                <FaMapMarkerAlt className="text-teal-400 text-base sm:text-lg mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:text-cyan-400" />
                <span className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-300 text-left leading-relaxed">
                  PHYSIO WORLD, Peravallur, No.109B, SRP Colony, Perambur, Chennai - 600082
                </span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 group">
                <FaPhoneAlt className="text-teal-400 text-xs sm:text-sm group-hover:scale-110 transition-transform duration-300 group-hover:text-cyan-400 flex-shrink-0" />
                <a href="tel:+917904818494" className="text-gray-400 hover:text-teal-400 transition duration-300 text-xs sm:text-sm">
                  +91 79048 18494
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 group">
                <FaWhatsapp className="text-green-400 text-xs sm:text-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <a href="https://wa.me/917904818494" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition duration-300 text-xs sm:text-sm">
                  WhatsApp: +91 79048 18494
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 group">
                <FaEnvelope className="text-teal-400 text-xs sm:text-sm group-hover:scale-110 transition-transform duration-300 group-hover:text-cyan-400 flex-shrink-0" />
                <a href="mailto:info@physioworld.com" className="text-gray-400 hover:text-teal-400 transition duration-300 text-xs sm:text-sm break-all">
                  info@physioworld.com
                </a>
              </li>
              <li className="flex items-start justify-center sm:justify-start gap-2 sm:gap-3 group">
                <FaClock className="text-teal-400 text-xs sm:text-sm mt-0.5 group-hover:scale-110 transition-transform duration-300 group-hover:text-cyan-400 flex-shrink-0" />
                <div className="text-gray-400 text-xs sm:text-sm text-left">
                  <div>Mon-Sat: 9AM - 8PM</div>
                  <div>Sun: 10AM - 2PM</div>
                </div>
              </li>
            </ul>

            {/* CTA Button */}
            <Link to="/contact">
              <button className="mt-4 sm:mt-6 w-full bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white px-4 py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                <span>📅</span>
                Book Appointment
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-teal-500/20 pt-5 sm:pt-6 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-gray-500 text-[10px] sm:text-xs">
              <span>© 2026 PhysioWorld.</span>
              <span>All rights reserved.</span>
              <FaHeart className="text-red-500 animate-pulse text-xs sm:text-sm" />
              <span>Designed by</span>
              <a 
                href="https://www.linkedin.com/in/dilip-kumar750" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-teal-400 hover:underline"
              >
                Dilipkumar
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
              <Link to="/privacy" className="text-gray-500 hover:text-teal-400 text-[10px] sm:text-xs transition duration-300 flex items-center gap-1">
                <FaShieldAlt className="text-[10px] sm:text-xs" />
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-teal-400 text-[10px] sm:text-xs transition duration-300 flex items-center gap-1">
                <FaFileAlt className="text-[10px] sm:text-xs" />
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
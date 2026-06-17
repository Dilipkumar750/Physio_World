import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, 
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaArrowRight,
  FaHeart, FaShieldAlt, FaFileAlt, FaSitemap, FaWhatsapp
} from 'react-icons/fa';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import logo from "../assets/whitelogo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0a2540] via-[#0d2f4f] to-[#0a2540] text-gray-300 pt-12 pb-6 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-blue-500/10 animate-pulse"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section - With Logo */}
          <div className="text-center sm:text-left">
            <div className="flex justify-center sm:justify-start mb-3">
              <img 
                src={logo} 
                alt="PhysioWorld Logo" 
                className="w-28 sm:w-32 h-auto object-contain mb-2"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed px-4 sm:px-0">
              Your trusted partner for pain-free living with expert physiotherapy care.
            </p>
            
            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start space-x-3 mt-4">
              <a 
                href="https://www.facebook.com/physioworld.tn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#0d2f4f] hover:bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>
              <a 
                href="https://www.instagram.com/physioworld.tn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#0d2f4f] hover:bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#0d2f4f] hover:bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="Twitter"
              >
                <FaTwitter className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#0d2f4f] hover:bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#0d2f4f] hover:bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="YouTube"
              >
                <FaYoutube className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold mb-4 pb-2 text-lg border-b border-teal-500/30 inline-block sm:inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3 mt-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-teal-400 transition flex items-center justify-center sm:justify-start gap-2 group">
                  <FaArrowRight className="text-teal-400 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-4 group-hover:ml-0" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-teal-400 transition flex items-center justify-center sm:justify-start gap-2 group">
                  <FaArrowRight className="text-teal-400 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-4 group-hover:ml-0" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">About</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-400 transition flex items-center justify-center sm:justify-start gap-2 group">
                  <FaArrowRight className="text-teal-400 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-4 group-hover:ml-0" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Services</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-teal-400 transition flex items-center justify-center sm:justify-start gap-2 group">
                  <FaArrowRight className="text-teal-400 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-4 group-hover:ml-0" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-teal-400 transition flex items-center justify-center sm:justify-start gap-2 group">
                  <FaArrowRight className="text-teal-400 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-4 group-hover:ml-0" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Testimonials</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-teal-400 transition flex items-center justify-center sm:justify-start gap-2 group">
                  <FaArrowRight className="text-teal-400 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-4 group-hover:ml-0" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold mb-4 pb-2 text-lg border-b border-teal-500/30 inline-block sm:inline-block">
              Our Services
            </h4>
            <ul className="space-y-2 mt-4">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-400 transition text-sm block text-center sm:text-left hover:translate-x-1 transition-all duration-300">
                  Neuro Rehabilitation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-400 transition text-sm block text-center sm:text-left hover:translate-x-1 transition-all duration-300">
                  Sports Rehabilitation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-400 transition text-sm block text-center sm:text-left hover:translate-x-1 transition-all duration-300">
                  Pain Management
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-400 transition text-sm block text-center sm:text-left hover:translate-x-1 transition-all duration-300">
                  Pediatric Physiotherapy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-400 transition text-sm block text-center sm:text-left hover:translate-x-1 transition-all duration-300">
                  Geriatric Physiotherapy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-400 transition text-sm block text-center sm:text-left hover:translate-x-1 transition-all duration-300">
                  Stroke Rehabilitation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-400 transition text-sm block text-center sm:text-left hover:translate-x-1 transition-all duration-300">
                  Home Visit Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold mb-4 pb-2 text-lg border-b border-teal-500/30 inline-block sm:inline-block">
              Get in Touch
            </h4>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start justify-center sm:justify-start gap-3 group cursor-pointer">
                <FaMapMarkerAlt className="text-teal-400 text-lg mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:text-cyan-400" />
                <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 text-left">
                  PHYSIO WORLD, Peravallur, No.109B, SRP Colony, Perambur, Chennai - 600082
                </span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3 group">
                <FaPhoneAlt className="text-teal-400 text-sm group-hover:scale-110 transition-transform duration-300 group-hover:text-cyan-400 flex-shrink-0" />
                <a href="tel:+917904818494" className="text-gray-400 hover:text-teal-400 transition duration-300 text-sm">
                  +91 79048 18494
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3 group">
                <FaWhatsapp className="text-green-400 text-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <a href="https://wa.me/917904818494" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition duration-300 text-sm">
                  WhatsApp: +91 79048 18494
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3 group">
                <FaEnvelope className="text-teal-400 text-sm group-hover:scale-110 transition-transform duration-300 group-hover:text-cyan-400 flex-shrink-0" />
                <a href="mailto:info@physioworld.com" className="text-gray-400 hover:text-teal-400 transition duration-300 text-sm break-all">
                  info@physioworld.com
                </a>
              </li>
              <li className="flex items-start justify-center sm:justify-start gap-3 group">
                <FaClock className="text-teal-400 text-sm mt-0.5 group-hover:scale-110 transition-transform duration-300 group-hover:text-cyan-400 flex-shrink-0" />
                <div className="text-gray-400 text-sm text-left">
                  <div>Mon-Sat: 9AM - 8PM</div>
                  <div>Sun: 10AM - 2PM</div>
                </div>
              </li>
            </ul>

            {/* CTA Button */}
            <Link to="/contact">
              <button className="mt-6 w-full bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] hover:via-cyan-500 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                <span>📅</span>
                Book Appointment
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-teal-500/20 pt-6 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-2 text-gray-500 text-xs sm:text-sm">
              <span>© 2026 PhysioWorld.</span>
              <span>All rights reserved.</span>
              <FaHeart className="text-red-500 animate-pulse" />
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
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link to="/privacy" className="text-gray-500 hover:text-teal-400 text-xs sm:text-sm transition duration-300 flex items-center gap-1">
                <FaShieldAlt className="text-xs" />
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-teal-400 text-xs sm:text-sm transition duration-300 flex items-center gap-1">
                <FaFileAlt className="text-xs" />
                Terms & Conditions
              </Link>
              <Link to="/sitemap" className="text-gray-500 hover:text-teal-400 text-xs sm:text-sm transition duration-300 flex items-center gap-1">
                <FaSitemap className="text-xs" />
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
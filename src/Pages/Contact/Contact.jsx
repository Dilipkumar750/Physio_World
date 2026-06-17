import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, 
  FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter,
  FaUser, FaCommentDots, FaPaperPlane, FaCheckCircle
} from 'react-icons/fa';
import logo from "../../assets/whitelogo.png";
import musculoskeletal from "../../assets/contact.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    message: '' 
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Contact Form Data:', formData);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const whatsappNumber = "917904818494";

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-16">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <FaCheckCircle className="text-white text-4xl" />
          </div>
          <h2 className="text-2xl font-bold text-[#0a2540] mb-2">Message Sent!</h2>
          <p className="text-gray-600 mb-4">Thank you {formData.name}!</p>
          <p className="text-gray-600 mb-6">We will get back to you shortly.</p>
          <Link to="/">
            <button className="bg-gradient-to-r from-[#0a2540] to-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Page Header with Logo */}
      <div className="bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] text-white py-8 mb-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-3">
            <img 
              src={logo} 
              alt="PhysioWorld Logo" 
              className="w-40 h-40 object-contain p-2"
            />
          </div>
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg text-teal-100">Get in touch with PhysioWorld for appointments and queries</p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#0a2540] to-teal-600 px-6 py-4">
              <h3 className="text-white text-xl font-semibold">Get in Touch</h3>
              <p className="text-teal-200 text-sm">We'd love to hear from you</p>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4 group cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <FaMapMarkerAlt className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0a2540]">Our Address</h4>
                  <p className="text-gray-600 text-sm">
                    PHYSIO WORLD, Peravallur, No.109B, SRP Colony, <br />
                    Perambur, Chennai, Tamil Nadu – 600082
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group hover:bg-gray-50 p-3 rounded-lg transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <FaPhoneAlt className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0a2540]">Phone Number</h4>
                  <a href="tel:+917904818494" className="text-gray-600 text-sm hover:text-teal-600 transition">+91 79048 18494</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 group hover:bg-gray-50 p-3 rounded-lg transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0a2540]">Email Address</h4>
                  <a href="mailto:info@physioworld.com" className="text-gray-600 text-sm hover:text-teal-600 transition">info@physioworld.com</a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 group hover:bg-gray-50 p-3 rounded-lg transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <FaClock className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0a2540]">Working Hours</h4>
                  <p className="text-gray-600 text-sm">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-600 text-sm">Sunday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            {/* WhatsApp & Social Section */}
            <div className="border-t border-gray-100 p-6 bg-gray-50">
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md w-full mb-4"
              >
                <FaWhatsapp className="text-xl" />
                Chat on WhatsApp
              </a>

              <div className="flex justify-center gap-4">
                <a href="https://www.facebook.com/physioworld.tn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#1877f2] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-md">
                  <FaFacebookF className="text-white" />
                </a>
                <a href="https://www.instagram.com/physioworld.tn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-md">
                  <FaInstagram className="text-white" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#1da1f2] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-md">
                  <FaTwitter className="text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#0a2540] to-teal-600 px-6 py-4">
              <h3 className="text-white text-xl font-semibold">Send us a Message</h3>
              <p className="text-teal-200 text-sm">We'll get back to you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              {/* Name Field */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your@email.com"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Phone Field */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaPhoneAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="9876543210"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaCommentDots className="absolute left-3 top-4 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your query or concern..."
                  ></textarea>
                </div>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] hover:via-cyan-500 text-white py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                Send Message
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#0a2540] to-teal-600 px-6 py-4">
            <h3 className="text-white text-xl font-semibold">Find Us Here</h3>
            <p className="text-teal-200 text-sm">Visit our clinic location</p>
          </div>
          <div className="p-2">
            <iframe 
              title="PhysioWorld Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.23456789!2d80.2248231!3d13.117196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52658b49141883%3A0x319f415bc66fc3b6!2sPHYSIO%20WORLD!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" 
              height="400" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
              className="rounded-lg"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
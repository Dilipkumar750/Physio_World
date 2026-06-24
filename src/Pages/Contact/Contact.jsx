import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock,
  FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter,
  FaUser, FaCommentDots, FaPaperPlane, FaCheckCircle,
  FaArrowRight, FaHeartbeat, FaStethoscope
} from 'react-icons/fa';
import logo from "../../assets/whitelogo.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const sendWhatsAppMessage = (data) => {
    const phoneNumber = '917904818494';

    // Format the message
    const message = `📩 *New Contact Form Submission!*

👤 *Contact Details:*
━━━━━━━━━━━━━━━━━
• Name: ${data.name}
• Phone: ${data.phone}
• Email: ${data.email}

💬 *Message:*
━━━━━━━━━━━━━━━━━
${data.message}

━━━━━━━━━━━━━━━━━
📅 *Submitted:* ${new Date().toLocaleString()}
📍 *Clinic:* PhysioWorld
📞 *Contact:* +91 79048 18494`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        // Send data to WhatsApp
        sendWhatsAppMessage(formData);

        // Show success message
        setIsSubmitted(true);

        // Reset form after delay
        setTimeout(() => {
          setIsSubmitted(false);
          setIsSubmitting(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
          });
        }, 3000);
      } catch (error) {
        console.error('Error sending message:', error);
        setIsSubmitting(false);
        alert('There was an error sending your message. Please try again or contact us directly.');
      }
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-12 sm:py-16 px-3 sm:px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md w-full text-center"
        >
          <motion.div
            animate={pulseAnimation}
            className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
          >
            <FaCheckCircle className="text-white text-3xl sm:text-4xl" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl sm:text-2xl font-bold text-[#0a2540] mb-1 sm:mb-2"
          >
            Message Sent!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-sm sm:text-base mb-1 sm:mb-2"
          >
            Thank you {formData.name}!
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6"
          >
            We've received your message via WhatsApp. We'll get back to you shortly.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-gradient-to-r from-[#0a2540] to-teal-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
              >
                Back to Home
              </motion.button>
            </Link>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-white" />
                Chat on WhatsApp
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-x-hidden">
      {/* Page Header with Logo - Animated */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] text-white py-8 sm:py-10 md:py-12 mb-6 sm:mb-8 relative overflow-hidden"
      >
        <div className="container mx-auto px-3 sm:px-4 text-center relative z-10">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mb-2 sm:mb-3"
          >
            <img
              src={logo}
              alt="PhysioWorld Logo"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain p-1 sm:p-2"
            />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm sm:text-base md:text-lg text-teal-100"
          >
            Get in touch with PhysioWorld for appointments and queries
          </motion.p>
        </div>
      </motion.div>

      <div className="container mx-auto px-3 sm:px-4 pb-8 sm:pb-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12"
        >
          {/* Contact Info Section - Animated */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden"
          >
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-[#0a2540] to-teal-600 px-4 sm:px-6 py-3 sm:py-4"
            >
              <h3 className="text-white text-lg sm:text-xl font-semibold">Get in Touch</h3>
              <p className="text-teal-200 text-xs sm:text-sm">We'd love to hear from you</p>
            </motion.div>

            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {/* Address */}
              <motion.div
                whileHover={{ x: 10, backgroundColor: "#f9fafb" }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-3 sm:gap-4 cursor-pointer p-2 sm:p-3 rounded-lg transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                >
                  <FaMapMarkerAlt className="text-white text-sm sm:text-lg" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-[#0a2540] text-sm sm:text-base">Our Address</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    PHYSIO WORLD, Peravallur, No.109B, SRP Colony, <br />
                    Perambur, Chennai, Tamil Nadu – 600082
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ x: 10, backgroundColor: "#f9fafb" }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 sm:gap-4 cursor-pointer p-2 sm:p-3 rounded-lg transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                >
                  <FaPhoneAlt className="text-white text-sm sm:text-lg" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-[#0a2540] text-sm sm:text-base">Phone Number</h4>
                  <a href="tel:+917904818494" className="text-gray-600 text-xs sm:text-sm hover:text-teal-600 transition">
                    +91 79048 18494
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                whileHover={{ x: 10, backgroundColor: "#f9fafb" }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 sm:gap-4 cursor-pointer p-2 sm:p-3 rounded-lg transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                >
                  <FaEnvelope className="text-white text-sm sm:text-lg" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-[#0a2540] text-sm sm:text-base">Email Address</h4>
                  <a href="mailto:info@physioworld.com" className="text-gray-600 text-xs sm:text-sm hover:text-teal-600 transition">
                    info@physioworld.com
                  </a>
                </div>
              </motion.div>

              {/* Working Hours */}
              <motion.div
                whileHover={{ x: 10, backgroundColor: "#f9fafb" }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-3 sm:gap-4 cursor-pointer p-2 sm:p-3 rounded-lg transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                >
                  <FaClock className="text-white text-sm sm:text-lg" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-[#0a2540] text-sm sm:text-base">Working Hours</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Monday - Saturday: 9:00 AM - 10:00 PM</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Sunday: 10:00 AM - 12:00 PM</p>
                </div>
              </motion.div>
            </div>

            {/* WhatsApp & Social Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="border-t border-gray-100 p-4 sm:p-6 bg-gray-50"
            >
              <motion.a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 shadow-md w-full text-sm sm:text-base"
              >
                <FaWhatsapp className="text-lg sm:text-xl" />
                Chat on WhatsApp
              </motion.a>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex justify-center gap-3 sm:gap-4 mt-3 sm:mt-4"
              >
                {[
                  { icon: <FaFacebookF />, color: "bg-[#1877f2]", link: "https://www.facebook.com/physioworld.tn" },
                  { icon: <FaInstagram />, color: "bg-gradient-to-r from-pink-500 to-orange-500", link: "https://www.instagram.com/physioworld.tn" },
                  { icon: <FaTwitter />, color: "bg-[#1da1f2]", link: "#" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className={`w-8 h-8 sm:w-10 sm:h-10 ${social.color} rounded-full flex items-center justify-center shadow-md transition-all duration-300`}
                  >
                    <span className="text-white text-sm sm:text-base">{social.icon}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form Section - Animated */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden"
          >
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-r from-[#0a2540] to-teal-600 px-4 sm:px-6 py-3 sm:py-4"
            >
              <h3 className="text-white text-lg sm:text-xl font-semibold">Send us a Message</h3>
              <p className="text-teal-200 text-xs sm:text-sm">We'll get back to you within 24 hours</p>
            </motion.div>

            <form onSubmit={handleSubmit} className="p-4 sm:p-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-3 sm:mb-4"
              >
                <label className="block text-gray-700 font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition text-xs sm:text-sm ${errors.name ? 'border-red-500' : 'border-gray-300'
                      } ${focusedField === 'name' ? 'ring-2 ring-teal-500' : ''}`}
                    placeholder="Enter your full name"
                  />
                  {focusedField === 'name' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -top-2 -right-2 w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs"
                    >
                      <FaCheckCircle />
                    </motion.div>
                  )}
                </div>
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-[10px] sm:text-sm mt-0.5 sm:mt-1"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>



              {/* Phone Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-3 sm:mb-4"
              >
                <label className="block text-gray-700 font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaPhoneAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition text-xs sm:text-sm ${errors.phone ? 'border-red-500' : 'border-gray-300'
                      } ${focusedField === 'phone' ? 'ring-2 ring-teal-500' : ''}`}
                    placeholder="9876543210"
                  />
                </div>
                <AnimatePresence>
                  {errors.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-[10px] sm:text-sm mt-0.5 sm:mt-1"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-3 sm:mb-4"
              >
                <label className="block text-gray-700 font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition text-xs sm:text-sm ${errors.email ? 'border-red-500' : 'border-gray-300'
                      } ${focusedField === 'email' ? 'ring-2 ring-teal-500' : ''}`}
                    placeholder="your@email.com"
                  />
                </div>
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-[10px] sm:text-sm mt-0.5 sm:mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-4 sm:mb-6"
              >
                <label className="block text-gray-700 font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaCommentDots className="absolute left-3 top-3 sm:top-4 text-gray-400 text-sm sm:text-base" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows="4"
                    className={`w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition text-xs sm:text-sm ${errors.message ? 'border-red-500' : 'border-gray-300'
                      } ${focusedField === 'message' ? 'ring-2 ring-teal-500' : ''}`}
                    placeholder="Tell us about your query or concern..."
                  ></textarea>
                </div>
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-[10px] sm:text-sm mt-0.5 sm:mt-1"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className={`w-full bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] hover:via-cyan-500 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaWhatsapp className="text-white text-sm sm:text-base" />
                    Send Message via WhatsApp
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaPaperPlane />
                    </motion.span>
                  </>
                )}
              </motion.button>

              <p className="text-center text-gray-500 text-[10px] sm:text-xs mt-3">
                <span className="text-red-500">*</span> Required fields • Your message will be sent via WhatsApp
              </p>
            </form>
          </motion.div>
        </motion.div>

        {/* Google Maps Section - Animated */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 sm:mt-10 md:mt-12 bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden"
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-r from-[#0a2540] to-teal-600 px-4 sm:px-6 py-3 sm:py-4"
          >
            <h3 className="text-white text-lg sm:text-xl font-semibold">Find Us Here</h3>
            <p className="text-teal-200 text-xs sm:text-sm">Visit our clinic location</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="p-1 sm:p-2"
          >
            <iframe
              title="PhysioWorld Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.23456789!2d80.2248231!3d13.117196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52658b49141883%3A0x319f415bc66fc3b6!2sPHYSIO%20WORLD!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
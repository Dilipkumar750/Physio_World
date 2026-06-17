import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  FaUser, FaEnvelope, FaPhoneAlt, FaCalendarAlt, FaClock, 
  FaCommentDots, FaStethoscope, FaCheckCircle, FaArrowRight, FaWhatsapp 
} from 'react-icons/fa'

const Appointments = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const services = [
    'Neuro Rehabilitation',
    'Stroke Rehabilitation',
    'Spinal Cord Injury Rehabilitation',
    'Sports & Orthopedic Rehabilitation',
    'Pain Management',
    'Migraine & Headache Therapy',
    'Foot Reflexology',
    'Sensory Integration Therapy',
    'Ergonomics Training Classes',
    'Fitness Training',
    'Pelvic Floor Rehabilitation',
    'Post-Surgical Rehabilitation',
    'Geriatric Physiotherapy',
    'Pediatric Physiotherapy'
  ]

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }
    
    if (!formData.service) {
      newErrors.service = 'Please select a service'
    }
    
    if (!formData.date) {
      newErrors.date = 'Please select a date'
    } else {
      const selectedDate = new Date(formData.date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        newErrors.date = 'Please select a future date'
      }
    }
    
    if (!formData.time) {
      newErrors.time = 'Please select a time'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      console.log('Appointment Details:', formData)
      setIsSubmitted(true)
      
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          time: '',
          message: ''
        })
      }, 3000)
    }
  }

  const today = new Date().toISOString().split('T')[0]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-16">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <FaCheckCircle className="text-white text-4xl" />
          </div>
          <h2 className="text-2xl font-bold text-[#0a2540] mb-2">Appointment Booked!</h2>
          <p className="text-gray-600 mb-4">Thank you {formData.name}!</p>
          <p className="text-gray-600 mb-6">We will contact you shortly to confirm your appointment.</p>
          <Link to="/">
            <button className="bg-gradient-to-r from-[#0a2540] to-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Page Header - Added Back */}
      <div className="bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] text-white py-12 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Book an Appointment</h1>
          <p className="text-lg text-teal-100">Schedule your visit with our expert physiotherapists</p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#0a2540] to-teal-600 px-6 py-4">
              <h2 className="text-white text-xl font-semibold">Appointment Form</h2>
              <p className="text-teal-200 text-sm">Please fill in all required fields</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name <span className="text-red-500">*</span>
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

                {/* Email Field (Optional) */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address <span className="text-gray-400 text-sm">(Optional)</span>
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

                {/* Phone Number Field */}
                <div>
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

                {/* Choose Service Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Select Service <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaStethoscope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition appearance-none bg-white ${
                        errors.service ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                </div>

                {/* Date Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={today}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition ${
                        errors.date ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                  </div>
                  {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                </div>

                {/* Time Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition appearance-none bg-white ${
                        errors.time ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select a time slot</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                  {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                </div>

                {/* Message Field - Full Width */}
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Additional Message <span className="text-gray-400 text-sm">(Optional)</span>
                  </label>
                  <div className="relative">
                    <FaCommentDots className="absolute left-3 top-4 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                      placeholder="Tell us about your condition or any special requirements..."
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] hover:via-cyan-500 text-white py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  Book Appointment
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <p className="text-center text-gray-500 text-sm mt-4">
                  <span className="text-red-500">*</span> Required fields
                </p>
              </div>
            </form>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-4 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaPhoneAlt className="text-white" />
              </div>
              <h3 className="font-semibold text-[#0a2540]">Call Us</h3>
              <a href="tel:+917904818494" className="text-gray-600 text-sm hover:text-teal-600 transition">+91 79048 18494</a>
            </div>
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-4 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaWhatsapp className="text-white text-xl" />
              </div>
              <h3 className="font-semibold text-[#0a2540]">WhatsApp</h3>
              <a href="https://wa.me/917904818494" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-teal-600 transition">Chat with us</a>
            </div>
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-4 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaClock className="text-white" />
              </div>
              <h3 className="font-semibold text-[#0a2540]">Working Hours</h3>
              <p className="text-gray-600 text-sm">Mon-Sat: 9AM - 8PM</p>
              <p className="text-gray-500 text-xs">Sun: 10AM - 2PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointments
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  FaBrain, FaHeartbeat, FaRunning, 
  FaChild, FaArrowRight, FaCheckCircle, FaStar, FaClock, FaPhoneAlt, FaCalendarCheck
} from 'react-icons/fa'

const SpecializedServices = () => {
  // Only showing 6 services on home page
  const services = [
    {
      id: 1,
      title: "Neuro Rehabilitation",
      icon: <FaBrain />,
      description: "Specialized care for patients with neurological conditions such as spinal cord injury, Parkinson's disease, multiple sclerosis, and nerve injuries.",
      focus: "Regain mobility, improve balance, and enhance independence.",
      methods: "Task-oriented training, gait training, and functional exercises.",
      color: "from-purple-500 to-pink-500",
      link: "/services"
    },
    {
      id: 2,
      title: "Stroke Rehabilitation",
      icon: <FaHeartbeat />,
      description: "Comprehensive program for patients recovering from stroke.",
      focus: "Restoring muscle strength, speech, balance, and independence.",
      methods: "Neuroplasticity-based therapy, task training, and occupational retraining.",
      color: "from-red-500 to-orange-500",
      link: "/services"
    },
    {
      id: 3,
      title: "Spinal Cord Injury Rehabilitation",
      icon: <FaBrain />,
      description: "Structured care for partial or complete spinal cord injuries.",
      focus: "Maximizing independence, preventing complications, and long-term wellness.",
      methods: "Strengthening, assistive device training, bladder & bowel care strategies.",
      color: "from-blue-500 to-cyan-500",
      link: "/services"
    },
    {
      id: 4,
      title: "Sports & Orthopedic Rehabilitation",
      icon: <FaRunning />,
      description: "Rehabilitation for athletes and orthopedic conditions.",
      focus: "ACL tears, rotator cuff injuries, tennis elbow, fractures, post-surgical recovery.",
      methods: "Manual therapy, strengthening programs, and advanced exercise therapy.",
      color: "from-green-500 to-emerald-500",
      link: "/services"
    },
    {
      id: 5,
      title: "Pain Management",
      icon: <FaBrain />,
      description: "Drug-free physiotherapy for acute and chronic pain.",
      focus: "Back pain, neck pain, frozen shoulder, arthritis, disc issues.",
      methods: "Electrotherapy (TENS, IFT, Ultrasound), posture correction, stretching, ergonomic advice.",
      color: "from-orange-500 to-red-500",
      link: "/services"
    },
    {
      id: 6,
      title: "Sensory Integration Therapy",
      icon: <FaChild />,
      description: "Special therapy for children with sensory processing difficulties (autism, ADHD, developmental delays).",
      focus: "Improving balance, coordination, and response to sensory input.",
      methods: "Play-based therapy and sensory-motor activities.",
      color: "from-pink-500 to-rose-500",
      link: "/services"
    }
  ]

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0a2540] to-teal-600 bg-clip-text text-transparent mb-4">
            Our Specialized Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive physiotherapy services tailored to your specific needs
          </p>
        </div>

        {/* Services Grid - Only 6 Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              {/* Service Header with Gradient */}
              <div className={`bg-gradient-to-r ${service.color} p-4 flex items-center gap-3`}>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white text-2xl">
                  {service.icon}
                </div>
                <h3 className="text-white font-bold text-lg flex-1">{service.title}</h3>
              </div>
              
              {/* Service Body */}
              <div className="p-5">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {service.description}
                </p>
                
                {/* Focus Section */}
                <div className="mb-3">
                  <h4 className="font-semibold text-[#0a2540] text-sm mb-1">🎯 Focus:</h4>
                  <p className="text-gray-500 text-xs line-clamp-2">{service.focus}</p>
                </div>
                
                {/* Methods Section */}
                <div className="mb-4">
                  <h4 className="font-semibold text-[#0a2540] text-sm mb-1">📋 Methods:</h4>
                  <p className="text-gray-500 text-xs line-clamp-2">{service.methods}</p>
                </div>
                
                {/* Read More Button - Redirects to Service Page */}
                <Link to={service.link}>
                  <button className={`w-full bg-gradient-to-r ${service.color} text-white py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group`}>
                    Read More
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Link to="/services">
            <button className="bg-gradient-to-r from-[#0a2540] to-teal-600 hover:from-teal-600 hover:to-[#0a2540] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
              View All Services
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#0a2540] to-teal-600 px-6 py-4">
            <h2 className="text-white text-2xl font-bold">Why Choose PhysioWorld?</h2>
            <p className="text-teal-100">Excellence in physiotherapy care</p>
          </div>
          
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 hover:shadow-lg rounded-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaStar className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-[#0a2540] mb-2">Expert Team</h3>
              <p className="text-gray-500 text-sm">Qualified and experienced physiotherapists</p>
            </div>
            
            <div className="text-center p-4 hover:shadow-lg rounded-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaCheckCircle className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-[#0a2540] mb-2">Modern Equipment</h3>
              <p className="text-gray-500 text-sm">State-of-the-art technology and tools</p>
            </div>
            
            <div className="text-center p-4 hover:shadow-lg rounded-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaClock className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-[#0a2540] mb-2">Personalized Care</h3>
              <p className="text-gray-500 text-sm">Tailored treatment plans for each patient</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Ready to Start Your Recovery?</h2>
          <p className="mb-6 text-teal-100">Book an appointment with our expert physiotherapists today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/appointments">
              <button className="bg-white text-[#0a2540] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <FaCalendarCheck />
                Book Appointment
              </button>
            </Link>
            <a href="tel:+917904818494">
              <button className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                <FaPhoneAlt />
                Call Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecializedServices
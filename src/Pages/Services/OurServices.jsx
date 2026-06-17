import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  FaBrain, FaHeartbeat, FaRunning, 
  FaChild, FaUserMd, FaHandHoldingHeart, FaDumbbell,
  FaFemale, FaBaby, FaUserFriends, FaCalendarCheck, FaArrowRight,
  FaCheckCircle, FaStar, FaClock, FaSearch,
  FaRegSnowflake, FaRegSmile, FaHome, FaBolt, FaShieldAlt
} from 'react-icons/fa'
import logo from "../../assets/bglogo.png"
import HealthAndWellness from './Healthandwellness'

const OurServices = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'neurology', name: 'Neurology' },
    { id: 'orthopedic', name: 'Orthopedic & Sports' },
    { id: 'pain', name: 'Pain Management' },
    { id: 'special', name: 'Special Therapies' },
    { id: 'fitness', name: 'Fitness & Wellness' }
  ]

  const services = [
    // NEUROLOGY
    {
      id: 1,
      title: "Neuro Rehabilitation",
      category: "neurology",
      icon: <FaBrain />,
      description: "Specialized care for patients with neurological conditions such as spinal cord injury, Parkinson's disease, multiple sclerosis, and nerve injuries.",
      focus: "Regain mobility, improve balance, and enhance independence.",
      methods: "Task-oriented training, gait training, and functional exercises.",
      color: "from-purple-500 to-pink-500",
      duration: "45-60 mins",
    },
    {
      id: 2,
      title: "Stroke Rehabilitation",
      category: "neurology",
      icon: <FaHeartbeat />,
      description: "Comprehensive program for patients recovering from stroke.",
      focus: "Restoring muscle strength, speech, balance, and independence.",
      methods: "Neuroplasticity-based therapy, task training, and occupational retraining.",
      color: "from-red-500 to-orange-500",
      duration: "45-60 mins",
    },
    {
      id: 3,
      title: "Spinal Cord Injury Rehabilitation",
      category: "neurology",
      icon: <FaBrain />,
      description: "Structured care for partial or complete spinal cord injuries.",
      focus: "Maximizing independence, preventing complications, and long-term wellness.",
      methods: "Strengthening, assistive device training, bladder & bowel care strategies.",
      color: "from-blue-500 to-cyan-500",
      duration: "60 mins",
    },

    // ORTHOPEDIC & SPORTS
    {
      id: 4,
      title: "Orthopedic Rehabilitation",
      category: "orthopedic",
      icon: <FaRunning />,
      description: "Comprehensive care for back pain, neck pain, arthritis, frozen shoulder, knee pain & mobility restoration.",
      focus: "Pain relief, joint mobility, and functional independence.",
      methods: "Manual therapy, therapeutic exercises, and joint mobilization.",
      color: "from-green-500 to-emerald-500",
      duration: "45-60 mins",
    },
    {
      id: 5,
      title: "Sports Injury Recovery",
      category: "orthopedic",
      icon: <FaDumbbell />,
      description: "Muscle strain, ligament injury, rehabilitation & performance-focused recovery.",
      focus: "Return to sport safely, prevent re-injury, enhance performance.",
      methods: "Sport-specific training, strength conditioning, and agility drills.",
      color: "from-emerald-500 to-teal-500",
      duration: "45-60 mins",
    },
    {
      id: 6,
      title: "Post-Surgical Rehabilitation",
      category: "orthopedic",
      icon: <FaCalendarCheck />,
      description: "Structured recovery programs after surgeries and fractures.",
      focus: "Pain relief, regaining movement, and building strength.",
      methods: "Progressive exercise therapy and post-surgery care.",
      color: "from-blue-500 to-teal-500",
      duration: "45-60 mins",
    },

    // PAIN MANAGEMENT
    {
      id: 7,
      title: "Pain Management Therapy",
      category: "pain",
      icon: <FaBrain />,
      description: "Evidence-based techniques for pain reduction and functional improvement.",
      focus: "Back pain, neck pain, frozen shoulder, arthritis, disc issues.",
      methods: "Electrotherapy (TENS, IFT, Ultrasound), posture correction, stretching, ergonomic advice.",
      color: "from-orange-500 to-red-500",
      duration: "30-45 mins",
    },
    {
      id: 8,
      title: "Migraine & Headache Therapy",
      category: "pain",
      icon: <FaRegSnowflake />,
      description: "Targeted physiotherapy to reduce migraine severity and recurrence.",
      focus: "Neck relaxation, posture correction, and lifestyle management.",
      methods: "Manual therapy, stress relief exercises, and trigger point release.",
      color: "from-indigo-500 to-purple-500",
      duration: "45 mins",
    },

    // SPECIAL THERAPIES
    {
      id: 9,
      title: "Foot Reflexology",
      category: "special",
      icon: <FaHandHoldingHeart />,
      description: "Relaxation therapy through pressure points on the feet.",
      focus: "Improves circulation, reduces stress, balances energy, promotes overall wellness.",
      methods: "Pressure point stimulation and holistic therapy.",
      color: "from-yellow-500 to-orange-500",
      duration: "30-45 mins",
    },
    {
      id: 10,
      title: "Sensory Integration Therapy",
      category: "special",
      icon: <FaChild />,
      description: "Special therapy for children with sensory processing difficulties (autism, ADHD, developmental delays).",
      focus: "Improving balance, coordination, and response to sensory input.",
      methods: "Play-based therapy and sensory-motor activities.",
      color: "from-pink-500 to-rose-500",
      duration: "45-60 mins",
    },
    {
      id: 11,
      title: "Pelvic Floor Rehabilitation",
      category: "special",
      icon: <FaFemale />,
      description: "Specialized therapy for men and women with pelvic floor dysfunction.",
      focus: "Strengthening pelvic muscles, improving bladder control, and restoring pelvic health.",
      methods: "Kegel training, biofeedback, and guided physiotherapy exercises.",
      color: "from-purple-500 to-indigo-500",
      duration: "45 mins",
    },
    {
      id: 12,
      title: "Geriatric Physiotherapy (Elderly Care)",
      category: "special",
      icon: <FaUserFriends />,
      description: "Physiotherapy for older adults to maintain independence.",
      focus: "Improving mobility, reducing stiffness, preventing falls, and managing arthritis/osteoporosis.",
      methods: "Balance training, mobility exercises, and strengthening.",
      color: "from-slate-500 to-gray-500",
      duration: "45-60 mins",
    },
    {
      id: 13,
      title: "Pediatric Physiotherapy",
      category: "special",
      icon: <FaBaby />,
      description: "Therapies for children with developmental and neurological issues.",
      focus: "Improving motor skills, coordination, and achieving milestones.",
      methods: "Play-based therapy, gait training, and motor skill development.",
      color: "from-cyan-500 to-blue-500",
      duration: "45 mins",
    },

    // FITNESS & WELLNESS
    {
      id: 14,
      title: "Fitness Training (Male & Female)",
      category: "fitness",
      icon: <FaDumbbell />,
      description: "Customized fitness programs for overall health and wellness.",
      focus: "Strength training, flexibility, weight management, and endurance.",
      methods: "Physiotherapist-supervised workouts tailored for both men and women.",
      color: "from-emerald-500 to-green-500",
      duration: "45-60 mins",
    },
    {
      id: 15,
      title: "Ergonomics Training Classes",
      category: "fitness",
      icon: <FaUserMd />,
      description: "Workplace and lifestyle ergonomics to prevent pain and injuries.",
      focus: "Correct sitting posture, workstation setup, lifting techniques, and daily activity modifications.",
      methods: "Posture analysis, workstation correction, and preventive strategies.",
      color: "from-teal-500 to-cyan-500",
      duration: "60 mins",
    },
    {
      id: 16,
      title: "Home Visit Physiotherapy",
      category: "fitness",
      icon: <FaHome />,
      description: "Professional physiotherapy treatment in the comfort of your home.",
      focus: "Convenient care for elderly, post-surgical, or mobility-limited patients.",
      methods: "Personalized home-based exercises, manual therapy, and functional training.",
      color: "from-amber-500 to-orange-500",
      duration: "45-60 mins",
    }
  ]

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Premium highlights data
  const premiumHighlights = [
    { icon: <FaCheckCircle />, title: "Personalized Treatment Plans", color: "from-teal-500 to-cyan-500" },
    { icon: <FaHome />, title: "Professional Home Visit Care", color: "from-blue-500 to-indigo-500" },
    { icon: <FaBolt />, title: "Evidence-Based Physiotherapy", color: "from-purple-500 to-pink-500" },
    { icon: <FaUserMd />, title: "Patient-Focused Rehabilitation", color: "from-green-500 to-emerald-500" },
    { icon: <FaStar />, title: "Modern Therapy Techniques", color: "from-orange-500 to-red-500" },
    { icon: <FaShieldAlt />, title: "Trusted Recovery Support", color: "from-cyan-500 to-blue-500" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] text-white py-12 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Our Services</h1>
          <p className="text-lg text-teal-100">Comprehensive physiotherapy care for all your needs</p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-[#0a2540] to-teal-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-bold text-[#0a2540]">{filteredServices.length}</span> services
          </p>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
            <FaRegSmile className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
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
                  <div className="mb-3">
                    <h4 className="font-semibold text-[#0a2540] text-sm mb-1">📋 Methods:</h4>
                    <p className="text-gray-500 text-xs line-clamp-2">{service.methods}</p>
                  </div>

                  {/* Duration */}
                  <div className="flex justify-between items-center mb-4 pt-2 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-400">Duration</p>
                      <p className="text-sm font-semibold text-[#0a2540]">{service.duration}</p>
                    </div>
                  </div>
                  
                  {/* Book Button */}
                  <Link to="/appointments">
                    <button className={`w-full bg-gradient-to-r ${service.color} text-white py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group`}>
                      Book Appointment
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

   

        {/* HealthAndWellness Component */}
        <HealthAndWellness />
      </div>
    </div>
  )
}

export default OurServices
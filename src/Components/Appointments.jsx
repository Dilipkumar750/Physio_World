import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  FaUser, FaEnvelope, FaPhoneAlt, FaCalendarAlt, FaClock, 
  FaCommentDots, FaStethoscope, FaCheckCircle, FaArrowRight, FaWhatsapp,
  FaBone, FaRunning, FaBrain, FaHeartbeat, FaBaby, FaChild,
  FaFemale, FaHome, FaUserFriends, FaDumbbell, FaUserMd,
  FaRegSnowflake, FaCalendarCheck, FaWalking, FaInfoCircle
} from 'react-icons/fa'

// Import all service images
import acl from '../assets/services/ACL.jpg'
import chronicPain from '../assets/services/chronic-pain.jpg'
import chronicPain2 from '../assets/services/Chronic-Pain2.jpg'
import ergonomics from '../assets/services/ergonomics.jpg'
import fitnessTraining from '../assets/services/FitnessTraining.jpg'
import homecare from '../assets/services/homecare.png'
import nerve from '../assets/services/nerve.jpg'
import neuroRehabilitation from '../assets/services/neuro-rehabilitation.jpg'
import parkinson from '../assets/services/parkinson.jpg'
import pediatric from '../assets/services/pediatric.webp'
import pelvic from '../assets/services/pelvic.webp'
import postFracture from '../assets/services/Post-fracture.jpg'
import postSurgical from '../assets/services/post-surgical.webp'
import postural from '../assets/services/postural.jpg'
import sensory from '../assets/services/sensory.webp'
import spinal from '../assets/services/spinal.jpg'
import sportsInjuries from '../assets/services/sportsinjuries.jpg'
import stroke from '../assets/services/stroke.jpg'
import orthopedicImg from '../assets/services/orthopedic.jpg'
import geriatric from '../assets/services/geriatric.jpg'
const Appointments = () => {
  const location = useLocation()
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
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Service details mapping with images
  const serviceDetails = {
    'Orthopedic Rehabilitation': {
      icon: <FaBone className="text-2xl sm:text-3xl text-teal-600" />,
      image: orthopedicImg,
      brief: 'Expert care for back pain, neck pain, arthritis, frozen shoulder & knee pain.',
      description: 'Comprehensive care for back pain, neck pain, arthritis, frozen shoulder, knee pain & mobility restoration.',
      focus: 'Pain relief, joint mobility, and functional independence.',
      methods: 'Manual therapy, therapeutic exercises, and joint mobilization.',
      color: 'from-green-500 to-emerald-500',
      category: 'Orthopedic'
    },
    'Sports Injury Recovery': {
      icon: <FaRunning className="text-2xl sm:text-3xl text-teal-600" />,
      image: sportsInjuries,
      brief: 'Specialized rehab for sports injuries including ACL tears, muscle strains & ligament injuries.',
      description: 'Specialized rehabilitation for sports injuries including ACL tears, muscle strains, ligament injuries, and performance-focused recovery.',
      focus: 'Return to sport safely, prevent re-injury, enhance athletic performance.',
      methods: 'Sport-specific training, strength conditioning, agility drills, and ACL protocols.',
      color: 'from-emerald-500 to-teal-500',
      category: 'Sports'
    },
    'ACL Tear Rehabilitation': {
      icon: <FaRunning className="text-2xl sm:text-3xl text-teal-600" />,
      image: acl,
      brief: 'Complete ACL injury management from pre-surgery to full return to sport.',
      description: 'Comprehensive ACL injury management from pre-surgery to full return to sport.',
      focus: 'Restoring knee stability, muscle strength, and confident movement.',
      methods: 'Progressive strengthening, balance training, and sports-specific drills.',
      color: 'from-teal-500 to-cyan-500',
      category: 'Sports'
    },
    'Post-Surgical Rehabilitation': {
      icon: <FaCalendarCheck className="text-2xl sm:text-3xl text-teal-600" />,
      image: postSurgical,
      brief: 'Structured recovery programs after orthopedic surgeries, fractures & joint replacements.',
      description: 'Structured recovery programs after orthopedic surgeries, fractures, and joint replacements.',
      focus: 'Pain relief, regaining movement, building strength, and early functional recovery.',
      methods: 'Progressive exercise therapy, scar management, and post-surgery care protocols.',
      color: 'from-blue-500 to-teal-500',
      category: 'Post-Surgical'
    },
    'Post-Fracture Rehabilitation': {
      icon: <FaBone className="text-2xl sm:text-3xl text-teal-600" />,
      image: postFracture,
      brief: 'Specialized care after fractures to restore full function and mobility.',
      description: 'Specialized care after fractures to restore full function and mobility.',
      focus: 'Bone healing support, joint mobility, and muscle strengthening.',
      methods: 'Graded exercise program, joint mobilization, and functional training.',
      color: 'from-indigo-500 to-blue-500',
      category: 'Post-Surgical'
    },
    'Pain Management Therapy': {
      icon: <FaBrain className="text-2xl sm:text-3xl text-teal-600" />,
      image: chronicPain,
      brief: 'Evidence-based techniques for chronic & acute pain reduction and functional improvement.',
      description: 'Evidence-based techniques for pain reduction and functional improvement in chronic and acute conditions.',
      focus: 'Back pain, neck pain, frozen shoulder, arthritis, disc issues, and nerve pain.',
      methods: 'Electrotherapy (TENS, IFT, Ultrasound), posture correction, stretching, and ergonomic advice.',
      color: 'from-orange-500 to-red-500',
      category: 'Pain Management'
    },
    'Chronic Pain Management': {
      icon: <FaRegSnowflake className="text-2xl sm:text-3xl text-teal-600" />,
      image: chronicPain2,
      brief: 'Long-term management strategies for persistent pain conditions.',
      description: 'Long-term management strategies for persistent pain conditions.',
      focus: 'Pain reduction, improved function, and better quality of life.',
      methods: 'Multimodal approach including manual therapy, exercise, and pain education.',
      color: 'from-red-500 to-rose-500',
      category: 'Pain Management'
    },
    'Geriatric Physiotherapy (Elderly Care)': {
      icon: <FaUserFriends className="text-2xl sm:text-3xl text-teal-600" />,
      image: geriatric,
      brief: 'Specialized physiotherapy for older adults to maintain independence and mobility.',
      description: 'Specialized physiotherapy for older adults to maintain independence, mobility, and quality of life.',
      focus: 'Improving mobility, reducing stiffness, preventing falls, and managing arthritis/osteoporosis.',
      methods: 'Balance training, mobility exercises, strengthening, and fall prevention strategies.',
      color: 'from-slate-500 to-gray-500',
      category: 'Geriatric'
    },
    'Neuro Rehabilitation': {
      icon: <FaBrain className="text-2xl sm:text-3xl text-teal-600" />,
      image: neuroRehabilitation,
      brief: 'Specialized care for neurological conditions affecting movement, balance & function.',
      description: 'Specialized care for patients with neurological conditions affecting movement, balance, and function.',
      focus: 'Regain mobility, improve balance, and enhance independence.',
      methods: 'Task-oriented training, gait training, and functional exercises.',
      color: 'from-purple-500 to-pink-500',
      category: 'Neurology'
    },
    'Stroke Rehabilitation': {
      icon: <FaHeartbeat className="text-2xl sm:text-3xl text-teal-600" />,
      image: stroke,
      brief: 'Comprehensive program for stroke recovery to regain independence and strength.',
      description: 'Comprehensive program for patients recovering from stroke to regain independence.',
      focus: 'Restoring muscle strength, speech, balance, and daily living skills.',
      methods: 'Neuroplasticity-based therapy, task training, and occupational retraining.',
      color: 'from-red-500 to-orange-500',
      category: 'Neurology'
    },
    "Parkinson's Disease Rehabilitation": {
      icon: <FaWalking className="text-2xl sm:text-3xl text-teal-600" />,
      image: parkinson,
      brief: 'Specialized therapy for Parkinson\'s to manage symptoms and improve quality of life.',
      description: 'Specialized therapy for Parkinson\'s patients to manage symptoms and improve quality of life.',
      focus: 'Improving gait, balance, flexibility, and reducing rigidity.',
      methods: 'LSVT Big therapy, balance training, and functional mobility exercises.',
      color: 'from-yellow-500 to-orange-500',
      category: 'Neurology'
    },
    'Spinal Cord Injury Rehabilitation': {
      icon: <FaRunning className="text-2xl sm:text-3xl text-teal-600" />,
      image: spinal,
      brief: 'Structured care for spinal cord injuries to maximize functional independence.',
      description: 'Structured care for partial or complete spinal cord injuries to maximize functional independence.',
      focus: 'Maximizing independence, preventing complications, and long-term wellness.',
      methods: 'Strengthening, assistive device training, and comprehensive care strategies.',
      color: 'from-blue-500 to-cyan-500',
      category: 'Neurology'
    },
    'Nerve Injury Rehabilitation': {
      icon: <FaHeartbeat className="text-2xl sm:text-3xl text-teal-600" />,
      image: nerve,
      brief: 'Specialized rehabilitation for peripheral nerve injuries and neuropathies.',
      description: 'Specialized rehabilitation for peripheral nerve injuries and neuropathies.',
      focus: 'Nerve regeneration support, sensory recovery, and functional restoration.',
      methods: 'Nerve gliding exercises, sensory re-education, and strengthening protocols.',
      color: 'from-indigo-500 to-purple-500',
      category: 'Neurology'
    },
    'Pediatric Physiotherapy': {
      icon: <FaBaby className="text-2xl sm:text-3xl text-teal-600" />,
      image: pediatric,
      brief: 'Therapies for children with developmental, neurological & musculoskeletal issues.',
      description: 'Therapies for children with developmental, neurological, and musculoskeletal issues.',
      focus: 'Improving motor skills, coordination, and achieving developmental milestones.',
      methods: 'Play-based therapy, gait training, and motor skill development activities.',
      color: 'from-cyan-500 to-blue-500',
      category: 'Pediatric'
    },
    'Sensory Integration Therapy': {
      icon: <FaChild className="text-2xl sm:text-3xl text-teal-600" />,
      image: sensory,
      brief: 'Special therapy for children with sensory processing difficulties including autism & ADHD.',
      description: 'Special therapy for children with sensory processing difficulties including autism, ADHD, and developmental delays.',
      focus: 'Improving balance, coordination, and response to sensory input.',
      methods: 'Play-based therapy, sensory-motor activities, and vestibular training.',
      color: 'from-pink-500 to-rose-500',
      category: 'Sensory'
    },
    'Ergonomics Training Classes': {
      icon: <FaUserMd className="text-2xl sm:text-3xl text-teal-600" />,
      image: ergonomics,
      brief: 'Workplace & lifestyle ergonomics to prevent pain, injuries & improve daily function.',
      description: 'Workplace and lifestyle ergonomics to prevent pain, injuries, and improve daily function.',
      focus: 'Correct sitting posture, workstation setup, lifting techniques, and daily activity modifications.',
      methods: 'Posture analysis, workstation correction, and preventive strategies.',
      color: 'from-teal-500 to-cyan-500',
      category: 'Fitness'
    },
    'Postural Correction & Training': {
      icon: <FaUserMd className="text-2xl sm:text-3xl text-teal-600" />,
      image: postural,
      brief: 'Comprehensive assessment and correction of postural imbalances.',
      description: 'Comprehensive assessment and correction of postural imbalances.',
      focus: 'Correcting poor posture, reducing pain, and preventing future issues.',
      methods: 'Posture assessment, corrective exercises, and lifestyle modifications.',
      color: 'from-cyan-500 to-blue-500',
      category: 'Fitness'
    },
    'Fitness Training (Male & Female)': {
      icon: <FaDumbbell className="text-2xl sm:text-3xl text-teal-600" />,
      image: fitnessTraining,
      brief: 'Customized fitness programs for overall health, strength & wellness for men & women.',
      description: 'Customized fitness programs for overall health, strength, and wellness for both men and women.',
      focus: 'Strength training, flexibility, weight management, and endurance improvement.',
      methods: 'Physiotherapist-supervised workouts tailored for individual goals.',
      color: 'from-emerald-500 to-green-500',
      category: 'Fitness'
    },
    'Home Visit Physiotherapy': {
      icon: <FaHome className="text-2xl sm:text-3xl text-teal-600" />,
      image: homecare,
      brief: 'Professional physiotherapy treatment in the comfort of your home for convenience.',
      description: 'Professional physiotherapy treatment in the comfort of your home for maximum convenience.',
      focus: 'Convenient care for elderly, post-surgical, or mobility-limited patients.',
      methods: 'Personalized home-based exercises, manual therapy, and functional training.',
      color: 'from-amber-500 to-orange-500',
      category: 'Home Care'
    },
    'Pelvic Floor Rehabilitation': {
      icon: <FaFemale className="text-2xl sm:text-3xl text-teal-600" />,
      image: pelvic,
      brief: 'Specialized therapy for men & women with pelvic floor dysfunction.',
      description: 'Specialized therapy for men and women with pelvic floor dysfunction and related issues.',
      focus: 'Strengthening pelvic muscles, improving bladder control, and restoring pelvic health.',
      methods: 'Kegel training, biofeedback, and guided physiotherapy exercises.',
      color: 'from-purple-500 to-indigo-500',
      category: 'Special'
    }
  }

  // Get service from URL query parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const serviceParam = params.get('service')
    if (serviceParam && serviceDetails[serviceParam]) {
      setFormData(prev => ({ ...prev, service: serviceParam }))
    }
  }, [location.search])

  const services = Object.keys(serviceDetails)

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

  const sendWhatsAppMessage = (data) => {
    const phoneNumber = '917904818494'
    
    const message = `🆕 *New Appointment Booking!*

👤 *Patient Details:*
━━━━━━━━━━━━━━━━━
• Name: ${data.name}
• Phone: ${data.phone}
• Email: ${data.email || 'Not provided'}

📋 *Appointment Details:*
━━━━━━━━━━━━━━━━━
• Service: ${data.service}
• Date: ${data.date}
• Time: ${data.time}

💬 *Message:*
${data.message || 'No additional message'}

━━━━━━━━━━━━━━━━━
📍 *Clinic:* Physiotherapy Clinic
📞 *Contact:* +91 79048 18494`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsSubmitting(true)
      
      try {
        sendWhatsAppMessage(formData)
        setIsSubmitted(true)
        
        setTimeout(() => {
          setIsSubmitted(false)
          setIsSubmitting(false)
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
      } catch (error) {
        console.error('Error sending appointment:', error)
        setIsSubmitting(false)
        alert('There was an error booking your appointment. Please try again or contact us directly.')
      }
    }
  }

  const today = new Date().toISOString().split('T')[0]
  const selectedServiceDetails = serviceDetails[formData.service]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-12 sm:py-16 px-3 sm:px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-bounce">
            <FaCheckCircle className="text-white text-3xl sm:text-4xl" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0a2540] mb-1 sm:mb-2">Appointment Booked!</h2>
          <p className="text-gray-600 text-sm sm:text-base mb-1 sm:mb-2">Thank you {formData.name}!</p>
          <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">We've sent your appointment details via WhatsApp.</p>
          <div className="bg-teal-50 rounded-lg p-3 mb-3 sm:mb-4 text-left">
            <p className="text-xs sm:text-sm text-gray-600">
              <span className="font-semibold">📋 Service:</span> {formData.service}
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              <span className="font-semibold">📅 Date:</span> {formData.date}
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              <span className="font-semibold">🕐 Time:</span> {formData.time}
            </p>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">We will contact you shortly to confirm your appointment.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/">
              <button className="w-full sm:w-auto bg-gradient-to-r from-[#0a2540] to-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 text-sm sm:text-base">
                Back to Home
              </button>
            </Link>
            <a 
              href={`https://wa.me/917904818494`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                <FaWhatsapp className="text-white" />
                Chat with us
              </button>
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Page Header - Responsive */}
      <div className="bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] text-white py-8 sm:py-10 md:py-12 mb-6 sm:mb-8">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">Book an Appointment</h1>
          <p className="text-sm sm:text-base md:text-lg text-teal-100">Schedule your visit with our expert physiotherapists</p>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            {/* LEFT SIDE - Service Details */}
            <div className="lg:col-span-2">
              {selectedServiceDetails ? (
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden lg:sticky lg:top-24">
                  {/* Header with Image */}
                  <div className="relative w-full h-80 sm:h-56 md:h-64 lg:h-80 overflow-hidden bg-gray-200">
                    <img 
                      src={selectedServiceDetails.image} 
                      alt={formData.service}
                      className="w-full h-full object-fit object-center"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300/14b8a6/ffffff?text=Physiotherapy'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                      <span className="text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 bg-teal-500/80 rounded-full inline-block mb-1 sm:mb-2">
                        {selectedServiceDetails.category}
                      </span>
                      <h2 className="text-base sm:text-lg md:text-xl font-bold leading-tight">{formData.service}</h2>
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 md:p-5 space-y-3 sm:space-y-4">
                    {/* Brief */}
                    <div className="bg-teal-50 rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-teal-100">
                      <p className="text-gray-700 text-xs sm:text-sm font-medium">
                        {selectedServiceDetails.brief}
                      </p>
                    </div>

                    {/* Description */}
                    <div>
                      <h3 className="font-semibold text-[#0a2540] flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2 text-xs sm:text-sm">
                        <FaInfoCircle className="text-teal-600" />
                        About This Service
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {selectedServiceDetails.description}
                      </p>
                    </div>

                    {/* Focus */}
                    <div className="bg-gray-50 rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-gray-200">
                      <h4 className="font-semibold text-[#0a2540] text-xs sm:text-sm mb-0.5 sm:mb-1">🎯 Focus</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">{selectedServiceDetails.focus}</p>
                    </div>

                    {/* Methods */}
                    <div className="bg-gray-50 rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-gray-200">
                      <h4 className="font-semibold text-[#0a2540] text-xs sm:text-sm mb-0.5 sm:mb-1">📋 Methods</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">{selectedServiceDetails.methods}</p>
                    </div>

                    {/* Change Service Button */}
                    <button
                      onClick={() => setFormData(prev => ({ ...prev, service: '' }))}
                      className="w-full text-center text-xs sm:text-sm text-teal-600 hover:text-teal-700 font-medium py-1.5 sm:py-2 border border-teal-200 rounded-lg hover:bg-teal-50 transition"
                    >
                      ← Change Service
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 text-center lg:sticky lg:top-24">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <FaStethoscope className="text-2xl sm:text-3xl text-gray-400" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#0a2540] mb-1 sm:mb-2">Select a Service</h3>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    Choose a service from the dropdown below to see details here
                  </p>
                </div>
              )}
            </div>

            {/* RIGHT SIDE - Booking Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-[#0a2540] to-teal-600 px-4 sm:px-6 py-3 sm:py-4">
                  <h2 className="text-white text-lg sm:text-xl font-semibold">Appointment Form</h2>
                  <p className="text-teal-200 text-xs sm:text-sm">Please fill in all required fields</p>
                </div>

                <form onSubmit={handleSubmit} className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    {/* Name Field */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition text-xs sm:text-sm ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Enter your full name"
                        />
                      </div>
                      {errors.name && <p className="text-red-500 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{errors.name}</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">
                        Email Address <span className="text-gray-400 text-[10px] sm:text-xs">(Optional)</span>
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition text-xs sm:text-sm ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="your@email.com"
                        />
                      </div>
                      {errors.email && <p className="text-red-500 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone Field */}
                    <div>
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
                          className={`w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition text-xs sm:text-sm ${
                            errors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="9876543210"
                        />
                      </div>
                      {errors.phone && <p className="text-red-500 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{errors.phone}</p>}
                    </div>

                    {/* Service Dropdown */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">
                        Select Service <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <FaStethoscope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10 text-sm sm:text-base" />
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={`w-full pl-8 sm:pl-10 pr-8 sm:pr-10 py-2 sm:py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition appearance-none bg-white text-xs sm:text-sm ${
                            errors.service ? 'border-red-500' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                      {errors.service && <p className="text-red-500 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{errors.service}</p>}
                    </div>

                    {/* Date Field */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={today}
                          className={`w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition text-xs sm:text-sm ${
                            errors.date ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                      </div>
                      {errors.date && <p className="text-red-500 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{errors.date}</p>}
                    </div>

                    {/* Time Field */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">
                        Preferred Time <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <FaClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10 text-sm sm:text-base" />
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className={`w-full pl-8 sm:pl-10 pr-8 sm:pr-10 py-2 sm:py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition appearance-none bg-white text-xs sm:text-sm ${
                            errors.time ? 'border-red-500' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select a time slot</option>
                          {timeSlots.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                      {errors.time && <p className="text-red-500 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{errors.time}</p>}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">
                        Additional Message <span className="text-gray-400 text-[10px] sm:text-xs">(Optional)</span>
                      </label>
                      <div className="relative">
                        <FaCommentDots className="absolute left-3 top-3 text-gray-400 text-sm sm:text-base" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="3"
                          className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition text-xs sm:text-sm"
                          placeholder="Tell us about your condition or any special requirements..."
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-4 sm:mt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] hover:via-cyan-500 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaWhatsapp className="text-white text-sm sm:text-base" />
                          <span className="text-xs sm:text-sm">Book Appointment via WhatsApp</span>
                          <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300 text-sm sm:text-base" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-gray-500 text-[10px] sm:text-xs mt-2 sm:mt-3">
                      <span className="text-red-500">*</span> Required fields • Your details will be sent via WhatsApp
                    </p>
                  </div>
                </form>
              </div>

              {/* Info Cards - Responsive */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4 sm:mt-6">
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
                    <FaPhoneAlt className="text-white text-xs sm:text-sm" />
                  </div>
                  <h3 className="font-semibold text-[#0a2540] text-[10px] sm:text-xs">Call</h3>
                  <a href="tel:+917904818494" className="text-gray-600 text-[8px] sm:text-[10px] hover:text-teal-600 transition block">+91 79048 18494</a>
                </div>
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
                    <FaWhatsapp className="text-white text-xs sm:text-base" />
                  </div>
                  <h3 className="font-semibold text-[#0a2540] text-[10px] sm:text-xs">WhatsApp</h3>
                  <a href="https://wa.me/917904818494" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-[8px] sm:text-[10px] hover:text-teal-600 transition block">Chat now</a>
                </div>
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
                    <FaClock className="text-white text-xs sm:text-sm" />
                  </div>
                  <h3 className="font-semibold text-[#0a2540] text-[10px] sm:text-xs">Hours</h3>
                  <p className="text-gray-600 text-[8px] sm:text-[10px]">Mon-Sat 9AM-8PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointments
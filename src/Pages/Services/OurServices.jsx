import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  FaBrain, FaHeartbeat, FaRunning, 
  FaChild, FaUserMd, FaHandHoldingHeart, FaDumbbell,
  FaFemale, FaBaby, FaUserFriends, FaCalendarCheck, FaArrowRight,
  FaCheckCircle, FaStar, FaClock, FaSearch,
  FaRegSnowflake, FaRegSmile, FaHome, FaBolt, FaShieldAlt,
  FaBone, FaWalking, FaFilter, FaTimes, FaChevronDown,
  FaAward
} from 'react-icons/fa'
import logo from "../../assets/bglogo.png"
import HealthAndWellness from './Healthandwellness'

const OurServices = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const sidebarRef = useRef(null)

  const categories = [
    { id: 'all', name: 'All Services', icon: <FaRegSmile /> },
    { id: 'orthopedic', name: 'Orthopedic', icon: <FaBone /> },
    { id: 'electrotherapy', name: 'Electrotherapy', icon: <FaBolt /> },
    { id: 'sports', name: 'Sports & ACL', icon: <FaRunning /> },
    { id: 'post-surgical', name: 'Post-Surgical', icon: <FaCalendarCheck /> },
    { id: 'pain', name: 'Pain Management', icon: <FaBrain /> },
    { id: 'geriatric', name: 'Geriatric', icon: <FaUserFriends /> },
    { id: 'neurology', name: 'Neurology', icon: <FaHeartbeat /> },
    { id: 'pediatric', name: 'Pediatric', icon: <FaBaby /> },
    { id: 'fitness', name: 'Fitness & Ergonomics', icon: <FaDumbbell /> },
    { id: 'homecare', name: 'Home Care', icon: <FaHome /> },
  ]

  const services = [
    // 1. ORTHOPEDIC
    {
      id: 1,
      title: "Orthopedic Rehabilitation",
      category: "orthopedic",
      icon: <FaBone />,
      description: "Comprehensive care for back pain, neck pain, arthritis, frozen shoulder, knee pain & mobility restoration.",
      focus: "Pain relief, joint mobility, and functional independence.",
      methods: "Manual therapy, therapeutic exercises, and joint mobilization.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      badgeColor: "bg-emerald-100 text-emerald-700"
    },

    // 2. SPORTS & ACL
    {
      id: 2,
      title: "Sports Injury Recovery",
      category: "sports",
      icon: <FaRunning />,
      description: "Specialized rehabilitation for sports injuries including ACL tears, muscle strains, ligament injuries, and performance-focused recovery.",
      focus: "Return to sport safely, prevent re-injury, enhance athletic performance.",
      methods: "Sport-specific training, strength conditioning, agility drills, and ACL protocols.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      badgeColor: "bg-teal-100 text-teal-700"
    },
    {
      id: 3,
      title: "ACL Tear Rehabilitation",
      category: "sports",
      icon: <FaRunning />,
      description: "Comprehensive ACL injury management from pre-surgery to full return to sport.",
      focus: "Restoring knee stability, muscle strength, and confident movement.",
      methods: "Progressive strengthening, balance training, and sports-specific drills.",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      badgeColor: "bg-cyan-100 text-cyan-700"
    },

    // 3. POST-SURGICAL
    {
      id: 4,
      title: "Post-Surgical Rehabilitation",
      category: "post-surgical",
      icon: <FaCalendarCheck />,
      description: "Structured recovery programs after orthopedic surgeries, fractures, and joint replacements.",
      focus: "Pain relief, regaining movement, building strength, and early functional recovery.",
      methods: "Progressive exercise therapy, scar management, and post-surgery care protocols.",
      color: "from-blue-500 to-teal-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      badgeColor: "bg-blue-100 text-blue-700"
    },
    {
      id: 5,
      title: "Post-Fracture Rehabilitation",
      category: "post-surgical",
      icon: <FaBone />,
      description: "Specialized care after fractures to restore full function and mobility.",
      focus: "Bone healing support, joint mobility, and muscle strengthening.",
      methods: "Graded exercise program, joint mobilization, and functional training.",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      badgeColor: "bg-indigo-100 text-indigo-700"
    },

    // 4. PAIN MANAGEMENT
    {
      id: 6,
      title: "Pain Management Therapy",
      category: "pain",
      icon: <FaBrain />,
      description: "Evidence-based techniques for pain reduction and functional improvement in chronic and acute conditions.",
      focus: "Back pain, neck pain, frozen shoulder, arthritis, disc issues, and nerve pain.",
      methods: "Electrotherapy (TENS, IFT, Ultrasound), posture correction, stretching, and ergonomic advice.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      badgeColor: "bg-orange-100 text-orange-700"
    },
    {
      id: 7,
      title: "Chronic Pain Management",
      category: "pain",
      icon: <FaRegSnowflake />,
      description: "Long-term management strategies for persistent pain conditions.",
      focus: "Pain reduction, improved function, and better quality of life.",
      methods: "Multimodal approach including manual therapy, exercise, and pain education.",
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      badgeColor: "bg-red-100 text-red-700"
    },

    // 5. GERIATRIC
    {
      id: 8,
      title: "Geriatric Physiotherapy (Elderly Care)",
      category: "geriatric",
      icon: <FaUserFriends />,
      description: "Specialized physiotherapy for older adults to maintain independence, mobility, and quality of life.",
      focus: "Improving mobility, reducing stiffness, preventing falls, and managing arthritis/osteoporosis.",
      methods: "Balance training, mobility exercises, strengthening, and fall prevention strategies.",
      color: "from-slate-500 to-gray-500",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-200",
      badgeColor: "bg-slate-100 text-slate-700"
    },

    // 6. NEUROLOGY
    {
      id: 9,
      title: "Neuro Rehabilitation",
      category: "neurology",
      icon: <FaBrain />,
      description: "Specialized care for patients with neurological conditions affecting movement, balance, and function.",
      focus: "Regain mobility, improve balance, and enhance independence.",
      methods: "Task-oriented training, gait training, and functional exercises.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      badgeColor: "bg-purple-100 text-purple-700"
    },
    {
      id: 10,
      title: "Stroke Rehabilitation",
      category: "neurology",
      icon: <FaHeartbeat />,
      description: "Comprehensive program for patients recovering from stroke to regain independence.",
      focus: "Restoring muscle strength, speech, balance, and daily living skills.",
      methods: "Neuroplasticity-based therapy, task training, and occupational retraining.",
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      badgeColor: "bg-red-100 text-red-700"
    },
    {
      id: 11,
      title: "Parkinson's Disease Rehabilitation",
      category: "neurology",
      icon: <FaWalking />,
      description: "Specialized therapy for Parkinson's patients to manage symptoms and improve quality of life.",
      focus: "Improving gait, balance, flexibility, and reducing rigidity.",
      methods: "LSVT Big therapy, balance training, and functional mobility exercises.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      badgeColor: "bg-yellow-100 text-yellow-700"
    },
    {
      id: 12,
      title: "Spinal Cord Injury Rehabilitation",
      category: "neurology",
      icon: <FaRunning />,
      description: "Structured care for partial or complete spinal cord injuries to maximize functional independence.",
      focus: "Maximizing independence, preventing complications, and long-term wellness.",
      methods: "Strengthening, assistive device training, and comprehensive care strategies.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      badgeColor: "bg-blue-100 text-blue-700"
    },
    {
      id: 13,
      title: "Nerve Injury Rehabilitation",
      category: "neurology",
      icon: <FaHeartbeat />,
      description: "Specialized rehabilitation for peripheral nerve injuries and neuropathies.",
      focus: "Nerve regeneration support, sensory recovery, and functional restoration.",
      methods: "Nerve gliding exercises, sensory re-education, and strengthening protocols.",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      badgeColor: "bg-indigo-100 text-indigo-700"
    },

    // 7. PEDIATRIC
    {
      id: 14,
      title: "Pediatric Physiotherapy",
      category: "pediatric",
      icon: <FaBaby />,
      description: "Therapies for children with developmental, neurological, and musculoskeletal issues.",
      focus: "Improving motor skills, coordination, and achieving developmental milestones.",
      methods: "Play-based therapy, gait training, and motor skill development activities.",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      badgeColor: "bg-cyan-100 text-cyan-700"
    },

    // 9. FITNESS & ERGONOMICS
    {
      id: 16,
      title: "Ergonomics Training Classes",
      category: "fitness",
      icon: <FaUserMd />,
      description: "Workplace and lifestyle ergonomics to prevent pain, injuries, and improve daily function.",
      focus: "Correct sitting posture, workstation setup, lifting techniques, and daily activity modifications.",
      methods: "Posture analysis, workstation correction, and preventive strategies.",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      badgeColor: "bg-teal-100 text-teal-700"
    },
    {
      id: 17,
      title: "Postural Correction & Training",
      category: "fitness",
      icon: <FaUserMd />,
      description: "Comprehensive assessment and correction of postural imbalances.",
      focus: "Correcting poor posture, reducing pain, and preventing future issues.",
      methods: "Posture assessment, corrective exercises, and lifestyle modifications.",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      badgeColor: "bg-cyan-100 text-cyan-700"
    },
    {
      id: 20,
      title: "Fitness Training (Male & Female)",
      category: "fitness",
      icon: <FaDumbbell />,
      description: "Customized fitness programs for overall health, strength, and wellness for both men and women.",
      focus: "Strength training, flexibility, weight management, and endurance improvement.",
      methods: "Physiotherapist-supervised workouts tailored for individual goals.",
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      badgeColor: "bg-emerald-100 text-emerald-700"
    },

    // 10. HOME CARE
    {
      id: 18,
      title: "Home Visit Physiotherapy",
      category: "homecare",
      icon: <FaHome />,
      description: "Professional physiotherapy treatment in the comfort of your home for maximum convenience.",
      focus: "Convenient care for elderly, post-surgical, or mobility-limited patients.",
      methods: "Personalized home-based exercises, manual therapy, and functional training.",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      badgeColor: "bg-amber-100 text-amber-700"
    },

    // 11. SPECIAL SERVICES
    {
      id: 19,
      title: "Pelvic Floor Rehabilitation",
      category: "pediatric",
      icon: <FaFemale />,
      description: "Specialized therapy for men and women with pelvic floor dysfunction and related issues.",
      focus: "Strengthening pelvic muscles, improving bladder control, and restoring pelvic health.",
      methods: "Kegel training, biofeedback, and guided physiotherapy exercises.",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      badgeColor: "bg-purple-100 text-purple-700"
    },

    // ===== ELECTROTHERAPY SERVICES =====
    {
      id: 21,
      title: "TENS Therapy (Transcutaneous Electrical Nerve Stimulation)",
      category: "electrotherapy",
      icon: <FaBolt />,
      description: "Non-invasive pain relief using low-voltage electrical currents to block pain signals and stimulate endorphin release for effective pain management.",
      focus: "Acute and chronic pain relief, muscle relaxation, and improved circulation.",
      methods: "Electrode placement, frequency modulation, and intensity adjustment for optimal pain management.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      badgeColor: "bg-yellow-100 text-yellow-700"
    },
    {
      id: 22,
      title: "IFT Therapy (Interferential Therapy)",
      category: "electrotherapy",
      icon: <FaBolt />,
      description: "Deep tissue pain relief using medium-frequency electrical currents that penetrate deep into muscles and joints for effective treatment.",
      focus: "Musculoskeletal pain, swelling reduction, and deep tissue healing.",
      methods: "Interferential current application, suction cup electrodes, and targeted frequency settings.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      badgeColor: "bg-purple-100 text-purple-700"
    },
    {
      id: 23,
      title: "Ultrasound Therapy",
      category: "electrotherapy",
      icon: <FaBolt />,
      description: "Therapeutic ultrasound using high-frequency sound waves to promote tissue healing, reduce inflammation, and relieve pain effectively.",
      focus: "Tendonitis, bursitis, muscle spasms, and soft tissue injuries.",
      methods: "Ultrasound applicator, sound wave penetration, and thermal/non-thermal effects.",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      badgeColor: "bg-cyan-100 text-cyan-700"
    },
    {
      id: 24,
      title: "Traction Therapy",
      category: "electrotherapy",
      icon: <FaBolt />,
      description: "Spinal decompression therapy using controlled mechanical traction to relieve pressure on spinal discs and nerve roots.",
      focus: "Herniated discs, sciatica, neck pain, and lower back pain relief.",
      methods: "Mechanical traction, intermittent/static traction, and controlled decompression techniques.",
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      badgeColor: "bg-green-100 text-green-700"
    },
    {
      id: 25,
      title: "Shortwave Diathermy",
      category: "electrotherapy",
      icon: <FaBolt />,
      description: "Deep tissue heating using electromagnetic waves to increase blood flow, reduce pain, and accelerate healing in deep-seated tissues.",
      focus: "Joint stiffness, muscle spasms, chronic inflammation, and deep tissue injuries.",
      methods: "Capacitive/inductive field application, controlled heating, and therapeutic dosage.",
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      badgeColor: "bg-red-100 text-red-700"
    }
  ]

  // Handle scroll for sticky sidebar
  useEffect(() => {
    const handleScroll = () => {
      if (sidebarRef.current) {
        const rect = sidebarRef.current.getBoundingClientRect()
        setIsSticky(rect.top <= 100)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getCategoryCount = (categoryId) => {
    if (categoryId === 'all') return services.length
    return services.filter(s => s.category === categoryId).length
  }

  // Handle book appointment click - redirects to Electrotherapy for all electrotherapy services
  const handleBookAppointment = (service) => {
    if (service.category === 'electrotherapy') {
      // Redirect to Electrotherapy (category name) for all electrotherapy services
      navigate(`/appointments?service=Electrotherapy`)
    } else {
      // Redirect to individual service title for other services
      navigate(`/appointments?service=${encodeURIComponent(service.title)}`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Modern Page Header with Gradient */}
      <div className="relative bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] text-white py-16 mb-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-3">Physio World Service</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">Expert care tailored to your unique needs for a pain-free, active life</p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT SIDEBAR - FILTERS */}
          <div className="lg:w-72 xl:w-80 flex-shrink-0">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden w-full bg-white rounded-xl shadow-lg p-4 mb-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <FaFilter className="text-teal-600" />
                <span className="font-semibold text-[#0a2540]">Filter Services</span>
                <span className="bg-teal-100 text-teal-700 text-xs px-2 py-1 rounded-full">
                  {filteredServices.length}
                </span>
              </div>
              <FaChevronDown className={`transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Filter Sidebar - Sticky */}
            <div 
              ref={sidebarRef}
              className={`lg:block ${isFilterOpen ? 'block' : 'hidden'} transition-all duration-300 ${
                isSticky ? 'lg:sticky lg:top-24' : ''
              }`}
            >
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-[#0a2540] flex items-center gap-2">
                    <FaFilter className="text-teal-600" />
                    Filters
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">{services.length} total</span>
                    {selectedCategory !== 'all' && (
                      <button
                        onClick={() => setSelectedCategory('all')}
                        className="text-xs text-teal-600 hover:text-teal-700 font-semibold"
                      >
                        <FaTimes />
                      </button>
                    )}
                  </div>
                </div>

                {/* Search */}
                <div className="relative mb-6">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                  />
                </div>

                {/* Category List */}
                <div className="space-y-1.5 max-h-[500px] overflow-y-auto custom-scrollbar pr-1">
                  {categories.map((category) => {
                    const count = getCategoryCount(category.id)
                    const isActive = selectedCategory === category.id
                    return (
                      <button
                        key={category.id}
                        onClick={() => {
                          setSelectedCategory(category.id)
                          setIsFilterOpen(false)
                        }}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${
                          isActive
                            ? 'bg-gradient-to-r from-teal-600 to-cyan-500 text-white shadow-lg shadow-teal-200'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`text-lg ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-teal-600'}`}>
                            {category.icon}
                          </span>
                          <span className={`font-medium text-sm ${isActive ? 'text-white' : 'text-gray-700'}`}>
                            {category.name}
                          </span>
                        </div>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          isActive 
                            ? 'bg-white/20 text-white' 
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          {count}
                        </span>
                      </button>
                    )
                  })}
                </div>

                {/* Premium Badge */}
                <div className="mt-6 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border border-teal-100">
                  <div className="flex items-center gap-2 mb-1">
                    <FaStar className="text-yellow-500" />
                    <span className="font-semibold text-sm text-[#0a2540]">Premium Care</span>
                  </div>
                  <p className="text-xs text-gray-600">All services include personalized treatment plans and expert consultation</p>
                </div>

                {/* Trust Badge */}
                <div className="mt-3 flex items-center justify-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <FaCheckCircle className="text-green-500" /> 5000+ Patients
                  </span>
                  <span className="flex items-center gap-1">
                    <FaAward className="text-yellow-500" /> 4.8 Rating
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT - SERVICES GRID */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <div>
                <h2 className="text-2xl font-bold text-[#0a2540] flex items-center gap-2">
                  {filteredServices.length} Services Available
                  <FaBaby className="text-yellow-400 text-sm" />
                </h2>
                <p className="text-gray-500 text-sm">
                  {selectedCategory !== 'all' 
                    ? `Showing ${categories.find(c => c.id === selectedCategory)?.name || ''} services`
                    : 'Showing all services'}
                </p>
              </div>
              <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm">
                <FaClock className="text-teal-600 text-sm" />
                <span className="text-xs text-gray-600">Flexible timings available</span>
              </div>
            </div>

            {/* Services Grid */}
            {filteredServices.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl shadow-xl">
                <FaRegSmile className="text-7xl text-gray-200 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-600 mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                {filteredServices.map((service) => (
                  <div
                    key={service.id}
                    className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border-l-4 ${service.borderColor}`}
                  >
                    {/* Service Header with Gradient */}
                    <div className={`bg-gradient-to-r ${service.color} p-5 flex items-center gap-4`}>
                      <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white text-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-bold text-lg truncate">{service.title}</h3>
                      </div>
                      {/* Category Badge */}
                      <div className="hidden sm:block">
                        <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${service.badgeColor} bg-white/30 backdrop-blur-sm text-white`}>
                          {service.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Service Body */}
                    <div className="p-5">
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                        {service.description}
                      </p>
                      
                      {/* Focus & Methods in a single row */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className={`${service.bgColor} p-3 rounded-xl`}>
                          <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Focus</p>
                          <p className="text-xs text-gray-700 line-clamp-2">{service.focus}</p>
                        </div>
                        <div className={`${service.bgColor} p-3 rounded-xl`}>
                          <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Methods</p>
                          <p className="text-xs text-gray-700 line-clamp-2">{service.methods}</p>
                        </div>
                      </div>
                      
                      {/* Book Button - Redirects to Electrotherapy for all electrotherapy services */}
                      <button 
                        onClick={() => handleBookAppointment(service)}
                        className={`w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group-hover:shadow-lg`}
                      >
                        Book Appointment
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* HealthAndWellness Component */}
        <div className="mt-12">
          <HealthAndWellness />
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        .lg\:sticky {
          position: sticky;
          top: 100px;
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  )
}

export default OurServices
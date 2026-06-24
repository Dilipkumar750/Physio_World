import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FaBrain, FaHeartbeat, FaRunning, 
  FaChild, FaArrowRight, FaCheckCircle, FaStar, FaClock, FaPhoneAlt, FaCalendarCheck, FaUserMd, FaBone
} from 'react-icons/fa'

const SpecializedServices = () => {
  // Only showing 6 services on home page - Reordered as requested
  const services = [
    // 1. ORTHOPEDIC
    {
      id: 1,
      title: "Orthopedic Rehabilitation",
      icon: <FaBone />,
      description: "Comprehensive care for back pain, neck pain, arthritis, frozen shoulder, knee pain & mobility restoration.",
      focus: "Pain relief, joint mobility, and functional independence.",
      methods: "Manual therapy, therapeutic exercises, and joint mobilization.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      link: "/appointments"
    },
    // 2. SPORTS & ORTHOPEDIC
    {
      id: 2,
      title: "Sports & Orthopedic Rehabilitation",
      icon: <FaRunning />,
      description: "Specialized rehabilitation for sports injuries including ACL tears, muscle strains, ligament injuries, and performance-focused recovery.",
      focus: "Return to sport safely, prevent re-injury, enhance athletic performance.",
      methods: "Sport-specific training, strength conditioning, agility drills, and ACL protocols.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      link: "/appointments"
    },
    // 3. PAIN MANAGEMENT
    {
      id: 3,
      title: "Pain Management Therapy",
      icon: <FaBrain />,
      description: "Evidence-based techniques for pain reduction and functional improvement in chronic and acute conditions.",
      focus: "Back pain, neck pain, frozen shoulder, arthritis, disc issues, and nerve pain.",
      methods: "Electrotherapy (TENS, IFT, Ultrasound), posture correction, stretching, and ergonomic advice.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      link: "/appointments"
    },
    // 4. NEURO REHABILITATION
    {
      id: 4,
      title: "Neuro Rehabilitation",
      icon: <FaBrain />,
      description: "Specialized care for patients with neurological conditions affecting movement, balance, and function.",
      focus: "Regain mobility, improve balance, and enhance independence.",
      methods: "Task-oriented training, gait training, and functional exercises.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      link: "/appointments"
    },
    {
      id: 5,
      title: "Pediatric Physiotherapy",
      icon: <FaChild />,
      description: "Therapies for children with developmental, neurological, and musculoskeletal issues.",
      focus: "Improving motor skills, coordination, and achieving developmental milestones.",
      methods: "Play-based therapy, gait training, and motor skill development activities.",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      link: "/appointments"
    },
    // 6. GERIATRIC
    {
      id: 6,
      title: "Geriatric Physiotherapy (Elderly Care)",
      icon: <FaUserMd />,
      description: "Specialized physiotherapy for older adults to maintain independence, mobility, and quality of life.",
      focus: "Improving mobility, reducing stiffness, preventing falls, and managing arthritis/osteoporosis.",
      methods: "Balance training, mobility exercises, strengthening, and fall prevention strategies.",
      color: "from-slate-500 to-gray-500",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-200",
      link: "/appointments"
    }
  ]

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
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const floatAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  const iconRotate = {
    hover: {
      rotate: 360,
      transition: { duration: 0.6 }
    }
  }

  const whyChooseItems = [
    { icon: <FaStar />, title: "Expert Team", desc: "Qualified and experienced physiotherapists" },
    { icon: <FaCheckCircle />, title: "Modern Equipment", desc: "State-of-the-art technology and tools" },
    { icon: <FaClock />, title: "Personalized Care", desc: "Tailored treatment plans for each patient" }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <motion.div 
        animate={floatAnimation}
        className="absolute top-20 right-10 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl"
      ></motion.div>
      <motion.div 
        animate={floatAnimation}
        className="absolute bottom-20 left-10 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl"
        style={{ animationDelay: '1.5s' }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0a2540] to-teal-600 bg-clip-text text-transparent mb-4">
            Our Specialized Services
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-4 rounded-full"
          ></motion.div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive physiotherapy services tailored to your specific needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col border-l-4 ${service.borderColor}`}
            >
              {/* Service Header with Gradient */}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={`bg-gradient-to-r ${service.color} p-4 flex items-center gap-3 flex-shrink-0`}
              >
                <motion.div 
                  variants={iconRotate}
                  whileHover="hover"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white text-2xl"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-white font-bold text-lg flex-1">{service.title}</h3>
              </motion.div>
              
              {/* Service Body - Flex grow to fill space */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="p-5 flex flex-col flex-1"
              >
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3 flex-shrink-0"
                >
                  {service.description}
                </motion.p>
                
                {/* Focus Section */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className={`mb-3 flex-shrink-0 ${service.bgColor} p-3 rounded-xl`}
                >
                  <h4 className="font-semibold text-[#0a2540] text-sm mb-1">🎯 Focus:</h4>
                  <p className="text-gray-700 text-xs line-clamp-2">{service.focus}</p>
                </motion.div>
                
                {/* Methods Section */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className={`mb-4 flex-shrink-0 ${service.bgColor} p-3 rounded-xl`}
                >
                  <h4 className="font-semibold text-[#0a2540] text-sm mb-1">📋 Methods:</h4>
                  <p className="text-gray-700 text-xs line-clamp-2">{service.methods}</p>
                </motion.div>
                
                {/* Spacer to push button to bottom */}
                <div className="flex-1"></div>
                
                {/* Book Appointment Button - Fixed at bottom, redirects to appointments */}
                <Link to={service.link} className="mt-auto">
                  <motion.button 
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full bg-gradient-to-r ${service.color} text-white py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg`}
                  >
                    Book Appointment
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaArrowRight />
                    </motion.span>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services Button - Now redirects to appointments */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/appointments">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#0a2540] to-teal-600 hover:from-teal-600 hover:to-[#0a2540] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
            >
              View All Services
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight />
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-[#0a2540] to-teal-600 px-6 py-4"
          >
            <h2 className="text-white text-2xl font-bold">Why Choose PhysioWorld?</h2>
            <p className="text-teal-100">Excellence in physiotherapy care</p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {whyChooseItems.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="text-center p-4 hover:shadow-lg rounded-xl transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3"
                >
                  <span className="text-white text-2xl">{item.icon}</span>
                </motion.div>
                <h3 className="font-bold text-[#0a2540] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-12 bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] rounded-2xl p-8 text-center text-white relative overflow-hidden"
        >
          <motion.div 
            animate={floatAnimation}
            className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"
          ></motion.div>
          <motion.div 
            animate={floatAnimation}
            className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"
            style={{ animationDelay: '1.5s' }}
          ></motion.div>
          
          <div className="relative z-10">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-2xl font-bold mb-3"
            >
              Ready to Start Your Recovery?
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mb-6 text-teal-100"
            >
              Book an appointment with our expert physiotherapists today
            </motion.p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/appointments">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#0a2540] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-lg"
                >
                  <FaCalendarCheck />
                  Book Appointment
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </motion.button>
              </Link>
              <a href="tel:+917904818494">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                >
                  <FaPhoneAlt />
                  Call Now
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default SpecializedServices
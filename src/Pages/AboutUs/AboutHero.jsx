import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaCheckCircle, FaStar, FaUsers, FaAward, FaHandHoldingHeart,
  FaStethoscope, FaCalendarAlt, FaPhoneAlt, FaArrowRight,
  FaUserMd, FaHeartbeat, FaHandsHelping, FaBrain, FaLeaf,
  FaRegSmile, FaQuoteLeft, FaFemale, FaBaby, FaRunning,
  FaBone, FaHome, FaClock, FaShieldAlt
} from 'react-icons/fa'
import logo from "../../assets/bglogo.png"
import ganesh from "../../assets/ganesh.jpeg"
import Sandhiya from "../../assets/sandhya.jpeg"
import musculoskeletal from "../../assets/bglogo.png"

const About = () => {
  const stats = [
    { icon: <FaUsers />, value: "5000+", label: "Happy Patients" },
    { icon: <FaAward />, value: "4+", label: "Years of Healthcare Excellence" },
    { icon: <FaStar />, value: "4.8/5", label: "Google Rating" },
    { icon: <FaUserMd />, value: "13+", label: "Years of Expert Experience" }
  ]

  const values = [
    {
      icon: <FaHandHoldingHeart />,
      title: "Patient-Centered Care",
      description: "We prioritize your comfort and recovery with personalized treatment plans."
    },
    {
      icon: <FaStethoscope />,
      title: "Expertise & Excellence",
      description: "Our team of experienced physiotherapists delivers the highest quality care."
    },
    {
      icon: <FaHeartbeat />,
      title: "Holistic Approach",
      description: "We treat the whole person, not just the symptoms, for lasting results."
    },
    {
      icon: <FaHandsHelping />,
      title: "Compassionate Support",
      description: "We provide emotional support and guidance throughout your recovery journey."
    }
  ]

  const founders = [
    {
      name: "Dr. Ganesh",
      credentials: "MPT Sport, FIMT, MIAP",
      role: "Founder & Chief Physiotherapist",
      description: "Sports Physiotherapy expert specializing in Orthopedic Rehabilitation, Sports Injury Recovery, Pain Management, and Performance Optimization. With 13+ years of clinical experience, he has successfully treated thousands of patients with musculoskeletal conditions, sports injuries, and chronic pain. His evidence-based approach combines manual therapy, therapeutic exercises, and advanced rehabilitation techniques to ensure optimal recovery. FIMT & MIAP certified with a commitment to clinical excellence.",
      specializations: ["Orthopedic Rehabilitation", "Sports Injury Recovery", "Pain Management", "Performance Optimization"],
      image: ganesh,
      color: "from-purple-500 to-pink-500",
      icon: <FaBrain />
    },
    {
      name: "Dr. Sandhiya Ganesh V",
      credentials: "MPT Neuro, FIMT, MIAP",
      role: "Co-Founder & Senior Physiotherapist",
      description: "Neurological Physiotherapy specialist with expertise in Stroke Rehabilitation, Parkinson's Disease, Spinal Cord Injury, and Nerve Injury Recovery. She is passionate about women's health and provides compassionate care for conditions like Pelvic Floor Dysfunction, Post-Pregnancy Rehabilitation, and Geriatric Care. FIMT & MIAP certified with a patient-first approach. She conducts periodic assessments, regular follow-ups, and customized recovery plans to ensure continuous progress. Her empathetic nature and clinical excellence make her a trusted physiotherapist for neurological and women's health conditions.",
      specializations: ["Neurological Rehab", "Stroke Recovery", "Women's Health", "Pelvic Floor Therapy", "Geriatric Care"],
      image: Sandhiya,
      color: "from-pink-500 to-rose-500",
      icon: <FaFemale />
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

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-x-hidden">
      {/* Page Header with Logo */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] text-white py-12 mb-8 relative overflow-hidden"
      >
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-0 opacity-10"
        >
        </motion.div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">PhysioWorld</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto px-2"
          >
            Your trusted partner in physiotherapy care, committed to restoring mobility and improving quality of life
          </motion.p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 pb-12">
        {/* Our Story Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <motion.div 
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="p-8 md:p-10"
            >
              <h2 className="text-3xl font-bold text-[#0a2540] mb-4">Our Story</h2>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mb-6"
              ></motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-600 mb-4 leading-relaxed"
              >
                Founded in <strong className="text-teal-600">2023</strong>, PhysioWorld began with a simple mission: to provide exceptional physiotherapy care
                that helps people regain their mobility and live pain-free lives.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 mb-4 leading-relaxed"
              >
                Over the past <strong className="text-teal-600">4+ years</strong>, we've grown into a trusted healthcare facility serving over <strong className="text-teal-600">5000+ patients</strong>
                with various conditions, from sports injuries and orthopedic issues to neurological disorders and chronic pain.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-gray-600 leading-relaxed"
              >
                Today, PhysioWorld stands as a beacon of hope for those seeking recovery, equipped with
                state-of-the-art technology and a team of dedicated professionals with <strong className="text-teal-600">13+ years</strong> of combined experience.
              </motion.p>
            </motion.div>
            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-[#0a2540] to-teal-800 p-8 md:p-10 flex items-center"
            >
              <div className="text-white">
                <motion.h3 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold mb-4"
                >
                  Our Mission
                </motion.h3>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mb-6 text-teal-100"
                >
                  To empower individuals to achieve optimal physical function and improve their quality of life
                  through evidence-based physiotherapy, compassionate care, and innovative treatment approaches.
                </motion.p>
                <motion.h3 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-2xl font-bold mb-4"
                >
                  Our Vision
                </motion.h3>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-teal-100"
                >
                  To be the leading physiotherapy clinic recognized for excellence in patient care,
                  innovation in treatment, and commitment to community health.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Redefining Physiotherapy Care Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl shadow-lg overflow-hidden mb-12 border border-teal-100"
        >
          <div className="p-8 md:p-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold text-[#0a2540] mb-3">Redefining Physiotherapy Care</h2>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-6"
              ></motion.div>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                At PhysioWorld, we combine clinical expertise, modern rehabilitation techniques, and personalized care to help patients recover safely and effectively.
              </p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-3 gap-6 mt-8"
            >
              {[
                {
                  icon: <FaStethoscope />,
                  title: "Orthopedic & Sports Care",
                  desc: "Specialized treatment for musculoskeletal conditions, sports injuries, and pain management with 13+ years of expertise."
                },
                {
                  icon: <FaHeartbeat />,
                  title: "Neurological & Women's Health",
                  desc: "Expert care for neurological conditions, stroke recovery, pelvic floor therapy, and women's health rehabilitation."
                },
                {
                  icon: <FaUserMd />,
                  title: "Personalized Care",
                  desc: "Tailored treatment plans designed specifically for your unique condition and goals with periodic assessments."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4"
                  >
                    <span className="text-white text-xl">{item.icon}</span>
                  </motion.div>
                  <h3 className="font-bold text-[#0a2540] text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 pt-4 text-center text-gray-600"
            >
              <p className="italic">
                "From orthopedic pain management to neurological rehabilitation and post-surgical recovery,
                our goal is to deliver results-focused physiotherapy tailored to every individual."
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div 
                animate={pulseAnimation}
                className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-2xl"
              >
                {stat.icon}
              </motion.div>
              <motion.h3 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                className="text-3xl font-bold text-[#0a2540] mb-1"
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Journey at a Glance - Image Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <motion.div 
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-teal-50 to-white"
              >
                <h2 className="text-3xl font-bold text-[#0a2540] mb-4">Our Journey at a Glance</h2>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 80 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mb-6"
                ></motion.div>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-600 leading-relaxed mb-4"
                >
                  At PhysioWorld, we believe in the power of movement and the body's natural ability to heal.
                  Our state-of-the-art facility and compassionate team work tirelessly to restore function,
                  reduce pain, and improve the quality of life for every patient who walks through our doors.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-600 leading-relaxed"
                >
                  Whether you're recovering from an injury, managing a chronic condition, or seeking to optimize
                  your physical performance, we're here to guide you every step of the way.
                </motion.p>
              </motion.div>
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="h-64 md:h-auto"
              >
                <img
                  src={musculoskeletal}
                  alt="PhysioWorld Care"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Our Values Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-[#0a2540] mb-4">Our Core Values</h2>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto"
            ></motion.div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              The principles that guide everything we do at PhysioWorld
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl"
                >
                  {value.icon}
                </motion.div>
                <h3 className="font-bold text-[#0a2540] mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Founders / Meet Our Experts Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-[#0a2540] mb-4">Meet Our Founders</h2>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto"
            ></motion.div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Dedicated professionals with 13+ years of combined experience committed to your recovery
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8"
          >
            {founders.map((founder, index) => (
              <motion.div 
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Centered Small Rounded Image */}
                <motion.div 
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                  className="pt-8 pb-4 flex justify-center"
                >
                  <div className="relative">
                    <motion.div 
                      animate={pulseAnimation}
                      className={`absolute inset-0 bg-gradient-to-r ${founder.color} rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
                    ></motion.div>
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={founder.image}
                      alt={founder.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl relative z-10"
                    />
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r ${founder.color} rounded-full flex items-center justify-center text-white text-sm shadow-lg z-20`}
                    >
                      {founder.icon}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  className="p-6 text-center"
                >
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-[#0a2540]">{founder.name}</h3>
                    <p className="text-teal-600 text-sm font-medium">{founder.credentials}</p>
                    <p className="text-gray-500 text-xs mt-1">{founder.role}</p>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                    {founder.description}
                  </p>

                  {/* Specializations */}
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {founder.specializations.map((spec, idx) => (
                      <motion.span 
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full"
                      >
                        {spec}
                      </motion.span>
                    ))}
                  </div>

                  {/* Quote Icon */}
                  <motion.div 
                    animate={floatAnimation}
                    className="flex justify-center"
                  >
                    <FaQuoteLeft className="text-gray-200 text-2xl" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12"
        >
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-[#0a2540] to-teal-600 px-6 py-4"
          >
            <h2 className="text-2xl font-bold text-white">Why Choose PhysioWorld?</h2>
            <p className="text-teal-100">What makes us different from other clinics</p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="p-6 grid md:grid-cols-2 gap-6"
          >
            {[
              { title: "13+ Years of Expertise", desc: "Our team has extensive experience in orthopedic, sports, and neurological physiotherapy." },
              { title: "5000+ Happy Patients", desc: "Trusted by thousands of patients for quality physiotherapy care and successful recovery." },
              { title: "Orthopedic & Sports Focus", desc: "Specialized care for musculoskeletal conditions, sports injuries, and pain management." },
              { title: "Neurology & Women's Health", desc: "Expert care for neurological conditions, stroke recovery, pelvic floor therapy, and women's health." },
              { title: "Periodic Assessments", desc: "Regular follow-ups and progress evaluations to ensure optimal recovery outcomes." },
              { title: "Home Visits Available", desc: "Professional physiotherapy services at your doorstep for maximum convenience." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ x: 8, backgroundColor: "#f9fafb" }}
                className="flex items-start gap-3 p-3 rounded-lg transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaCheckCircle className="text-teal-500 text-xl mt-1 flex-shrink-0" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-[#0a2540]">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] rounded-2xl p-8 text-center text-white relative overflow-hidden"
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
              transition={{ delay: 0.8 }}
              className="text-2xl md:text-3xl font-bold mb-3"
            >
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
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
                  <FaCalendarAlt />
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
    </div>
  )
}

export default About
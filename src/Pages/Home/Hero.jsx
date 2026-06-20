import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaStar, FaUsers, 
  FaCalendarAlt, FaWhatsapp, 
  FaClock, FaArrowRight,
  FaHome, FaUserMd, FaRegCalendarCheck,
  FaShieldAlt, FaAward
} from 'react-icons/fa';
import { GiHealing, GiMuscleUp, GiRunningShoe } from 'react-icons/gi';
import SpecializedServices from './SpecializedServices';
import clinic from '../../assets/clinic.jpg';
import homecare from '../../assets/logo.png';
import TestimonialsHero from './TestimonialsHero';

const Hero = () => {
  const highlightPoints = [
    { icon: <GiHealing className="text-teal-500" />, text: "Pain Management" },
    { icon: <GiMuscleUp className="text-teal-500" />, text: "Muscle Recovery" },
    { icon: <GiHealing className="text-teal-500" />, text: "Spine Care" },
    { icon: <GiRunningShoe className="text-teal-500" />, text: "Sports Rehab" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const floatAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const scaleOnHover = {
    scale: 1.05,
    transition: { duration: 0.3 }
  };

  const iconRotate = {
    hover: {
      rotate: 360,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[500px] sm:min-h-[600px] bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden relative">
        {/* Background Decorative Elements with Animations */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-100/20 to-transparent"
        ></motion.div>
        <motion.div 
          animate={floatAnimation}
          className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-teal-400/5 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          animate={floatAnimation}
          className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 sm:w-48 h-32 sm:h-48 bg-cyan-400/5 rounded-full blur-3xl"
          style={{ animationDelay: '1.5s' }}
        ></motion.div>

        <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-12 lg:py-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            
            {/* Left Side - Content */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex-[2] w-full text-center lg:text-left"
            >
              {/* Trust Badge */}
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 shadow-sm border border-teal-200/50"
              >
                <motion.span 
                  animate={pulseAnimation}
                  className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-teal-600 rounded-full"
                ></motion.span>
                <span className="text-xs sm:text-sm font-bold">⭐ Chennai's Most Trusted Physiotherapy Clinic</span>
              </motion.div>
              
              {/* Main Headline */}
              <motion.h1 
                variants={itemVariants}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-3 sm:mb-5 leading-tight"
              >
                <span className="text-[#0a2540]">Get Back to </span>
                <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Pain-Free Living</span>
              </motion.h1>
              
              {/* Subheadline */}
              <motion.p 
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl text-gray-700 font-bold mb-2 sm:mb-3 flex items-center justify-center lg:justify-start gap-2"
              >
                <span>Expert Physiotherapy That Actually Works</span>
                <motion.span 
                  animate={pulseAnimation}
                  className="text-teal-500 text-xl sm:text-2xl"
                >
                  ✨
                </motion.span>
              </motion.p>
              
              {/* Description */}
              <motion.p 
                variants={itemVariants}
                className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                Join <span className="font-bold text-teal-600">5000+ happy patients</span> who've reclaimed their active lifestyle. 
                Our certified therapists combine advanced technology with compassionate care to deliver 
                <span className="font-semibold text-teal-700"> exceptional recovery outcomes</span>.
              </motion.p>
              
              {/* Highlight Points */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6 justify-center lg:justify-start"
              >
                {highlightPoints.map((point, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="group flex items-center gap-1 sm:gap-2 bg-white/80 backdrop-blur-sm border border-teal-100 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full shadow-sm hover:shadow-md hover:border-teal-300 transition-all duration-300"
                  >
                    <motion.span 
                      whileHover={{ rotate: 20 }}
                      className="text-teal-500 text-xs sm:text-sm group-hover:scale-110 transition-transform"
                    >
                      {point.icon}
                    </motion.span>
                    <span className="text-gray-700 text-xs sm:text-sm font-medium">{point.text}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <Link to="/appointments" className="w-full sm:w-auto">
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group w-full sm:w-auto bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-bold transition-all duration-300 shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <FaCalendarAlt />
                    Book Consultation
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaArrowRight />
                    </motion.span>
                  </motion.button>
                </Link>
                <a href="https://wa.me/917904818494" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto border-2 border-teal-500 text-teal-600 hover:bg-teal-50 hover:border-teal-600 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-md text-sm sm:text-base"
                  >
                    <motion.span
                      whileHover={{ rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaWhatsapp className="text-lg sm:text-xl" />
                    </motion.span>
                    Chat on WhatsApp
                  </motion.button>
                </a>
              </motion.div>
              
              {/* Social Proof */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8"
              >
                <motion.div 
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="flex items-center gap-1 sm:gap-2 bg-white/60 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-100"
                >
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.3, rotate: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaStar className="text-yellow-400 text-xs sm:text-sm" />
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-gray-700">4.8/5</span>
                  <span className="text-[10px] sm:text-xs text-gray-500">(Google Reviews)</span>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="flex items-center gap-1 sm:gap-2 bg-white/60 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-100"
                >
                  <FaUsers className="text-teal-500 text-xs sm:text-sm" />
                  <span className="text-xs sm:text-sm font-bold text-gray-700">5000+ Happy Patients</span>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="flex items-center gap-1 sm:gap-2 bg-white/60 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-100"
                >
                  <FaClock className="text-teal-500 text-xs sm:text-sm" />
                  <span className="text-xs sm:text-sm font-bold text-gray-700">Same-Day Appointments</span>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Right Side - Clinic Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 w-full lg:w-auto"
            >
              <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 aspect-square sm:aspect-video lg:aspect-auto"
                >
                  <motion.img 
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7 }}
                    src={clinic} 
                    alt="Physiotherapy Clinic - Professional Care" 
                    className="w-full h-full object-fit"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="py-6 sm:py-8 md:py-10 bg-gradient-to-r from-[#0a2540] to-teal-800 text-white relative overflow-hidden"
      >
        {/* Decorative background circles */}
        <motion.div 
          animate={floatAnimation}
          className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-teal-400/10 rounded-full blur-2xl"
        ></motion.div>
        <motion.div 
          animate={floatAnimation}
          className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-cyan-400/10 rounded-full blur-2xl"
          style={{ animationDelay: '1.5s' }}
        ></motion.div>
        
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
          >
            {[
              { value: "5000+", label: "Happy Patients Recovered", icon: <FaUsers className="text-teal-300 text-xs sm:text-sm" />, short: "Happy Patients" },
              { value: "4.8/5", label: "Google Rating", icon: <FaStar className="text-yellow-400 text-xs sm:text-sm" />, short: "Rating" },
              { value: "4+ Years", label: "Trusted Healthcare Excellence", icon: <FaShieldAlt className="text-teal-300 text-xs sm:text-sm" />, short: "Trusted Excellence" },
              { value: "15+ Years", label: "Expert Physiotherapist", icon: <FaUserMd className="text-teal-300 text-xs sm:text-sm" />, short: "Expert PT" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center group transition-transform duration-300"
              >
                <motion.h3 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-teal-100 text-xs sm:text-sm font-medium mt-1 flex items-center justify-center gap-1">
                  {stat.icon}
                  <span className="hidden xs:inline">{stat.label}</span>
                  <span className="inline xs:hidden">{stat.short}</span>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Specialized Services Component */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <SpecializedServices />
      </motion.div>

      {/* Home Visit Services Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="py-10 sm:py-12 md:py-16 bg-gradient-to-br from-teal-50 to-cyan-50 relative overflow-hidden"
      >
        <motion.div 
          animate={floatAnimation}
          className="absolute top-20 left-10 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          animate={floatAnimation}
          className="absolute bottom-20 right-10 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl"
          style={{ animationDelay: '1.5s' }}
        ></motion.div>

        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 shadow-sm border border-teal-200/50"
            >
              <FaHome className="text-teal-600 text-xs sm:text-sm" />
              <span className="text-xs sm:text-sm font-semibold">Convenient Care at Your Doorstep</span>
            </motion.div>
            <motion.h2 
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a2540] mb-2 sm:mb-3 md:mb-4"
            >
              Physiotherapy at <span className="text-teal-600">Home</span>
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-3 sm:mb-4 md:mb-6 rounded-full"
            ></motion.div>
            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2"
            >
              Can't visit the clinic? Our expert therapists come to your home for personalized rehabilitation
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
                {[
                  { icon: <FaUserMd />, title: "Expert Home Visit", desc: "Certified physiotherapists with specialized home care training" },
                  { icon: <FaClock />, title: "Flexible Timings", desc: "Morning, evening & weekend slots as per your schedule" },
                  { icon: <GiHealing />, title: "Equipment Support", desc: "Portable therapy equipment brought to your home" },
                  { icon: <FaRegCalendarCheck />, title: "Personalized Plans", desc: "Customized home exercise programs for faster recovery" }
                ].map((card, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-white rounded-xl p-4 sm:p-5 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-teal-200"
                  >
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mb-3 sm:mb-4"
                    >
                      <span className="text-white text-base sm:text-xl">{card.icon}</span>
                    </motion.div>
                    <h3 className="font-bold text-[#0a2540] text-base sm:text-lg mb-1 sm:mb-2">{card.title}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm">{card.desc}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-teal-600 to-cyan-500 rounded-xl p-4 sm:p-5 md:p-6 text-white text-center shadow-xl"
              >
                <p className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">🏠 Home Visit Available in:</p>
                <p className="text-xs sm:text-sm opacity-90 px-2">Perambur • Peravallur • Kolathur • Villivakkam • Madavaram • Anna Nagar • Ayanavaram • and surrounding areas</p>
                <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 flex-wrap">
                  <Link to="/appointments" className="w-full sm:w-auto">
                    <motion.button 
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto bg-white text-teal-600 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <FaCalendarAlt />
                      Book Home Visit
                    </motion.button>
                  </Link>
                  <a href="https://wa.me/917904818494" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <motion.button 
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto border-2 border-white text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <FaWhatsapp />
                      Enquire Now
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Side - Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mt-6 sm:mt-0"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <motion.img 
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7 }}
                  src={homecare} 
                  alt="Home Physiotherapy Service" 
                  className="w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px] object-cover"
                />
              </motion.div>
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-white rounded-lg shadow-xl p-2 sm:p-3 flex items-center gap-1 sm:gap-2 border border-gray-100"
              >
                <motion.div 
                  animate={pulseAnimation}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center"
                >
                  <FaWhatsapp className="text-white text-base sm:text-xl" />
                </motion.div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500">Call for Home Visit</p>
                  <p className="font-bold text-[#0a2540] text-xs sm:text-sm">+91 79048 18494</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <TestimonialsHero />
      </motion.div>
    </div>
  );
};

export default Hero;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaStar, FaQuoteLeft, FaCheckCircle, FaArrowRight, 
  FaMapMarkerAlt, FaRegClock, FaShareAlt, FaWhatsapp, 
  FaFacebook, FaTwitter, FaHeartbeat
} from 'react-icons/fa';

const TestimonialsHero = () => {

  const testimonials = [
    {
      id: 1,
      name: "Raj Narayanan",
      location: "Perambur, Chennai",
      rating: 5,
      date: "March 15, 2026",
      text: "I had been struggling with pain for a while, and after taking treatment here I'm perfectly okay now. The physiotherapist Dr. Ganesh was very knowledgeable, patient, and focused on the root cause rather than just symptoms. The exercises and treatment made a huge difference. I'm really grateful and would definitely recommend him. Thank you so much Dr. Ganesh 🙏",
      verified: true,
      gradientIndex: 0,
      logoIndex: 0
    },
    {
      id: 2,
      name: "Mahalakshmi Sridhar",
      location: "Chennai",
      rating: 5,
      date: "April 2, 2026",
      text: "An excellent therapy center. I got complete relief from my neck pain. Kudos to the doctor couple.",
      verified: true,
      gradientIndex: 1,
      logoIndex: 1
    },
    {
      id: 3,
      name: "Sathya",
      location: "Perambur, Chennai",
      rating: 5,
      date: "April 10, 2026",
      text: "We have been taking our child for occupational therapy for the past six months, and we have seen remarkable improvement. The environment is welcoming, child-friendly, and professionally managed. The therapists are not only skilled but also very attentive in addressing our child's specific needs. Their personalized approach and dedication to progress have given us confidence in the treatment. We are truly grateful for the positive changes we are witnessing in our child's development.",
      verified: true,
      gradientIndex: 2,
      logoIndex: 2
    }
  ];

  const avatarGradients = [
    'from-[#0a2540] to-teal-600',
    'from-[#0a2540] to-teal-600',
    'from-[#0a2540] to-teal-600'
  ];

  const cardLogos = [
    <FaHeartbeat className="text-teal-500" />,
    <FaHeartbeat className="text-teal-500" />,
    <FaHeartbeat className="text-teal-500" />
  ];

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

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

  const iconRotate = {
    hover: {
      rotate: 360,
      transition: { duration: 0.6 }
    }
  };

  const starVariants = {
    hidden: { scale: 0 },
    visible: (i) => ({
      scale: 1,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    })
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-16 bg-gradient-to-br from-gray-50 via-white to-teal-50/30 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <motion.div 
        animate={floatAnimation}
        className="absolute top-20 right-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl"
      ></motion.div>
      <motion.div 
        animate={floatAnimation}
        className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl"
        style={{ animationDelay: '1.5s' }}
      ></motion.div>
      <motion.div 
        animate={floatAnimation}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-100/10 rounded-full blur-3xl"
        style={{ animationDelay: '0.8s' }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <motion.div 
            animate={pulseAnimation}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 px-4 py-2 rounded-full mb-4 shadow-sm border border-teal-200/50"
          >
            <motion.span 
              animate={pulseAnimation}
              className="w-2 h-2 bg-teal-600 rounded-full"
            ></motion.span>
            <span className="text-sm font-bold">⭐ Patient Stories</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-3">
            What Our <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Patients Say</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-4 rounded-full"
          ></motion.div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real experiences from real patients who have recovered and regained their active lifestyle
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-teal-300 overflow-hidden h-full flex flex-col"
              >
                {/* Top bar with logo and rating */}
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                  className="flex justify-between items-center px-5 pt-4"
                >
                  <div className="flex items-center gap-2">
                    <motion.div 
                      variants={iconRotate}
                      whileHover="hover"
                      className="w-8 h-8 bg-gradient-to-r from-[#0a2540]/10 to-teal-600/10 rounded-lg flex items-center justify-center"
                    >
                      {cardLogos[testimonial.logoIndex % cardLogos.length]}
                    </motion.div>
                    <span className="text-xs text-gray-400 font-medium">Patient Story</span>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        custom={i}
                        variants={starVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <FaStar
                          className={`${i < testimonial.rating ? 'text-amber-400' : 'text-gray-200'} text-sm`}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Gradient Divider */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: idx * 0.1 + 0.3, duration: 0.6 }}
                  className={`h-1 bg-gradient-to-r ${avatarGradients[testimonial.gradientIndex]} mt-2`}
                ></motion.div>

                <div className="p-5 flex-1 flex flex-col">
                  {/* Quote Icon */}
                  <motion.div 
                    initial={{ rotate: -10, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 + 0.4 }}
                    className="mb-3"
                  >
                    <FaQuoteLeft className="text-teal-500/30 text-xl" />
                  </motion.div>

                  {/* Testimonial Text */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 + 0.5 }}
                    className="relative flex-1"
                  >
                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-5">
                      "{testimonial.text}"
                    </p>
                    
                    {/* Gradient fade for long text */}
                    {testimonial.text.length > 120 && (
                      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                    )}
                  </motion.div>

                  {/* Patient Info */}
                  <motion.div 
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 + 0.6 }}
                    className="flex items-center gap-3 mt-4 pt-3 border-t border-gray-100"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className={`w-10 h-10 rounded-full bg-gradient-to-r ${avatarGradients[testimonial.gradientIndex]} flex items-center justify-center text-white font-bold text-sm shadow-sm flex-shrink-0`}
                    >
                      {getInitials(testimonial.name)}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-[#0a2540] text-sm truncate">{testimonial.name}</h3>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 flex-wrap">
                        <FaMapMarkerAlt className="text-teal-600 text-[10px]" />
                        <span>{testimonial.location}</span>
                        <span className="text-gray-300">•</span>
                        <FaRegClock className="text-teal-600 text-[10px]" />
                        <span>{testimonial.date}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Bottom Actions */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 + 0.7 }}
                    className="flex items-center justify-between mt-3 pt-2 border-t border-gray-50"
                  >
                    {/* Verified Badge */}
                    {testimonial.verified && (
                      <motion.span 
                        whileHover={{ scale: 1.05 }}
                        className="px-2 py-0.5 bg-green-50 text-green-600 text-[10px] rounded-full flex items-center gap-1"
                      >
                        <FaCheckCircle className="text-[9px]" /> Verified
                      </motion.span>
                    )}
                  </motion.div>

                  {/* Read More Button */}
                  <Link to="/testimonials" className="mt-3">
                    <motion.button 
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full group/btn flex items-center justify-center gap-2 bg-gradient-to-r from-[#0a2540] to-teal-700 hover:from-teal-700 hover:to-[#0a2540] text-white py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg"
                    >
                      <span>Read Full Story</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <FaArrowRight />
                      </motion.span>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Testimonials Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/testimonials">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
            >
              <span>View All Testimonials</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight />
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center mt-6"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="inline-flex flex-wrap items-center justify-center gap-4 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md border border-gray-100/50"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaStar className="text-yellow-400 text-sm" />
                  </motion.div>
                ))}
              </div>
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="text-sm font-bold text-gray-700"
              >
                4.8/5
              </motion.span>
            </div>
          
            <div className="hidden sm:block w-px h-6 bg-gray-200"></div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-2"
            >
              <span className="text-sm font-bold text-gray-700">⭐ Google Reviews</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TestimonialsHero;
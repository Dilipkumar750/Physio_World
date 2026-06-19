import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus, FaHome, FaCalendarAlt, FaUserMd, FaDumbbell, FaChevronRight, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default

  const faqs = [
    {
      question: "Do you provide home visit physiotherapy?",
      answer: "Yes, we provide home physiotherapy services across Chennai.",
      icon: <FaHome className="text-teal-500" />
    },
    {
      question: "How many sessions are required?",
      answer: "The number of sessions depends on your condition, pain level, and recovery goals.",
      icon: <FaCalendarAlt className="text-teal-500" />
    },
    {
      question: "Do I need a doctor referral?",
      answer: "No. You can directly book an assessment session.",
      icon: <FaUserMd className="text-teal-500" />
    },
    {
      question: "What conditions do you treat?",
      answer: "Orthopedic, neurological, sports injuries, post-surgical rehabilitation, and chronic pain conditions.",
      icon: <FaDumbbell className="text-teal-500" />
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
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

  const answerVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-teal-50/30 relative overflow-hidden">
      {/* Decorative Background Elements with Animations */}
      <motion.div 
        animate={floatAnimation}
        className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      ></motion.div>
      <motion.div 
        animate={floatAnimation}
        className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        style={{ animationDelay: '1.5s' }}
      ></motion.div>
      <motion.div 
        animate={floatAnimation}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        style={{ animationDelay: '0.8s' }}
      ></motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Animations */}
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          {/* Badge */}
          <motion.div 
            animate={pulseAnimation}
            className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-4"
          >
            <motion.span 
              animate={pulseAnimation}
              className="w-2 h-2 bg-teal-600 rounded-full"
            ></motion.span>
            <span className="text-sm font-semibold">📋 Help Center</span>
          </motion.div>
          
          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-lg"
          >
            Everything you need to know about our physiotherapy services
          </motion.p>
          
          {/* Decorative line */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mt-6 rounded-full"
          ></motion.div>
        </motion.div>

        {/* FAQ Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-white rounded-2xl shadow-md transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'shadow-xl ring-2 ring-teal-200' : 'hover:shadow-lg'
                }`}
              >
                {/* Question Button */}
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4 flex-1">
                    {/* Icon Container */}
                    <motion.div 
                      variants={iconRotate}
                      whileHover="hover"
                      className="w-12 h-12 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl flex items-center justify-center flex-shrink-0"
                    >
                      {faq.icon}
                    </motion.div>
                    
                    {/* Question Text */}
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  
                  {/* Toggle Icon */}
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                      openIndex === index ? 'bg-teal-500' : 'bg-teal-100'
                    }`}
                  >
                    {openIndex === index ? (
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaMinus className={`text-sm transition-all duration-300 ${
                          openIndex === index ? 'text-white' : 'text-teal-600'
                        }`} />
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaPlus className={`text-sm transition-all duration-300 ${
                          openIndex === index ? 'text-white' : 'text-teal-600'
                        }`} />
                      </motion.div>
                    )}
                  </motion.div>
                </motion.button>
                
                {/* Answer Panel with Animation */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={answerVariants}
                    >
                      <div className="px-5 pb-5 md:px-6 md:pb-6 pt-2">
                        <motion.div 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                          className="flex gap-3"
                        >
                          <motion.div 
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ delay: 0.2 }}
                            className="w-1 bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full"
                          ></motion.div>
                          <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-600 leading-relaxed text-sm md:text-base"
                          >
                            {faq.answer}
                          </motion.p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section Below FAQ */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 md:mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-6 md:p-8 text-center border border-teal-100">
            <h3 className="text-xl md:text-2xl font-bold text-[#0a2540] mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-4">
              We're here to help you. Contact us for more information.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#0a2540] to-teal-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Contact Us
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaChevronRight />
                  </motion.span>
                </motion.button>
              </Link>
              <a href="https://wa.me/917904818494" target="_blank" rel="noopener noreferrer">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <FaWhatsapp className="text-lg" />
                  Chat on WhatsApp
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
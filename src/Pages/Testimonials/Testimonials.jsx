import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaStar, FaQuoteLeft, FaThumbsUp, FaCalendarAlt,
  FaUser, FaMapMarkerAlt, FaRegSmile, FaArrowRight, FaPhoneAlt,
  FaCheckCircle, FaRegHeart, FaShareAlt, FaFacebook, FaTwitter, FaWhatsapp,
  FaStethoscope, FaAward, FaUsers, FaRegCommentDots,
  FaGoogle, FaStarOfLife, FaHandHoldingHeart, FaLungs, FaBone,
  FaRunning, FaBrain, FaRegClock, FaShieldAlt, FaHeartbeat,
  FaNotesMedical, FaQuoteRight, FaRegStar, FaRegThumbsUp,
  FaMicroscope, FaJoint, FaTooth, FaBaby, FaChild, FaFemale, FaMale,
  FaClinicMedical, FaHospitalUser, FaLaptopMedical
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const avatarGradients = [
    'from-[#0a2540] to-teal-600',
    'from-[#0a2540] to-teal-600',
    'from-[#0a2540] to-teal-600',
    'from-[#0a2540] to-teal-600',
    'from-[#0a2540] to-teal-600',
    'from-[#0a2540] to-teal-600',
    'from-[#0a2540] to-teal-600',
    'from-[#0a2540] to-teal-600',
    'from-[#0a2540] to-teal-600',
    'from-[#0a2540] to-teal-600',
    'from-[#0a2540] to-teal-600',
    'from-[#0a2540] to-teal-600',
    'from-[#0a2540] to-teal-600',
    'from-[#0a2540] to-teal-600',
    'from-[#0a2540] to-teal-600',
    'from-[#0a2540] to-teal-600',
  ];

  const cardLogos = [
    <FaMicroscope className="text-teal-500" />,
    <FaJoint className="text-teal-500" />,
    <FaBrain className="text-teal-500" />,
    <FaHeartbeat className="text-teal-500" />,
    <FaLungs className="text-teal-500" />,
    <FaRunning className="text-teal-500" />,
    <FaChild className="text-teal-500" />,
    <FaMicroscope className="text-teal-500" />
  ];

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
    },
    {
      id: 4,
      name: "Dr. Anonymous",
      location: "Chennai",
      rating: 5,
      date: "March 28, 2026",
      text: "Good clinical set up with excellent staffs taking care of children in OT sessions and receiving them well and guiding throughout the treatment session. Physio staffs are very kind and friendly with the patients. Must visit place for pain relief and recovery.",
      verified: true,
      gradientIndex: 3,
      logoIndex: 3
    },
    {
      id: 5,
      name: "Jayanthi Natarajan",
      location: "Chennai",
      rating: 5,
      date: "April 5, 2026",
      text: "Excellent treatment given by Mr. Ganesh. He was able to correctly identify the pain triggers & points & provide treatment accordingly. He also diligently followed up & gave suitable suggestions throughout. I take this opportunity to thank him for providing me relief from pain 🙏",
      verified: true,
      gradientIndex: 4,
      logoIndex: 4
    },
    {
      id: 6,
      name: "Shreelaa Sivakumar",
      location: "Perambur, Chennai",
      rating: 4,
      date: "March 20, 2026",
      text: "We see a very good improvement in child behaviour and development. Compared to other OT centers, session duration is longer and therapists are understandable and professional. Parents are also given guidance and training to improve children's mental health at home.",
      verified: true,
      gradientIndex: 5,
      logoIndex: 5
    },
    {
      id: 7,
      name: "Bharath Kumar",
      location: "Peravallur, Chennai",
      rating: 5,
      date: "April 8, 2026",
      text: "Best physiotherapist! Took treatment for my lower back pain. I can feel very good improvement within few days. Dr. Sandhiya concentrated more on workouts for strengthening which reduced my pain drastically. Best physio clinic.",
      verified: true,
      gradientIndex: 6,
      logoIndex: 6
    },
    {
      id: 8,
      name: "Rajesh Vasudevan",
      location: "Chennai",
      rating: 5,
      date: "April 12, 2026",
      text: "I visited PhysioWorld for my neck pain and they suggested the best treatments. They started my session with advanced modalities which helped me a lot to reduce my pain. I'm very happy with the treatment and the staff. I would highly recommend PhysioWorld for best treatment. One of the best physio clinic in Chennai.",
      verified: true,
      gradientIndex: 7,
      logoIndex: 7
    },
    {
      id: 9,
      name: "Sharmila Ramesh",
      location: "Perambur, Chennai",
      rating: 5,
      date: "April 15, 2026",
      text: "Nice and price affordable place for pain relief. They concentrate on exercises more, which takes the patient a long way toward recovery without dependency on medications.",
      verified: true,
      gradientIndex: 0,
      logoIndex: 0
    },
    {
      id: 10,
      name: "Rajesh M",
      location: "Chennai",
      rating: 5,
      date: "April 18, 2026",
      text: "My pain is reduced drastically. I visited many physio centers but the way in PhysioWorld Dr. Sandhiya handled was very effective. Thanks for the solution.",
      verified: true,
      gradientIndex: 1,
      logoIndex: 1
    },
    {
      id: 11,
      name: "Murthy Venkatesan",
      location: "Chennai",
      rating: 5,
      date: "April 20, 2026",
      text: "Very good clinic with all facilities available. Nice treatment to all problems. Very good atmosphere also.",
      verified: true,
      gradientIndex: 2,
      logoIndex: 2
    },
    {
      id: 12,
      name: "Samuel Jabez S",
      location: "Kolathur, Chennai",
      rating: 5,
      date: "April 22, 2026",
      text: "Hands down the best physiotherapist in Kolathur, especially for athletes and sports people. I was having back injury for 8 years, which recently flared up into massive spasms while bowling. I could barely walk. Skeptically walked in to his centre and found the best in Kolathur. What I loved about the treatment here is that it wasn't just the traditional IFT/Traction stuff. He immediately got to work on pain management, releasing the tight areas with a massage gun and some stretches. He made me do my bowling action before leaving the clinic on my first day. We did 10 days of solid rehab sessions mostly strength/mobility exercises, using IFT and the massage gun when needed. Now, I'm back to cricket and way more confidence. He genuinely takes the time to find your weak muscle and tailors the plan to your body. Absolutely brilliant. Thanks Sir.",
      verified: true,
      gradientIndex: 3,
      logoIndex: 3
    },
    {
      id: 13,
      name: "Esther Catherine",
      location: "Chennai",
      rating: 5,
      date: "April 25, 2026",
      text: "Hi this is a genuine review for Dr. Ganesh and his wife who really did their best. My father was in need of physiotherapy support, we came to know about PhysioWorld Dr. Ganesh who came and attended my father personally. Never seen a better therapist and a person who has a good face value, considered my father's age and patiently worked with him for his progressive recovery. We are very happy that we chose PhysioWorld. Would definitely recommend to many people.",
      verified: true,
      gradientIndex: 4,
      logoIndex: 4
    },
    {
      id: 14,
      name: "Always Star",
      location: "Chennai",
      rating: 5,
      date: "April 28, 2026",
      text: "Had an ankle injury. All doctors only wanted money and told all expensive treatments. Not only this therapist is encouraging but also very down to earth and only focus on healing the injury rather than focusing on money. Also gave weight loss tips and training too. Great experience overall, definitely recommend!",
      verified: true,
      gradientIndex: 5,
      logoIndex: 5
    },
    {
      id: 15,
      name: "Lathish Gangadharan",
      location: "Chennai",
      rating: 5,
      date: "April 30, 2026",
      text: "Very satisfied with the treatment. Dr. Ganesh was professional, patient, and thorough in identifying the cause of my pain. I'm feeling much better now. Highly recommended. Thank you, Dr. Ganesh! 🙏",
      verified: true,
      gradientIndex: 6,
      logoIndex: 6
    },
    {
      id: 16,
      name: "Joseph Azariah Raj",
      location: "Chennai",
      rating: 5,
      date: "May 2, 2026",
      text: "PhysioWorld pushed me beyond my limits and helped rebuild my body with better movement, strength, and confidence.",
      verified: true,
      gradientIndex: 7,
      logoIndex: 7
    }
  ];

  // Google Reviews URL
  const googleReviewsUrl = "https://www.google.com/search?sca_esv=aaf52bfb74f73fe9&sxsrf=APpeQntfYP4e7fy1F0mG2aNajoPWbXDIcg:1781870142132&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_1JyJyEuxfnMZsaXl4Q882Q9h_822SyPrG8UtExlEqnfN3Pq7QjU0UNgxZOSp1Dxsmwj6Mm6CsDC_4Af9brRW-Gn7t9D&q=PHYSIO+WORLD+Reviews&sa=X&ved=2ahUKEwj77u3Gn5OVAxVUSGwGHTYhM_UQ0bkNegQIHhAF&biw=1366&bih=633&dpr=1";

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

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
      {/* Header with animations */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] text-white py-16 sm:py-20 mb-8 sm:mb-12 overflow-hidden"
      >
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-0"
        >
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="container mx-auto px-3 sm:px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 mb-4 sm:mb-6 backdrop-blur-sm border border-white/20"
            >
              <FaHeartbeat className="text-teal-200 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium tracking-wide text-teal-100">PATIENT STORIES</span>
            </motion.div>

            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4"
            >
              Patient <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">Testimonials</span>
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-teal-100 max-w-2xl mx-auto px-2"
            >
              Real stories of healing, recovery, and hope from our valued patients
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      <div className="container mx-auto px-3 sm:px-4 pb-12 sm:pb-20">

        {/* Testimonials Grid - Each card redirects to Google Reviews */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >
          <AnimatePresence>
            {testimonials.map((testimonial, idx) => (
              <motion.a
                key={testimonial.id}
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="block cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-xl"
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-100 h-full flex flex-col"
                >
                  {/* Top bar with logo */}
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 + 0.2 }}
                    className="flex justify-between items-center px-4 sm:px-5 pt-3"
                  >
                    <div className="flex items-center gap-2">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-[#0a2540]/10 to-teal-600/10 rounded-lg flex items-center justify-center"
                      >
                        {cardLogos[testimonial.logoIndex % cardLogos.length]}
                      </motion.div>
                      <span className="text-[10px] sm:text-xs text-gray-400">Patient Story</span>
                    </div>
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: idx * 0.05 + 0.3 }}
                      className="flex gap-0.5"
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaStar
                            className={`${i < testimonial.rating ? 'text-amber-400' : 'text-gray-200'} text-[10px] sm:text-xs`}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* Divider with animation */}
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: idx * 0.05 + 0.3, duration: 0.6 }}
                    className={`h-1 bg-gradient-to-r ${avatarGradients[testimonial.gradientIndex]} mt-2`}
                  ></motion.div>

                  <div className="p-4 sm:p-5 flex-1 flex flex-col">
                    {/* Quote */}
                    <motion.div 
                      initial={{ rotate: -10, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.05 + 0.4 }}
                      className="mb-2 sm:mb-3"
                    >
                      <FaQuoteLeft className="text-teal-500/30 text-lg sm:text-xl" />
                    </motion.div>

                    {/* Text */}
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.05 + 0.5 }}
                      className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm flex-1 line-clamp-6"
                    >
                      "{testimonial.text}"
                    </motion.p>

                    {/* Patient Info */}
                    <motion.div 
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.05 + 0.6 }}
                      className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r ${avatarGradients[testimonial.gradientIndex]} flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-sm flex-shrink-0`}
                      >
                        {getInitials(testimonial.name)}
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-[#0a2540] text-xs sm:text-sm">{testimonial.name}</h3>
                        <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-gray-400">
                          <FaMapMarkerAlt className="text-teal-600 text-[8px] sm:text-[10px]" />
                          <span>{testimonial.location}</span>
                          <span className="text-gray-300 hidden sm:inline">•</span>
                          <FaRegClock className="text-teal-600 text-[8px] sm:text-[10px] hidden sm:inline" />
                          <span className="hidden sm:inline">{testimonial.date}</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Verified Badge */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 + 0.7 }}
                      className="flex items-center gap-1.5 mb-2 sm:mb-3"
                    >
                      {testimonial.verified && (
                        <motion.span 
                          whileHover={{ scale: 1.05 }}
                          className="px-2 py-0.5 bg-green-50 text-green-600 text-[10px] sm:text-[11px] rounded-full flex items-center gap-1"
                        >
                          <FaCheckCircle className="text-[8px] sm:text-[10px]" /> Verified Review
                        </motion.span>
                      )}
                    </motion.div>
                    
                    {/* Click hint - subtle indicator */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.05 + 0.8 }}
                      className="text-[10px] text-teal-500/50 text-center mt-1"
                    >
                      Click to view on Google
                    </motion.div>
                  </div>
                </motion.div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section with animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-10 md:mt-12"
        >
          <motion.div 
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] shadow-2xl"
          >
            <motion.div 
              animate={floatAnimation}
              className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full blur-3xl"
            ></motion.div>
            <motion.div 
              animate={floatAnimation}
              className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full blur-3xl"
              style={{ animationDelay: '1.5s' }}
            ></motion.div>

            <div className="relative py-8 sm:py-10 px-4 sm:px-6 text-center">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 backdrop-blur-sm border border-white/20"
              >
                <FaHeartbeat className="text-teal-200 text-sm animate-pulse" />
                <span className="text-[10px] sm:text-xs font-medium text-teal-100">SHARE YOUR EXPERIENCE</span>
              </motion.div>
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2"
              >
                Share Your Healing Journey
              </motion.h2>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-teal-100 mb-4 sm:mb-6 max-w-md mx-auto text-xs sm:text-sm px-2"
              >
                Your story could inspire someone to take the first step toward recovery
              </motion.p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 px-2">
                <motion.a
                  href={googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-white text-[#0a2540] px-6 py-2 rounded-full font-semibold text-sm hover:bg-gray-50 transition flex items-center justify-center gap-2 shadow-lg"
                  >
                    Write a Review
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaArrowRight className="text-xs" />
                    </motion.span>
                  </motion.button>
                </motion.a>
                <motion.a 
                  href="tel:+917904818494"
                  className="w-full sm:w-auto"
                >
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto border border-white/30 text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-white/10 transition flex items-center justify-center gap-2"
                  >
                    <FaPhoneAlt className="text-xs" />
                    Call Now
                  </motion.button>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Google Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 sm:mt-8 bg-white rounded-xl shadow-md p-4 sm:p-6 text-center border border-gray-100"
        >
          <motion.a 
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer hover:opacity-80 transition-opacity duration-300"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              className="flex justify-center items-center gap-2 mb-2 sm:mb-3"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-[#0a2540] to-teal-600 p-1.5 rounded-full"
              >
                <FaGoogle className="text-white text-xs sm:text-sm" />
              </motion.div>
              <h3 className="text-base sm:text-lg font-bold text-[#0a2540]">Google Reviews</h3>
            </motion.div>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center gap-0.5 mb-1 sm:mb-2"
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaStar className="text-amber-400 text-lg sm:text-xl" />
                </motion.div>
              ))}
            </motion.div>
            <motion.h4 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl sm:text-2xl font-bold text-[#0a2540] mb-0.5 sm:mb-1"
            >
              Rated 4.8/5
            </motion.h4>
            <motion.p 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-gray-500 text-xs sm:text-sm"
            >
              Based on 50+ authentic patient reviews
            </motion.p>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
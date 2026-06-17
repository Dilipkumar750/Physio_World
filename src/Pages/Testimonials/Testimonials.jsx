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
  const [filter, setFilter] = useState('all');
  const [showShare, setShowShare] = useState(null);

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
      condition: "Back Pain",
      treatment: "Pain Management",
      rating: 5,
      date: "March 15, 2026",
      text: "I had been struggling with pain for a while, and after taking treatment here I'm perfectly okay now. The physiotherapist Dr. Ganesh was very knowledgeable, patient, and focused on the root cause rather than just symptoms. The exercises and treatment made a huge difference. I'm really grateful and would definitely recommend him. Thank you so much Dr. Ganesh",
      verified: true,
      gradientIndex: 0,
      logoIndex: 0
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Peravallur, Chennai",
      condition: "Knee Surgery",
      treatment: "Post-Surgical Rehabilitation",
      rating: 5,
      date: "April 2, 2026",
      text: "Good clinical set up with excellent staffs taking care of children in OT sessions and receiving them well and guiding throughout the treatment session. Physio staffs are very kind and friendly with the patients . Must visit place for pain relief and recovery.",
      verified: true,
      gradientIndex: 1,
      logoIndex: 1
    },
    {
      id: 3,
      name: "Sathya",
      location: "Perambur, Chennai",
      condition: "Shoulder Pain",
      treatment: "Sports Rehabilitation",
      rating: 5,
      date: "April 10, 2026",
      text: "We have been taking our child for occupational therapy for the past six months, and we have seen remarkable improvement. The environment is welcoming, child-friendly, and professionally managed. The therapists are not only skilled but also very attentive in addressing our child's specific needs.",
      verified: true,
      gradientIndex: 2,
      logoIndex: 2
    },
    {
      id: 4,
      name: "Jayanthi Natarajan",
      location: "Chennai",
      condition: "Stroke Recovery",
      treatment: "Stroke Rehabilitation",
      rating: 5,
      date: "March 28, 2026",
      text: "Excellent treatment given by Mr. Ganesh. He was able to correctly identify the pain triggers & points & provide treatment accordingly. He also diligently followed up & gave suitable suggestions throughout. I take this opportunity to thank him for providing me relief from pain.",
      verified: true,
      gradientIndex: 3,
      logoIndex: 3
    },
    {
      id: 5,
      name: "Shreelaa Sivakumar",
      location: "Perambur, Chennai",
      condition: "Neck Pain",
      treatment: "Pain Management",
      rating: 4,
      date: "April 5, 2026",
      text: "We see a very good improvement in child behaviour and development. Compared to other OT centers, session duration is longer and therapists are understandable and professional. Parents are also given guidance to improve children's mental health at home.",
      verified: true,
      gradientIndex: 4,
      logoIndex: 4
    },
    {
      id: 6,
      name: "Bharath Kumar",
      location: "Peravallur, Chennai",
      condition: "Arthritis",
      treatment: "Geriatric Physiotherapy",
      rating: 5,
      date: "March 20, 2026",
      text: "Best physiotherapist! Took treatment for my lower back pain. I can feel very good improvement within few days. Dr. Sandhiya concentrated more on workouts for strengthening which reduced my pain drastically. Best physio clinic.",
      verified: true,
      gradientIndex: 5,
      logoIndex: 5
    },
    {
      id: 7,
      name: "Rajesh Vasudevan",
      location: "Chennai",
      condition: "Sports Injury",
      treatment: "Sports Rehabilitation",
      rating: 5,
      date: "April 8, 2026",
      text: "I visited PhysioWorld for my neck pain and they suggested the best treatments. They started my session with advanced modalities which helped me a lot to reduce my pain. I'm very happy with the treatment and the staff. I would highly recommend PhysioWorld.",
      verified: true,
      gradientIndex: 6,
      logoIndex: 6
    },
    {
      id: 8,
      name: "Sharmila Ramesh",
      location: "Perambur, Chennai",
      condition: "Migraine",
      treatment: "Migraine & Headache Therapy",
      rating: 5,
      date: "April 12, 2026",
      text: "Nice and price affordable place for pain relief. They concentrate on exercises more, which takes the patient a long way toward recovery without dependency on medications.",
      verified: true,
      gradientIndex: 0,
      logoIndex: 7
    }
  ];

  const stats = [
    { icon: <FaHeartbeat />, value: "98%", label: "Patient Satisfaction" },
    { icon: <FaThumbsUp />, value: "500+", label: "5-Star Reviews" },
    { icon: <FaUsers />, value: "1000+", label: "Happy Patients" },
    { icon: <FaAward />, value: "100%", label: "Recommended" }
  ];

  const treatments = [
    "All", "Pain Management", "Sports Rehabilitation", "Stroke Rehabilitation", 
    "Geriatric Physiotherapy", "Post-Surgical Rehabilitation", "Migraine & Headache Therapy"
  ];

  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.treatment.toLowerCase().includes(filter.toLowerCase()));

  const shareOnWhatsApp = (testimonial) => {
    const text = `Check out this review for PhysioWorld: "${testimonial.text.substring(0, 100)}..." - ${testimonial.name}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCardClick = () => {
    window.open('https://www.google.com/search?q=physio+world+chennai', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header with requested gradient */}
      <div className="relative bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] text-white py-20 mb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-white/20 rounded-full px-5 py-2 mb-6 backdrop-blur-sm"
            >
              <FaHeartbeat className="text-teal-200" />
              <span className="text-sm font-medium tracking-wide">TRUSTED BY 1000+ PATIENTS</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Patient Testimonials
            </h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Real stories of healing, recovery, and hope from our valued patients
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-xl p-5 text-center shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-[#0a2540] to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-3 text-white text-xl shadow-md">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#0a2540] mb-0.5">{stat.value}</h3>
              <p className="text-gray-500 text-xs font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {treatments.map((treatment) => (
            <button
              key={treatment}
              onClick={() => setFilter(treatment.toLowerCase())}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === treatment.toLowerCase()
                  ? 'bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {treatment}
            </button>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredTestimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                whileHover={{ y: -4 }}
                onClick={handleCardClick}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100">
                  {/* Top bar with logo */}
                  <div className="flex justify-between items-center px-5 pt-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#0a2540]/10 to-teal-600/10 rounded-lg flex items-center justify-center">
                        {cardLogos[testimonial.logoIndex % cardLogos.length]}
                      </div>
                      <span className="text-xs text-gray-400">Patient Story</span>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${i < testimonial.rating ? 'text-amber-400' : 'text-gray-200'} text-xs`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Divider */}
                  <div className={`h-1 bg-gradient-to-r ${avatarGradients[testimonial.gradientIndex]} mt-2`}></div>
                  
                  <div className="p-5">
                    {/* Quote */}
                    <div className="mb-3">
                      <FaQuoteLeft className="text-teal-500/30 text-xl" />
                    </div>

                    {/* Text */}
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-4">
                      "{testimonial.text}"
                    </p>

                    {/* Patient Info */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${avatarGradients[testimonial.gradientIndex]} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                        {getInitials(testimonial.name)}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0a2540] text-sm">{testimonial.name}</h3>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <FaMapMarkerAlt className="text-teal-600 text-[10px]" />
                          <span>{testimonial.location}</span>
                          <span className="text-gray-300">•</span>
                          <FaRegClock className="text-teal-600 text-[10px]" />
                          <span>{testimonial.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3 pt-2 border-t border-gray-50">
                      <span className="px-2 py-0.5 bg-teal-50 text-teal-700 text-[11px] rounded-full flex items-center gap-1">
                        <FaMicroscope className="text-[10px]" /> {testimonial.condition}
                      </span>
                      <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[11px] rounded-full flex items-center gap-1">
                        <FaHandHoldingHeart className="text-[10px]" /> {testimonial.treatment}
                      </span>
                      {testimonial.verified && (
                        <span className="px-2 py-0.5 bg-green-50 text-green-600 text-[11px] rounded-full flex items-center gap-1">
                          <FaCheckCircle className="text-[10px]" /> Verified
                        </span>
                      )}
                    </div>

                    {/* Share */}
                    <div className="relative" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => setShowShare(showShare === testimonial.id ? null : testimonial.id)}
                        className="flex items-center gap-1.5 text-gray-400 hover:text-teal-600 transition-colors duration-300 text-xs"
                      >
                        <FaShareAlt className="text-[11px]" />
                        <span>Share</span>
                      </button>
                      
                      <AnimatePresence>
                        {showShare === testimonial.id && (
                          <motion.div 
                            initial={{ opacity: 0, y: -10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.9 }}
                            className="absolute left-0 mt-2 bg-white rounded-lg shadow-lg p-1.5 flex gap-1.5 z-10 border"
                          >
                            <button onClick={() => shareOnWhatsApp(testimonial)} className="text-green-500 hover:scale-110 transition p-1 rounded-full">
                              <FaWhatsapp size={14} />
                            </button>
                            <button className="text-blue-600 hover:scale-110 transition p-1 rounded-full">
                              <FaFacebook size={14} />
                            </button>
                            <button className="text-sky-400 hover:scale-110 transition p-1 rounded-full">
                              <FaTwitter size={14} />
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        <AnimatePresence>
          {filteredTestimonials.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-16 bg-white rounded-xl shadow-md"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRegCommentDots className="text-2xl text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-600 mb-1">No testimonials found</h3>
              <p className="text-gray-400 text-sm">Try a different filter category</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section with gradient */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative py-10 px-6 text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 mb-4 backdrop-blur-sm">
                <FaHeartbeat className="text-teal-200 text-sm" />
                <span className="text-xs font-medium text-teal-100">SHARE YOUR EXPERIENCE</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Share Your Healing Journey</h2>
              <p className="text-teal-100 mb-6 max-w-md mx-auto text-sm">
                Your story could inspire someone to take the first step toward recovery
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/contact">
                  <button className="bg-white text-[#0a2540] px-6 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition flex items-center gap-2 shadow-md">
                    Write a Review
                    <FaArrowRight className="text-xs" />
                  </button>
                </Link>
                <a href="tel:+917904818494">
                  <button className="border border-white/30 text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-white/10 transition flex items-center gap-2">
                    <FaPhoneAlt className="text-xs" />
                    Call Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Google Reviews */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 bg-white rounded-xl shadow-md p-6 text-center"
        >
          <div className="flex justify-center items-center gap-2 mb-3">
            <div className="bg-gradient-to-r from-[#0a2540] to-teal-600 p-1.5 rounded-full">
              <FaGoogle className="text-white text-sm" />
            </div>
            <h3 className="text-lg font-bold text-[#0a2540]">Google Reviews</h3>
          </div>
          <div className="flex justify-center gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-amber-400 text-xl" />
            ))}
          </div>
          <h4 className="text-2xl font-bold text-[#0a2540] mb-1">Rated 4.9/5</h4>
          <p className="text-gray-500 text-sm mb-3">Based on 500+ authentic patient reviews</p>
          <div className="max-w-xs mx-auto">
            <div className="flex justify-between text-xs text-gray-600 mb-0.5">
              <span>Patient Satisfaction</span>
              <span>98%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '98%' }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-full bg-gradient-to-r from-[#0a2540] to-teal-600 rounded-full"
              ></motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
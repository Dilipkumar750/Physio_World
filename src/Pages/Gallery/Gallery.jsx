import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTimes, FaChevronLeft, FaChevronRight, FaImages, 
  FaHeartbeat, FaCamera, FaCalendarAlt, FaPhotoVideo,
  FaUserMd, FaClinicMedical, FaAward, FaUsers,
  FaCheckCircle, FaHome, FaBolt, FaStar, FaShieldAlt
} from 'react-icons/fa';
import treatmentRoom from "../../assets/treatment_room.jpg";
import rehabilitation from "../../assets/rehabilitation.webp";
import waitingarea from "../../assets/waitingarea.jpg";
import manualTherapy from "../../assets/manualtheraphy.webp";
import electrotherapy from "../../assets/electrotheraphy.jpg";
import machine from "../../assets/machine.webp";
import excercise from "../../assets/excercise.jpg";
import expert from "../../assets/expert.jpg";
import image01 from "../../assets/image01.jpeg";
import image02 from "../../assets/image02.jpeg";
import image03 from "../../assets/image03.jpeg";
import image04 from "../../assets/image04.jpeg";
import image05 from "../../assets/image05.jpeg";
import Faq from './Faq';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery Images
  const galleryImages = [
    { id: 1, image: treatmentRoom, title: "Treatment Room" },
    { id: 2, image: rehabilitation, title: "Rehabilitation Center" },
    { id: 3, image: waitingarea, title: "Waiting Area" },
    { id: 4, image: manualTherapy, title: "Manual Therapy" },
    { id: 5, image: electrotherapy, title: "Electrotherapy" },
    { id: 6, image: machine, title: "Modern Equipment" },
    { id: 7, image: excercise, title: "Exercise Therapy" },
    { id: 8, image: expert, title: "Expert Care" },
    { id: 9, image: image01, title: "Patient Care" },
    { id: 10, image: image02, title: "Therapy Session" },
    { id: 11, image: image03, title: "Clinic Facility" },
    { id: 12, image: image04, title: "Treatment Process" },
    { id: 13, image: image05, title: "Recovery Journey" },
  ];

  const stats = [
    { icon: <FaCamera />, value: "13+", label: "Moments Captured" },
    { icon: <FaUsers />, value: "1000+", label: "Happy Patients" },
    { icon: <FaAward />, value: "4+", label: "Years of Excellence" }
  ];

  // Premium Highlights Data
  const premiumHighlights = [
    { icon: <FaCheckCircle />, title: "Personalized Treatment Plans", color: "from-emerald-500 to-teal-500", desc: "Tailored recovery plans for every patient" },
    { icon: <FaHome />, title: "Professional Home Visit Care", color: "from-blue-500 to-cyan-500", desc: "Quality care delivered at your doorstep" },
    { icon: <FaBolt />, title: "Evidence-Based Physiotherapy", color: "from-purple-500 to-pink-500", desc: "Treatments backed by clinical research" },
    { icon: <FaUserMd />, title: "Patient-Focused Rehabilitation", color: "from-orange-500 to-red-500", desc: "You are at the center of our care" },
    { icon: <FaStar />, title: "Modern Therapy Techniques", color: "from-yellow-500 to-amber-500", desc: "Latest equipment and methodologies" },
    { icon: <FaShieldAlt />, title: "Trusted Recovery Support", color: "from-indigo-500 to-purple-500", desc: "Supporting you every step of the way" }
  ];

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (currentIndex < galleryImages.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setSelectedImage(galleryImages[nextIndex]);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      setSelectedImage(galleryImages[prevIndex]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Header with gradient */}
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
              <span className="text-sm font-medium tracking-wide">OUR VISUAL JOURNEY</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Our Gallery
            </h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Take a glimpse into our state-of-the-art facility and compassionate care
            </p>
          </motion.div>
        </div>
        
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative h-12 w-full text-gray-50">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-xl p-5 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-[#0a2540] to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-3 text-white text-xl shadow-md">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#0a2540] mb-0.5">{stat.value}</h3>
              <p className="text-gray-500 text-xs font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery Grid - 4x4 Layout */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
        >
          <AnimatePresence>
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{ y: -4 }}
                onClick={() => openLightbox(image, index)}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/80 via-teal-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <FaImages className="text-white text-xl" />
                      </div>
                      <p className="text-white text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        View
                      </p>
                    </div>
                  </div>
                  <div className="p-2 bg-white">
                    <p className="text-xs text-gray-500 text-center truncate">{image.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Premium Highlight Section - Why Choose PhysioWorld */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-[#0a2540] to-teal-600 px-6 py-5">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 mb-2 w-fit">
              <FaAward className="text-teal-200 text-sm" />
              <span className="text-xs font-medium text-teal-100">WHY TRUST US</span>
            </div>
            <h2 className="text-white text-2xl font-bold">Why Choose PhysioWorld?</h2>
            <p className="text-teal-100">Excellence in physiotherapy care</p>
          </div>
          
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumHighlights.map((highlight, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -3, scale: 1.02 }}
                className="text-center p-5 hover:shadow-lg rounded-xl transition-all duration-300 group bg-gray-50/50"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-full flex items-center justify-center mx-auto mb-3 transform group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <div className="text-white text-2xl">{highlight.icon}</div>
                </div>
                <h3 className="font-bold text-[#0a2540] mb-2">{highlight.title}</h3>
                <p className="text-gray-500 text-sm">{highlight.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section - Fixed the button href to proper Link */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative py-12 px-6 text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 mb-4 backdrop-blur-sm">
                <FaPhotoVideo className="text-teal-200 text-sm" />
                <span className="text-xs font-medium text-teal-100">VISIT OUR CLINIC</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Experience the Healing Environment</h2>
              <p className="text-teal-100 mb-8 max-w-md mx-auto">
                Book a consultation and see our facility in person
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/appointments">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-[#0a2540] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center gap-2 shadow-lg"
                  >
                    Book Appointment
                    <FaCalendarAlt />
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition flex items-center gap-2 shadow-lg"
                  >
                    Contact Us
                    <FaUserMd />
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-white hover:text-teal-400 transition text-3xl z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
            >
              <FaTimes />
            </button>
            
            {currentIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-gradient-to-r from-[#0a2540] to-teal-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <FaChevronLeft size={24} />
              </button>
            )}
            
            {currentIndex < galleryImages.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-gradient-to-r from-[#0a2540] to-teal-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <FaChevronRight size={24} />
              </button>
            )}
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-6xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[80vh] w-auto mx-auto rounded-2xl shadow-2xl border-2 border-white/20"
              />
              <div className="mt-4 text-center bg-black/50 backdrop-blur-md rounded-xl p-4 max-w-md mx-auto">
                <p className="text-white text-sm mb-2">{selectedImage.title}</p>
                <div className="flex justify-center items-center gap-3">
                  <div className="w-16 h-px bg-teal-500"></div>
                  <span className="text-gray-300 text-sm font-medium">
                    {currentIndex + 1} / {galleryImages.length}
                  </span>
                  <div className="w-16 h-px bg-teal-500"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAQ Component */}
      <Faq />
    </div>
  );
};

export default Gallery;
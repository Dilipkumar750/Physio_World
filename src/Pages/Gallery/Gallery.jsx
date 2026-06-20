import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTimes, FaChevronLeft, FaChevronRight, FaImages, 
  FaHeartbeat, FaCalendarAlt, FaArrowRight,
  FaPlay, FaPause, FaRegClock
} from 'react-icons/fa';

import image01 from "../../assets/Gallery/IMG_1455.jpg";
import image06 from "../../assets/Gallery/IMG_1452.jpg";
import image02 from "../../assets/Gallery/IMG_0533.jpg";
import image03 from "../../assets/Gallery/IMG_1472.jpg";
import image04 from "../../assets/Gallery/IMG_1482.jpg";
import image05 from "../../assets/Gallery/IMG_1467.jpg";
import image07 from "../../assets/image01.jpeg";
import image08 from "../../assets/image02.jpeg";
import image09 from "../../assets/image03.jpeg";
import image10 from "../../assets/image05.jpeg";
import image11 from "../../assets/image06.jpeg";
import image12 from "../../assets/image07.jpeg";
import image14 from "../../assets/image08.jpg";
import image13 from "../../assets/clinic.jpg";
import Faq from './Faq';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [loadedImages, setLoadedImages] = useState({});

  // Gallery Images
  const galleryImages = [
    { id: 1, image: image01 },
    { id: 2, image: image02 },
    { id: 3, image: image03 },
    { id: 4, image: image04 },
    { id: 5, image: image05 },
    { id: 6, image: image06 },
    { id: 7, image: image07 },
    { id: 8, image: image08 },
    { id: 9, image: image09 },
    { id: 10, image: image10 },
    { id: 11, image: image11 },
    { id: 12, image: image12 },
    { id: 13, image: image13 },
    { id: 14, image: image14 }
  ];

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
    setIsAutoPlay(false);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
    setIsAutoPlay(true);
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

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
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

  // Auto-play effect
  useEffect(() => {
    let interval;
    if (isAutoPlay && selectedImage) {
      interval = setInterval(() => {
        if (currentIndex < galleryImages.length - 1) {
          nextImage();
        } else {
          setCurrentIndex(0);
          setSelectedImage(galleryImages[0]);
        }
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, currentIndex, selectedImage]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Responsive */}
      <div className="relative bg-gradient-to-r from-[#0a2540] via-teal-700 to-[#0a2540] text-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-teal-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-3 sm:px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 tracking-tight px-2">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">Physio World</span> Gallery
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-teal-100 max-w-2xl mx-auto opacity-90 px-3">
              A glimpse into our physiotherapy facility and patient care
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-10 md:py-12">
        {/* Gallery Grid - Fully Responsive */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5"
        >
          <AnimatePresence mode="wait">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openLightbox(image, index)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 bg-gray-100">
                  {/* Image with loading state */}
                  <img
                    src={image.image}
                    alt={`Gallery ${index + 1}`}
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                      loadedImages[image.id] ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoad(image.id)}
                    loading="lazy"
                  />
                  
                  {/* Loading skeleton */}
                  {!loadedImages[image.id] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse"></div>
                  )}
                  
                  {/* Minimal Overlay - Hidden on mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/60 via-[#0a2540]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/30">
                        <FaImages className="text-white text-lg sm:text-xl md:text-2xl" />
                      </div>
                    </div>
                  </div>

                  {/* Image Counter Badge - Responsive */}
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-black/50 backdrop-blur-sm px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
                    <span className="text-white text-[8px] sm:text-[10px] font-medium">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section - Responsive */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 sm:mt-16"
        >
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0a2540] via-teal-700 to-[#0a2540] shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-teal-400 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-blue-400 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative py-8 sm:py-10 md:py-12 px-4 sm:px-6 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 px-2">
                Ready to Start Your <br className="sm:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">Recovery Journey?</span>
              </h2>
              <p className="text-teal-100/90 mb-6 sm:mb-8 max-w-lg mx-auto text-xs sm:text-sm px-3">
                Schedule a consultation with our expert physiotherapists
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-3">
                <Link to="/appointments" className="w-full sm:w-auto">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-white text-[#0a2540] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold hover:bg-gray-50 transition flex items-center justify-center gap-2 sm:gap-3 shadow-xl text-sm sm:text-base"
                  >
                    <FaCalendarAlt />
                    Book Consultation
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal - Fully Responsive */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-2 sm:p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-5 md:right-5 text-white hover:text-teal-400 transition text-2xl sm:text-3xl z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/10"
            >
              <FaTimes />
            </button>

            {/* Auto-play toggle */}
            <button
              onClick={(e) => { e.stopPropagation(); setIsAutoPlay(!isAutoPlay); }}
              className="absolute top-2 left-2 sm:top-4 sm:left-4 md:top-5 md:left-5 text-white hover:text-teal-400 transition z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/10"
            >
              {isAutoPlay ? <FaPause className="text-sm sm:text-base" /> : <FaPlay className="text-sm sm:text-base" />}
            </button>
            
            {/* Previous Button - Hidden on very small screens if at start */}
            {currentIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-1 sm:left-3 md:left-5 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10"
              >
                <FaChevronLeft size={16} className="sm:text-xl md:text-2xl" />
              </button>
            )}
            
            {/* Next Button - Hidden on very small screens if at end */}
            {currentIndex < galleryImages.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-1 sm:right-3 md:right-5 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10"
              >
                <FaChevronRight size={16} className="sm:text-xl md:text-2xl" />
              </button>
            )}
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-6xl mx-2 sm:mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt="Gallery"
                className="max-h-[60vh] sm:max-h-[70vh] md:max-h-[75vh] w-auto max-w-full mx-auto rounded-xl sm:rounded-2xl shadow-2xl border-2 border-white/10"
              />
              
              {/* Image info - Responsive */}
              <div className="mt-3 sm:mt-4 md:mt-6 text-center bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 max-w-xs sm:max-w-sm mx-auto border border-white/10">
                <div className="flex items-center justify-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-1 sm:gap-2 text-teal-300 text-xs sm:text-sm">
                    <FaRegClock className="text-xs sm:text-sm" />
                    <span className="hidden xs:inline">Gallery</span>
                    <span className="inline xs:hidden">📸</span>
                  </div>
                  <div className="w-px h-3 sm:h-4 bg-white/20"></div>
                  <span className="text-gray-300 text-xs sm:text-sm font-medium">
                    {currentIndex + 1} / {galleryImages.length}
                  </span>
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
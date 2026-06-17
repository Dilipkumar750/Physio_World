import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCheckCircle, FaPhoneAlt, FaStar, FaUsers, FaAward, 
  FaCalendarAlt, FaWhatsapp, FaChevronLeft, FaChevronRight,
  FaShieldAlt, FaClock, FaHandHoldingHeart, FaSmile, FaArrowRight,
  FaHome, FaAmbulance, FaUserMd, FaRegCalendarCheck
} from 'react-icons/fa';
import { GiHealing, GiMuscleUp, GiRunningShoe } from 'react-icons/gi';
import SpecializedServices from './SpecializedServices';
import knee_pain from '../../assets/knee_pain.jpg';
import back_pain from '../../assets/back_pain.webp';
import image3 from '../../assets/image3.jpg';
import image5 from '../../assets/image5.jpeg';
import homecare from '../../assets/homecare.png';

const Hero = () => {

  const highlightPoints = [
    { icon: <GiHealing className="text-teal-500" />, text: "Pain Management", highlight: true },
    { icon: <GiMuscleUp className="text-teal-500" />, text: "Muscle Recovery", highlight: true },
    { icon: <GiHealing className="text-teal-500" />, text: "Spine Care", highlight: true },
    { icon: <GiRunningShoe className="text-teal-500" />, text: "Sports Rehab", highlight: true }
  ];

  // Scrolling images data
  const heroImages = [
    { id: 1, url: knee_pain, alt: "Professional Knee Pain Treatment" },
    { id: 2, url: back_pain, alt: "Expert Back Pain Therapy" },
    { id: 3, url: image3, alt: "Exercise Rehabilitation Program" },
    { id: 4, url: image5, alt: "Complete Recovery Journey" }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-scroll images every 4 seconds (pause on hover)
  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length, isHovering]);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[600px] bg-gradient-to-br from-white via-teal-50/30 to-white overflow-hidden">
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
          
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Side - Enhanced Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-5 shadow-sm">
                <span className="w-2 h-2 bg-teal-600 rounded-full animate-pulse"></span>
                <span className="text-sm font-bold">⭐ India's Most Trusted Physiotherapy Clinic</span>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
                <span className="text-[#0a2540]">Get Back to </span>
                <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Pain-Free Living</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-gray-700 font-bold mb-3">
                Expert Physiotherapy That Actually Works
              </p>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed text-base">
                Join <span className="font-bold text-teal-600">5000+ happy patients</span> who've reclaimed their active lifestyle. 
                Our certified therapists combine advanced technology with compassionate care to deliver 
                <span className="font-semibold"> 98% successful recovery rates</span>.
              </p>
              
              {/* Highlight Points */}
              <div className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start">
                {highlightPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-1.5 bg-teal-50 px-3 py-1.5 rounded-full">
                    <span className="text-teal-500 text-sm">{point.icon}</span>
                    <span className="text-gray-700 text-sm font-medium">{point.text}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/appointments">
                  <button className="group bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white px-7 py-3.5 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
                    <FaCalendarAlt />
                    Book Free Consultation
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <a href="https://wa.me/917904818494" target="_blank" rel="noopener noreferrer">
                  <button className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 px-7 py-3.5 rounded-full font-bold transition-all duration-300 flex items-center gap-2">
                    <FaWhatsapp className="text-xl" />
                    Chat on WhatsApp
                  </button>
                </a>
              </div>
              
              {/* Social Proof */}
              <div className="flex flex-wrap items-center gap-5 mt-8 justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">4.9/5</span>
                  <span className="text-xs text-gray-500">(500+ reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-teal-500" />
                  <span className="text-sm font-semibold text-gray-700">5000+ Happy Patients</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-teal-500" />
                  <span className="text-sm font-semibold text-gray-700">Same-Day Appointments</span>
                </div>
              </div>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <FaShieldAlt className="text-green-500" />
                  <span>ISO Certified</span>
                </div>
                <div className="w-px h-3 bg-gray-300"></div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <FaHandHoldingHeart className="text-teal-500" />
                  <span>Patient First Approach</span>
                </div>
                <div className="w-px h-3 bg-gray-300"></div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <FaSmile className="text-orange-400" />
                  <span>100% Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>
            
            {/* Right Side - Enhanced Image Carousel */}
            <div 
              className="flex-1 relative"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Main Image */}
                <img 
                  src={heroImages[currentImageIndex].url}
                  alt={heroImages[currentImageIndex].alt}
                  className="w-full h-[380px] md:h-[480px] object-cover transition-all duration-700 ease-in-out transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Image Counter Badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
                  {currentImageIndex + 1} / {heroImages.length}
                </div>
                
                {/* Previous Button */}
                <button 
                  onClick={goToPreviousImage}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-teal-500 backdrop-blur-sm text-white w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <FaChevronLeft />
                </button>
                
                {/* Next Button */}
                <button 
                  onClick={goToNextImage}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-teal-500 backdrop-blur-sm text-white w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <FaChevronRight />
                </button>
                
                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-teal-400 w-6' 
                          : 'bg-white/50 w-1.5 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Floating Emergency Card */}
              <div className="absolute -bottom-5 -left-4 bg-white rounded-xl shadow-xl p-3 hidden lg:block">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse">
                    <FaPhoneAlt className="text-white text-sm" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-medium">🚨 24/7 Emergency Support</p>
                    <p className="font-bold text-[#0a2540] text-base">+91 79048 18494</p>
                  </div>
                </div>
              </div>
              
              {/* Success Rate Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg hidden lg:flex">
                <span className="text-white font-black text-xl">98%</span>
                <span className="text-white text-[10px] font-semibold">Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-10 bg-gradient-to-r from-[#0a2540] to-teal-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-black">5000+</h3>
              <p className="text-teal-100 text-sm font-medium mt-1">Happy Patients Recovered</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-black">98%</h3>
              <p className="text-teal-100 text-sm font-medium mt-1">Treatment Success Rate</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-black">15+</h3>
              <p className="text-teal-100 text-sm font-medium mt-1">Expert Physiotherapists</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-black">4+ Years</h3>
              <p className="text-teal-100 text-sm font-medium mt-1">Trusted Healthcare Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Visit Services Section - NEW */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-4">
              <FaHome className="text-teal-600" />
              <span className="text-sm font-semibold">Convenient Care at Your Doorstep</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-4">
              Physiotherapy at <span className="text-teal-600">Home</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Can't visit the clinic? Our expert therapists come to your home for personalized rehabilitation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                    <FaUserMd className="text-white text-xl" />
                  </div>
                  <h3 className="font-bold text-[#0a2540] text-lg mb-2">Expert Home Visit</h3>
                  <p className="text-gray-500 text-sm">Certified physiotherapists with specialized home care training</p>
                </div>
                
                <div className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                    <FaClock className="text-white text-xl" />
                  </div>
                  <h3 className="font-bold text-[#0a2540] text-lg mb-2">Flexible Timings</h3>
                  <p className="text-gray-500 text-sm">Morning, evening & weekend slots available as per your schedule</p>
                </div>
                
                <div className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                    <GiHealing className="text-white text-xl" />
                  </div>
                  <h3 className="font-bold text-[#0a2540] text-lg mb-2">Full Equipment Support</h3>
                  <p className="text-gray-500 text-sm">We bring portable therapy equipment to your home</p>
                </div>
                
                <div className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                    <FaRegCalendarCheck className="text-white text-xl" />
                  </div>
                  <h3 className="font-bold text-[#0a2540] text-lg mb-2">Personalized Plans</h3>
                  <p className="text-gray-500 text-sm">Customized home exercise programs for faster recovery</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-teal-600 to-cyan-500 rounded-xl p-6 text-white text-center">
                <p className="text-lg font-semibold mb-3">🏠 Home Visit Available in:</p>
                <p className="text-sm opacity-90">Perambur • Peravallur • Kolathur • Villivakkam • Ayanavaram • and surrounding areas</p>
                <div className="mt-4 flex justify-center gap-3">
                  <Link to="/appointments">
                    <button className="bg-white text-teal-600 px-5 py-2 rounded-full font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2">
                      <FaCalendarAlt />
                      Book Home Visit
                    </button>
                  </Link>
                  <a href="https://wa.me/917904818494" target="_blank" rel="noopener noreferrer">
                    <button className="border-2 border-white text-white px-5 py-2 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                      <FaWhatsapp />
                      Enquire Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={homecare} 
                  alt="Home Physiotherapy Service" 
                  className="w-full h-[400px] object-fit transition-transform duration-500 hover:scale-105"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                  <FaWhatsapp className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Call for Home Visit</p>
                  <p className="font-bold text-[#0a2540] text-sm">+91 79048 18494</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services Component */}
      <SpecializedServices />
    </div>
  );
};

export default Hero;
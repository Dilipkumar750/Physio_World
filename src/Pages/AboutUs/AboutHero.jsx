import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FaCheckCircle, FaStar, FaUsers, FaAward, FaHandHoldingHeart, 
  FaStethoscope, FaCalendarAlt, FaPhoneAlt, FaArrowRight,
  FaUserMd, FaHeartbeat, FaHandsHelping, FaBrain, FaLeaf,
  FaRegSmile, FaQuoteLeft
} from 'react-icons/fa'
import logo from "../../assets/bglogo.png"
import ganesh from "../../assets/ganesh.jpeg"
import Sandhiya from "../../assets/expert.jpg"
import musculoskeletal from "../../assets/musculoskeletal.png"

const About = () => {
  const stats = [
    { icon: <FaUsers />, value: "1000+", label: "Happy Patients" },
    { icon: <FaAward />, value: "4+", label: "Years Experience" },
    { icon: <FaStar />, value: "100%", label: "Patient Satisfaction" },
    { icon: <FaUserMd />, value: "5+", label: "Expert Therapists" }
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
      credentials: "MPT, MIAP, Reflexologist",
      role: "Founder & Chief Physiotherapist",
      description: "With expertise in neuro-rehabilitation and advanced clinical insights, Dr. Ganesh brings years of specialized experience to patient care. His dedication to evidence-based practice ensures the highest quality rehabilitation services.",
      specializations: ["Neuro-rehabilitation", "Evidence-Based Practice", "Clinical Excellence"],
      image: ganesh,
      color: "from-purple-500 to-pink-500",
      icon: <FaBrain />
    },
    {
      name: "Dr. Sandhiya Ganesh V",
      credentials: "PT, MIAP",
      role: "Co-Founder & Senior Physiotherapist",
      description: "Dr. Sandhiya Ganesh V specializes in holistic physiotherapy and patient-centered care. Her compassionate approach and expertise in rehabilitation ensure that every patient feels supported throughout their recovery journey.",
      specializations: ["Holistic Care", "Patient-Centered Approach", "Compassionate Rehabilitation"],
      image: Sandhiya,
      color: "from-blue-500 to-cyan-500",
      icon: <FaLeaf />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Page Header with Logo */}
      <div className="bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] text-white py-12 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About PhysioWorld</h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto">
            Your trusted partner in physiotherapy care, committed to restoring mobility and improving quality of life
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        {/* Our Story Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-bold text-[#0a2540] mb-4">Our Story</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mb-6"></div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in <strong className="text-teal-600">2023</strong>, PhysioWorld began with a simple mission: to provide exceptional physiotherapy care 
                that helps people regain their mobility and live pain-free lives.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Over the years, we've grown into a trusted healthcare facility serving thousands of patients 
                with various conditions, from sports injuries to neurological disorders.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, PhysioWorld stands as a beacon of hope for those seeking recovery, equipped with 
                state-of-the-art technology and a team of dedicated professionals.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0a2540] to-teal-800 p-8 md:p-10 flex items-center">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="mb-6 text-teal-100">
                  To empower individuals to achieve optimal physical function and improve their quality of life 
                  through evidence-based physiotherapy, compassionate care, and innovative treatment approaches.
                </p>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-teal-100">
                  To be the leading physiotherapy clinic recognized for excellence in patient care, 
                  innovation in treatment, and commitment to community health.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Redefining Physiotherapy Care Section */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl shadow-lg overflow-hidden mb-12 border border-teal-100">
          <div className="p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#0a2540] mb-3">Redefining Physiotherapy Care</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-6"></div>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                At PhysioWorld, we combine clinical expertise, modern rehabilitation techniques, and personalized care to help patients recover safely and effectively.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <FaStethoscope className="text-white text-xl" />
                </div>
                <h3 className="font-bold text-[#0a2540] text-lg mb-2">Clinical Expertise</h3>
                <p className="text-gray-500 text-sm">Evidence-based practices and advanced clinical knowledge for optimal recovery outcomes.</p>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <FaHeartbeat className="text-white text-xl" />
                </div>
                <h3 className="font-bold text-[#0a2540] text-lg mb-2">Modern Rehabilitation</h3>
                <p className="text-gray-500 text-sm">State-of-the-art techniques and equipment for effective and efficient recovery.</p>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <FaUserMd className="text-white text-xl" />
                </div>
                <h3 className="font-bold text-[#0a2540] text-lg mb-2">Personalized Care</h3>
                <p className="text-gray-500 text-sm">Tailored treatment plans designed specifically for your unique condition and goals.</p>
              </div>
            </div>
            
            <div className="mt-8 pt-4 text-center text-gray-600">
              <p className="italic">
                "From orthopedic pain management to neurological rehabilitation and post-surgical recovery, 
                our goal is to deliver results-focused physiotherapy tailored to every individual."
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-2xl">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-[#0a2540] mb-1">{stat.value}</h3>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Our Journey at a Glance - Image Section */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-teal-50 to-white">
                <h2 className="text-3xl font-bold text-[#0a2540] mb-4">Our Journey at a Glance</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mb-6"></div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At PhysioWorld, we believe in the power of movement and the body's natural ability to heal. 
                  Our state-of-the-art facility and compassionate team work tirelessly to restore function, 
                  reduce pain, and improve the quality of life for every patient who walks through our doors.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Whether you're recovering from an injury, managing a chronic condition, or seeking to optimize 
                  your physical performance, we're here to guide you every step of the way.
                </p>
              </div>
              <div className="h-64 md:h-auto">
                <img 
                  src={musculoskeletal} 
                  alt="PhysioWorld Care" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0a2540] mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              The principles that guide everything we do at PhysioWorld
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="font-bold text-[#0a2540] mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Founders / Meet Our Experts Section */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0a2540] mb-4">Meet Our Founders</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Dedicated professionals committed to your recovery journey
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                {/* Centered Small Rounded Image */}
                <div className="pt-8 pb-4 flex justify-center">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${founder.color} rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl relative z-10 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r ${founder.color} rounded-full flex items-center justify-center text-white text-sm shadow-lg z-20`}>
                      {founder.icon}
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 text-center">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-[#0a2540]">{founder.name}</h3>
                    <p className="text-teal-600 text-sm font-medium">{founder.credentials}</p>
                    <p className="text-gray-500 text-xs mt-1">{founder.role}</p>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {founder.description}
                  </p>
                  
                  {/* Specializations */}
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {founder.specializations.map((spec, idx) => (
                      <span key={idx} className="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full">
                        {spec}
                      </span>
                    ))}
                  </div>
                  
                  {/* Quote Icon */}
                  <div className="flex justify-center">
                    <FaQuoteLeft className="text-gray-200 text-2xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-[#0a2540] to-teal-600 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Why Choose PhysioWorld?</h2>
            <p className="text-teal-100">What makes us different from other clinics</p>
          </div>
          
          <div className="p-6 grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-all duration-300">
              <FaCheckCircle className="text-teal-500 text-xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-[#0a2540]">Experienced Professionals</h3>
                <p className="text-gray-500 text-sm">Our team has decades of combined experience in physiotherapy</p>
              </div>
            </div>
                    <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-all duration-300">
              <FaCheckCircle className="text-teal-500 text-xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-[#0a2540]">Convenient Location</h3>
                <p className="text-gray-500 text-sm">Easily accessible clinic in Peravallur, Chennai</p>
              </div>
            </div>
           
            <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-all duration-300">
              <FaCheckCircle className="text-teal-500 text-xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-[#0a2540]">Personalized Care</h3>
                <p className="text-gray-500 text-sm">Customized treatment plans tailored to your specific needs</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-all duration-300">
              <FaCheckCircle className="text-teal-500 text-xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-[#0a2540]">Affordable Pricing</h3>
                <p className="text-gray-500 text-sm">Quality care at competitive prices with transparent billing</p>
              </div>
            </div>
     <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-all duration-300">
              <FaCheckCircle className="text-teal-500 text-xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-[#0a2540]">Modern Equipment</h3>
                <p className="text-gray-500 text-sm">State-of-the-art technology for accurate diagnosis and treatment</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-all duration-300">
              <FaCheckCircle className="text-teal-500 text-xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-[#0a2540]">Home Visits Available</h3>
                <p className="text-gray-500 text-sm">Physiotherapy services at your doorstep for convenience</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Start Your Journey?</h2>
          <p className="mb-6 text-teal-100">Book an appointment with our expert physiotherapists today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/appointments">
              <button className="bg-white text-[#0a2540] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <FaCalendarAlt />
                Book Appointment
              </button>
            </Link>
            <a href="tel:+917904818494">
              <button className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                <FaPhoneAlt />
                Call Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaTint, FaUserCheck, FaCoffee, FaSun, 
  FaFire, FaDumbbell, FaSnowflake, FaCalendarCheck,
  FaHeartbeat, FaRunning, FaAppleAlt,
  FaArrowRight, FaLeaf, FaBed, FaSmile,
  FaMusic
} from 'react-icons/fa';
import { GiMeditation, GiMuscleUp} from 'react-icons/gi';
import { MdOutlineEmojiPeople } from 'react-icons/md';
import logo from "../../assets/bglogo.png";

const HealthAndWellness = () => {
  const generalTips = [
    {
      id: 1,
      title: "Stay Hydrated",
      icon: <FaTint />,
      description: "Drink at least 8 glasses of water daily to keep your joints lubricated and muscles hydrated.",
      benefit: "Proper hydration helps maintain joint health and prevents muscle cramps.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Practice Good Posture",
      icon: <FaUserCheck />,
      description: "Maintain proper posture while sitting and standing to prevent back and neck pain.",
      benefit: "Good posture reduces strain on your spine and prevents chronic pain.",
      color: "from-teal-500 to-green-500"
    },
    {
      id: 3,
      title: "Take Regular Breaks",
      icon: <FaCoffee />,
      description: "If you have a desk job, take a 5-minute break every hour to stretch and move around.",
      benefit: "Regular breaks improve circulation and reduce muscle stiffness.",
      color: "from-orange-500 to-yellow-500"
    },
    {
      id: 4,
      title: "Daily Sunlight",
      icon: <FaSun />,
      description: "Get at least 15 minutes of sunlight exposure daily to boost vitamin D and overall wellness.",
      benefit: "Vitamin D is essential for bone health and immune function.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const exerciseTips = [
    {
      id: 5,
      title: "Warm Up Properly",
      icon: <FaFire />,
      description: "Always warm up for 5-10 minutes before exercising to prepare your muscles and prevent injuries.",
      benefit: "Proper warm-up increases blood flow and reduces injury risk.",
      color: "from-red-500 to-orange-500"
    },
    {
      id: 6,
      title: "Focus on Form",
      icon: <FaDumbbell />,
      description: "Proper form is more important than heavy weights. Incorrect form can lead to injuries.",
      benefit: "Good form ensures you target the right muscles and stay safe.",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 7,
      title: "Cool Down Stretches",
      icon: <FaSnowflake />,
      description: "After workouts, perform static stretches to improve flexibility and reduce muscle soreness.",
      benefit: "Cooling down helps your heart rate return to normal and prevents stiffness.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 8,
      title: "Consistency Over Intensity",
      icon: <FaCalendarCheck />,
      description: "Regular moderate exercise is better than occasional extreme workouts.",
      benefit: "Consistent activity builds lasting habits and sustainable results.",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      <div className="container mx-auto px-4 mt-10 pb-12">
        
        {/* General Wellness Section */}
        <div className="mb-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full shadow-lg mb-3">
              <FaLeaf className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-[#0a2540]">General Wellness Tips</h2>
            <p className="text-gray-600 mt-2">Everyday habits for a healthier lifestyle</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {generalTips.map((tip) => (
              <div
                key={tip.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`bg-gradient-to-r ${tip.color} p-4 flex items-center gap-3`}>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white text-xl">
                    {tip.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg flex-1">{tip.title}</h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {tip.description}
                  </p>
                  <div className="bg-teal-50 rounded-lg p-3">
                    <p className="text-xs text-teal-700">
                      <span className="font-semibold">💡 Why it matters:</span> {tip.benefit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exercise Tips Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg mb-3">
              <FaRunning className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-[#0a2540]">Exercise Tips</h2>
            <p className="text-gray-600 mt-2">Smart ways to stay active and injury-free</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exerciseTips.map((tip) => (
              <div
                key={tip.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`bg-gradient-to-r ${tip.color} p-4 flex items-center gap-3`}>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white text-xl">
                    {tip.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg flex-1">{tip.title}</h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {tip.description}
                  </p>
                  <div className="bg-teal-50 rounded-lg p-3">
                    <p className="text-xs text-teal-700">
                      <span className="font-semibold">💡 Why it matters:</span> {tip.benefit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Healthy Habits Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full shadow-lg mb-3">
              <FaSmile className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-[#0a2540]">Healthy Habits for Life</h2>
            <p className="text-gray-600 mt-2">Simple habits that make a big difference</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <FaAppleAlt className="text-green-600" />
              </div>
              <span className="text-gray-700">Eat a balanced diet rich in fruits and vegetables</span>
            </div>
            
            <div className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <FaHeartbeat className="text-blue-600" />
              </div>
              <span className="text-gray-700">Get 7-8 hours of quality sleep each night</span>
            </div>
            
            <div className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <GiMeditation className="text-purple-600" />
              </div>
              <span className="text-gray-700">Practice mindfulness or meditation daily</span>
            </div>
            
            <div className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <MdOutlineEmojiPeople className="text-orange-600" />
              </div>
              <span className="text-gray-700">Stay socially connected with loved ones</span>
            </div>
            
            <div className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <FaMusic className="text-teal-600" />
              </div>
              <span className="text-gray-700">Incorporate stretching into your daily routine</span>
            </div>
            
            <div className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <GiMuscleUp className="text-red-600" />
              </div>
              <span className="text-gray-700">Strength train at least twice a week</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Ready to Transform Your Health?</h2>
          <p className="mb-6 text-teal-100">Book a consultation with our expert physiotherapists today</p>
          <Link to="/appointments">
            <button className="bg-white text-[#0a2540] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg">
              <FaCalendarCheck />
              Book Appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HealthAndWellness;
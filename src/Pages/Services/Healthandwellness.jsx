import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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

  const healthyHabits = [
    { icon: <FaAppleAlt />, text: "Eat a balanced diet rich in fruits and vegetables", color: "bg-green-100", iconColor: "text-green-600" },
    { icon: <FaHeartbeat />, text: "Get 7-8 hours of quality sleep each night", color: "bg-blue-100", iconColor: "text-blue-600" },
    { icon: <GiMeditation />, text: "Practice mindfulness or meditation daily", color: "bg-purple-100", iconColor: "text-purple-600" },
    { icon: <MdOutlineEmojiPeople />, text: "Stay socially connected with loved ones", color: "bg-orange-100", iconColor: "text-orange-600" },
    { icon: <FaMusic />, text: "Incorporate stretching into your daily routine", color: "bg-teal-100", iconColor: "text-teal-600" },
    { icon: <GiMuscleUp />, text: "Strength train at least twice a week", color: "bg-red-100", iconColor: "text-red-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 overflow-x-hidden">
      <div className="container mx-auto px-4 mt-10 pb-12">
        
        {/* General Wellness Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <motion.div 
              animate={pulseAnimation}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full shadow-lg mb-3"
            >
              <FaLeaf className="text-white text-2xl" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-[#0a2540]"
            >
              General Wellness Tips
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 mt-2"
            >
              Everyday habits for a healthier lifestyle
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {generalTips.map((tip) => (
              <motion.div
                key={tip.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group"
              >
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`bg-gradient-to-r ${tip.color} p-4 flex items-center gap-3`}
                >
                  <motion.div 
                    variants={iconRotate}
                    whileHover="hover"
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white text-xl"
                  >
                    {tip.icon}
                  </motion.div>
                  <h3 className="text-white font-bold text-lg flex-1">{tip.title}</h3>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="p-5"
                >
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 text-sm mb-3 leading-relaxed"
                  >
                    {tip.description}
                  </motion.p>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-teal-50 rounded-lg p-3 transition-all duration-300"
                  >
                    <p className="text-xs text-teal-700">
                      <span className="font-semibold">💡 Why it matters:</span> {tip.benefit}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Exercise Tips Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8"
          >
            <motion.div 
              animate={floatAnimation}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg mb-3"
            >
              <FaRunning className="text-white text-2xl" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold text-[#0a2540]"
            >
              Exercise Tips
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 mt-2"
            >
              Smart ways to stay active and injury-free
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {exerciseTips.map((tip) => (
              <motion.div
                key={tip.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group"
              >
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`bg-gradient-to-r ${tip.color} p-4 flex items-center gap-3`}
                >
                  <motion.div 
                    variants={iconRotate}
                    whileHover="hover"
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white text-xl"
                  >
                    {tip.icon}
                  </motion.div>
                  <h3 className="text-white font-bold text-lg flex-1">{tip.title}</h3>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="p-5"
                >
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 text-sm mb-3 leading-relaxed"
                  >
                    {tip.description}
                  </motion.p>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-teal-50 rounded-lg p-3 transition-all duration-300"
                  >
                    <p className="text-xs text-teal-700">
                      <span className="font-semibold">💡 Why it matters:</span> {tip.benefit}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Healthy Habits Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-8"
          >
            <motion.div 
              animate={pulseAnimation}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full shadow-lg mb-3"
            >
              <FaSmile className="text-white text-2xl" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl font-bold text-[#0a2540]"
            >
              Healthy Habits for Life
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-600 mt-2"
            >
              Simple habits that make a big difference
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {healthyHabits.map((habit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <motion.div 
                  whileHover={{ rotate: 20, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className={`w-10 h-10 ${habit.color} rounded-full flex items-center justify-center flex-shrink-0`}
                >
                  <span className={habit.iconColor}>{habit.icon}</span>
                </motion.div>
                <span className="text-gray-700 text-sm">{habit.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-[#0a2540] via-teal-600 to-[#0a2540] rounded-2xl p-8 text-center text-white relative overflow-hidden"
        >
          <motion.div 
            animate={floatAnimation}
            className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"
          ></motion.div>
          <motion.div 
            animate={floatAnimation}
            className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"
            style={{ animationDelay: '1.5s' }}
          ></motion.div>
          
          <div className="relative z-10">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-2xl font-bold mb-3"
            >
              Ready to Transform Your Health?
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="mb-6 text-teal-100"
            >
              Book a consultation with our expert physiotherapists today
            </motion.p>
            <Link to="/appointments">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#0a2540] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2 shadow-lg"
              >
                <FaCalendarCheck />
                Book Appointment
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
      </div>
    </div>
  );
};

export default HealthAndWellness;
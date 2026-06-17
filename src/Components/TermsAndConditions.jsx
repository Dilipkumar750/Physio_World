import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaFileContract, FaGavel, FaUserCheck, FaCreditCard, FaShieldAlt, FaClipboardCheck, FaRegStickyNote, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/bglogo.png";

const TermsAndConditions = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('introduction');

  const handleBack = () => {
    navigate(-1);
  };

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'services', title: 'Services Provided' },
    { id: 'appointments', title: 'Appointments & Cancellations' },
    { id: 'payments', title: 'Payments & Fees' },
    { id: 'user-obligations', title: 'User Obligations' },
    { id: 'liability', title: 'Liability & Disclaimer' },
    { id: 'privacy', title: 'Privacy & Data Protection' },
    { id: 'contact', title: 'Contact Information' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] py-4 px-2 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header with Back Button */}
        <motion.div 
          className="flex items-center mb-8 cursor-pointer"
          onClick={handleBack}
          whileHover={{ x: -5 }}
          transition={{ duration: 0.2 }}
        >
          <FaArrowLeft className="text-[#0a2540] mr-2" />
          <span className="text-[#0a2540] font-medium">Back</span>
        </motion.div>

        {/* Logo and Title Section */}
        <motion.div 
          className="text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Small Centered Logo */}
          <div className="flex justify-center mb-4">
            <img 
              src={logo} 
              alt="PhysioWorld Logo" 
              className="w-40 h-40 object-contain"
            />
          </div>
          
          <h1 className="text-4xl font-bold text-[#0a2540] mt-2">Terms & Conditions</h1>
          <p className="text-lg text-[#0a2540] mt-2 max-w-3xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <motion.div 
            className="lg:w-1/4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold text-[#0a2540] mb-4 flex items-center">
                <FaClipboardCheck className="mr-2 text-teal-500" /> Sections
              </h2>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left py-2 px-4 rounded-lg transition-all duration-300 ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-[#0a2540] to-teal-600 text-white shadow-md'
                          : 'text-[#0a2540] hover:bg-teal-50'
                      }`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            className="lg:w-3/4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              {/* Introduction Section */}
              {activeSection === 'introduction' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-[#0a2540] mb-4 flex items-center">
                    <FaFileContract className="mr-2 text-teal-500" /> 1. Introduction
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Welcome to <strong className="text-teal-600">PhysioWorld</strong>. These Terms and Conditions govern your use of our website, services, and any interactions with our clinic. By accessing our website or booking an appointment with us, you agree to be bound by these Terms and Conditions.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Please read these terms carefully before using our services. If you do not agree with any part of these terms, you should not use our website or services.
                  </p>
                  <p className="text-gray-700">
                    These terms constitute a legally binding agreement between you and PhysioWorld regarding your use of our physiotherapy and rehabilitation services.
                  </p>
                </motion.div>
              )}

              {/* Services Provided Section */}
              {activeSection === 'services' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-[#0a2540] mb-4">2. Services Provided</h2>
                  <p className="text-gray-700 mb-4">
                    PhysioWorld offers a range of physiotherapy and rehabilitation services including but not limited to:
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-2">
                    <li>Neuro Rehabilitation</li>
                    <li>Stroke Rehabilitation</li>
                    <li>Spinal Cord Injury Rehabilitation</li>
                    <li>Sports & Orthopedic Rehabilitation</li>
                    <li>Pain Management</li>
                    <li>Pediatric & Geriatric Physiotherapy</li>
                    <li>Fitness Training & Ergonomics</li>
                    <li>Pelvic Floor Rehabilitation</li>
                  </ul>
                  <p className="text-gray-700">
                    All services are provided by qualified and licensed physiotherapists. The specific treatment plan will be determined after a thorough assessment of your condition.
                  </p>
                </motion.div>
              )}

              {/* Appointments Section */}
              {activeSection === 'appointments' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-[#0a2540] mb-4">3. Appointments & Cancellations</h2>
                  
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-2">3.1 Booking Appointments</h3>
                  <p className="text-gray-700 mb-4">
                    Appointments can be booked through our website, by phone, or by visiting our clinic. You will receive a confirmation of your appointment via email or SMS.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-2">3.2 Cancellation Policy</h3>
                  <p className="text-gray-700 mb-4">
                    If you need to cancel or reschedule your appointment, please notify us at least 24 hours in advance. Late cancellations or no-shows may be subject to a cancellation fee.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-2">3.3 Late Arrivals</h3>
                  <p className="text-gray-700">
                    If you arrive late for your appointment, we will do our best to accommodate you. However, your session may be shortened to avoid delaying subsequent appointments.
                  </p>
                </motion.div>
              )}

              {/* Payments Section */}
              {activeSection === 'payments' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-[#0a2540] mb-4 flex items-center">
                    <FaCreditCard className="mr-2 text-teal-500" /> 4. Payments & Fees
                  </h2>
                  
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-2">4.1 Fees</h3>
                  <p className="text-gray-700 mb-4">
                    Our service fees are transparent and will be communicated to you before your appointment. Fees vary depending on the type and duration of the service.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-2">4.2 Payment Methods</h3>
                  <p className="text-gray-700 mb-4">
                    We accept cash, credit/debit cards, and online payments. All payments must be made at the time of service unless prior arrangements have been made.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-2">4.3 Insurance</h3>
                  <p className="text-gray-700">
                    Please check with your insurance provider regarding coverage for physiotherapy services. We can provide you with receipts and documentation for insurance claims.
                  </p>
                </motion.div>
              )}

              {/* User Obligations Section */}
              {activeSection === 'user-obligations' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-[#0a2540] mb-4 flex items-center">
                    <FaUserCheck className="mr-2 text-teal-500" /> 5. User Obligations
                  </h2>
                  
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-2">5.1 Accurate Information</h3>
                  <p className="text-gray-700 mb-4">
                    You agree to provide accurate, current, and complete information about yourself when booking appointments or communicating with us.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-2">5.2 Medical History Disclosure</h3>
                  <p className="text-gray-700 mb-4">
                    You must disclose all relevant medical history, current medications, and health conditions to your physiotherapist to ensure safe and effective treatment.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-2">5.3 Compliance with Treatment</h3>
                  <p className="text-gray-700">
                    You agree to follow the treatment plan prescribed by your physiotherapist and inform them of any concerns or changes in your condition.
                  </p>
                </motion.div>
              )}

              {/* Liability Section */}
              {activeSection === 'liability' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-[#0a2540] mb-4 flex items-center">
                    <FaGavel className="mr-2 text-teal-500" /> 6. Liability & Disclaimer
                  </h2>
                  
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-2">6.1 Professional Advice</h3>
                  <p className="text-gray-700 mb-4">
                    The information provided on our website and during consultations is for informational purposes only and should not be considered a substitute for professional medical advice.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-2">6.2 Limitation of Liability</h3>
                  <p className="text-gray-700 mb-4">
                    To the fullest extent permitted by law, PhysioWorld shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-2">6.3 Results Not Guaranteed</h3>
                  <p className="text-gray-700">
                    While we strive to provide the best possible care, individual results may vary. We do not guarantee specific outcomes from our physiotherapy treatments.
                  </p>
                </motion.div>
              )}

              {/* Privacy Section */}
              {activeSection === 'privacy' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-[#0a2540] mb-4 flex items-center">
                    <FaShieldAlt className="mr-2 text-teal-500" /> 7. Privacy & Data Protection
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Your privacy is important to us. Please review our <a href="/privacy-policy" className="text-teal-600 hover:underline">Privacy Policy</a> to understand how we collect, use, and protect your personal information.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We comply with the Digital Personal Data Protection Act, 2023 and other applicable Indian laws regarding data protection.
                  </p>
                  <p className="text-gray-700">
                    By using our services, you consent to the collection and use of your information as described in our Privacy Policy.
                  </p>
                </motion.div>
              )}

              {/* Contact Information Section */}
              {activeSection === 'contact' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-[#0a2540] mb-4">8. Contact Information</h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about these Terms and Conditions, please contact us:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-start p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center text-white mr-3 shadow-md">
                        <FaPhoneAlt />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0a2540] mb-1">Phone</h4>
                        <p className="text-gray-600 text-sm">+91 79048 18494</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center text-white mr-3 shadow-md">
                        <FaEnvelope />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0a2540] mb-1">Email</h4>
                        <p className="text-gray-600 text-sm">info@physioworld.com</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center text-white mr-3 shadow-md">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0a2540] mb-1">Address</h4>
                      <p className="text-gray-600 text-sm">No.109B, SRP Colony, Perambur, Chennai, Tamil Nadu – 600082</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Footer Note */}
              <motion.div 
                className="mt-8 pt-6 border-t border-gray-200 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="text-sm text-gray-500">
                  By using PhysioWorld's services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  © {new Date().getFullYear()} PhysioWorld. All rights reserved.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
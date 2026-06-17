import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaShieldAlt, FaUserLock, FaDatabase, FaCookie, FaClipboardCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/bglogo.png";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('introduction');

  const handleBack = () => {
    navigate(-1);
  };

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'data-collection', title: 'Data We Collect' },
    { id: 'data-usage', title: 'How We Use Data' },
    { id: 'data-protection', title: 'Data Protection' },
    { id: 'data-sharing', title: 'Data Sharing' },
    { id: 'cookies', title: 'Cookies & Tracking' },
    { id: 'rights', title: 'Your Rights' },
    { id: 'changes', title: 'Policy Changes' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header with Back Button */}
        <motion.div 
          className="flex items-center cursor-pointer"
          onClick={handleBack}
          whileHover={{ x: -5 }}
          transition={{ duration: 0.2 }}
        >
          <FaArrowLeft className="text-[#0a2540] mr-2" />
          <span className="text-[#0a2540] font-medium">Back</span>
        </motion.div>

        {/* Logo and Title Section */}
        <motion.div 
          className="text-center mb-12"
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
          
          <h1 className="text-4xl font-bold text-[#0a2540] mt-2">Privacy Policy</h1>
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
                    <FaShieldAlt className="mr-2 text-teal-500" /> 1. Introduction
                  </h2>
                  <p className="text-gray-700 mb-4">
                    At <strong className="text-teal-600">PhysioWorld</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
                  </p>
                  <p className="text-gray-700 mb-4">
                    By using our services, you consent to the data practices described in this Privacy Policy. If you do not agree with the data practices described, you should not use our services.
                  </p>
                  <p className="text-gray-700">
                    This policy complies with the <strong className="text-teal-600">Digital Personal Data Protection Act, 2023</strong> and other applicable Indian laws regarding data protection and privacy.
                  </p>
                </motion.div>
              )}

              {/* Data Collection Section */}
              {activeSection === 'data-collection' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-[#0a2540] mb-4 flex items-center">
                    <FaDatabase className="mr-2 text-teal-500" /> 2. Data We Collect
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We may collect the following types of information:
                  </p>
                  
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-2">2.1 Personal Information</h3>
                  <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-2">
                    <li>Full name, contact details, and demographic information</li>
                    <li>Health information, medical history, and treatment records</li>
                    <li>Emergency contact information</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-2">2.2 Website Usage Information</h3>
                  <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-2">
                    <li>IP address, browser type, and device information</li>
                    <li>Pages visited, time spent on site, and navigation patterns</li>
                    <li>Information provided through contact forms and appointment bookings</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-2">2.3 Sensitive Personal Data</h3>
                  <p className="text-gray-700">
                    As a healthcare provider, we may process sensitive personal data including health information, which receives special protection under Indian law. We only collect this information when necessary for providing treatment and with your explicit consent.
                  </p>
                </motion.div>
              )}

              {/* Data Usage Section */}
              {activeSection === 'data-usage' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-[#0a2540] mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-700 mb-4">
                    We use your personal information for the following purposes:
                  </p>
                  
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-2">3.1 Provision of Healthcare Services</h3>
                  <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-2">
                    <li>To provide physiotherapy treatment and rehabilitation services</li>
                    <li>To manage your appointments and treatment plans</li>
                    <li>To communicate with you about your care</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-2">3.2 Operational Purposes</h3>
                  <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-2">
                    <li>To improve our services and website experience</li>
                    <li>To send appointment reminders and health tips</li>
                    <li>To respond to your inquiries and requests</li>
                    <li>To maintain our internal records</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-2">3.3 Legal Compliance</h3>
                  <p className="text-gray-700">
                    To comply with legal obligations, including maintaining medical records as required by Indian law and responding to lawful requests from government authorities.
                  </p>
                </motion.div>
              )}

              {/* Data Protection Section */}
              {activeSection === 'data-protection' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-[#0a2540] mb-4 flex items-center">
                    <FaUserLock className="mr-2 text-teal-500" /> 4. Data Protection & Security
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-2">4.1 Security Measures</h3>
                  <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-2">
                    <li>Encryption of sensitive data both in transit and at rest</li>
                    <li>Secure storage of physical records in locked cabinets</li>
                    <li>Access controls limiting who can view your information</li>
                    <li>Regular security assessments and updates</li>
                    <li>Employee training on data protection practices</li>
                  </ul>
                </motion.div>
              )}

              {/* Data Sharing Section */}
              {activeSection === 'data-sharing' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-[#0a2540] mb-4">5. Data Sharing and Disclosure</h2>
                  <p className="text-gray-700 mb-4">
                    We may share your information in the following circumstances:
                  </p>
                  
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-2">5.1 With Your Consent</h3>
                  <p className="text-gray-700 mb-4">
                    We may share your information with other healthcare providers, family members, or third parties when you have provided explicit consent.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-2">5.2 For Treatment Purposes</h3>
                  <p className="text-gray-700 mb-4">
                    We may share relevant health information with other healthcare professionals involved in your treatment to ensure coordinated care.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-2">5.3 Legal Requirements</h3>
                  <p className="text-gray-700 mb-4">
                    We may disclose your information when required by law, court order, or governmental regulations.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-2">5.4 Service Providers</h3>
                  <p className="text-gray-700">
                    We may engage third-party service providers (such as IT support, payment processors) who have access to your information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                  </p>
                </motion.div>
              )}

              {/* Cookies Section */}
              {activeSection === 'cookies' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-[#0a2540] mb-4 flex items-center">
                    <FaCookie className="mr-2 text-teal-500" /> 6. Cookies and Tracking Technologies
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Our website uses cookies and similar tracking technologies to enhance your experience and collect information about how you use our site.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-2">6.1 Types of Cookies We Use</h3>
                  <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-2">
                    <li><strong>Essential Cookies:</strong> Required for the basic functionality of our website</li>
                    <li><strong>Analytical Cookies:</strong> Help us understand how visitors interact with our website</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-2">6.2 Managing Cookies</h3>
                  <p className="text-gray-700">
                    You can control cookies through your browser settings. However, disabling certain cookies may affect the functionality of our website. For more information about how we use cookies, please see our Cookie Policy.
                  </p>
                </motion.div>
              )}

              {/* Rights Section */}
              {activeSection === 'rights' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-[#0a2540] mb-4">7. Your Rights</h2>
                  <p className="text-gray-700 mb-4">
                    Under the Digital Personal Data Protection Act, 2023 and other applicable laws, you have the following rights regarding your personal data:
                  </p>
                  
                  <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-2">
                    <li><strong>Right to Access:</strong> You can request copies of your personal information that we hold</li>
                    <li><strong>Right to Correction:</strong> You can request that we correct any information you believe is inaccurate</li>
                    <li><strong>Right to Erasure:</strong> You can request that we erase your personal data, under certain conditions</li>
                    <li><strong>Right to Restrict Processing:</strong> You can request that we restrict the processing of your personal data</li>
                    <li><strong>Right to Data Portability:</strong> You can request that we transfer the data we have collected to another organization</li>
                    <li><strong>Right to Object:</strong> You can object to our processing of your personal data</li>
                  </ul>
                  
                  <p className="text-gray-700">
                    To exercise any of these rights, please contact us using the details provided at the end of this policy. We will respond to your request within 30 days as required by law.
                  </p>
                </motion.div>
              )}

              {/* Changes Section */}
              {activeSection === 'changes' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-[#0a2540] mb-4">8. Changes to This Policy</h2>
                  <p className="text-gray-700 mb-4">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-[#0a2540] mb-2">8.1 Notification of Changes</h3>
                  <p className="text-gray-700">
                    For significant changes, we will provide a more prominent notice including, for certain services, email notification of privacy policy changes. We encourage you to review this Privacy Policy periodically for any changes.
                  </p>
                </motion.div>
              )}

              {/* Contact Information */}
              <motion.div 
                className="mt-12 pt-6 border-t border-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xl font-bold text-[#0a2540] mb-4">Contact Us</h3>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact our Data Protection Officer:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center text-white mr-3 shadow-md">
                      <FaShieldAlt />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0a2540] mb-1">Data Protection Officer</h4>
                      <p className="text-gray-600 text-sm">PhysioWorld</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center text-white mr-3 shadow-md">
                      <FaUserLock />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0a2540] mb-1">Contact Information</h4>
                      <p className="text-gray-600 text-sm">
                        Email: privacy@physioworld.com<br />
                        Phone: +91 79048 18494
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mt-4 p-3 bg-gray-50 rounded-lg">
                  <strong className="text-teal-600">📍 Address:</strong> No.109B, SRP Colony, Perambur, Chennai, Tamil Nadu – 600082
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
import React, { useState } from 'react';
import { FaPlus, FaMinus, FaHome, FaCalendarAlt, FaUserMd, FaDumbbell, FaChevronRight, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default

  const faqs = [
    {
      question: "Do you provide home visit physiotherapy?",
      answer: "Yes, we provide home physiotherapy services across Chennai.",
      icon: <FaHome className="text-teal-500" />
    },
    {
      question: "How many sessions are required?",
      answer: "The number of sessions depends on your condition, pain level, and recovery goals.",
      icon: <FaCalendarAlt className="text-teal-500" />
    },
    {
      question: "Do I need a doctor referral?",
      answer: "No. You can directly book an assessment session.",
      icon: <FaUserMd className="text-teal-500" />
    },
    {
      question: "What conditions do you treat?",
      answer: "Orthopedic, neurological, sports injuries, post-surgical rehabilitation, and chronic pain conditions.",
      icon: <FaDumbbell className="text-teal-500" />
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-teal-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-teal-600 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">📋 Help Center</span>
          </div>
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 text-lg">
            Everything you need to know about our physiotherapy services
          </p>
          
          {/* Decorative line */}
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-md transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'shadow-xl ring-2 ring-teal-200' : 'hover:shadow-lg'
                }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4 flex-1">
                    {/* Icon Container */}
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      {faq.icon}
                    </div>
                    
                    {/* Question Text */}
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  
                  {/* Toggle Icon */}
                  <div className={`w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                    openIndex === index ? 'bg-teal-500' : 'bg-teal-100'
                  }`}>
                    {openIndex === index ? (
                      <FaMinus className={`text-sm transition-all duration-300 ${
                        openIndex === index ? 'text-white' : 'text-teal-600'
                      }`} />
                    ) : (
                      <FaPlus className={`text-sm transition-all duration-300 ${
                        openIndex === index ? 'text-white' : 'text-teal-600'
                      }`} />
                    )}
                  </div>
                </button>
                
                {/* Answer Panel */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-5 pb-5 md:px-6 md:pb-6 pt-2">
                    <div className="flex gap-3">
                      <div className="w-1 bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full"></div>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
       
        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
    </section>
  );
};

export default FAQ;
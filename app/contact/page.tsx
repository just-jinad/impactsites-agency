import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start p-6 bg-gray-50 min-h-screen font-sans">
      {/* Main Contact Form */}
      <div className="w-full md:w-[48%] bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact Us</h2>
        <p className="text-gray-600 mb-6 text-sm">
          We are deeply committed to delivering unparalleled service and unwavering support to ensure your experience exceeds expectations.
        </p>
        <form className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First Name *"
              className="w-1/2 p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <input
              type="text"
              placeholder="Last Name *"
              className="w-1/2 p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <input
            type="email"
            placeholder="Email *"
            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <textarea
            placeholder="Description *"
            className="w-full p-2 border border-gray-300 rounded-md h-20 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <textarea
            placeholder="Message"
            className="w-full p-2 border border-gray-300 rounded-md h-20 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 text-sm font-medium"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Sidebar Info */}
      <div className="w-full md:w-[22%] md:ml-6 mt-6 md:mt-0 space-y-4">
        <div className="bg-indigo-700 text-white p-4 rounded-lg">
          <p className="font-bold text-sm mb-1 flex items-center">
            <FaMapMarkerAlt className="mr-2" /> Address
          </p>
          <p className="text-xs">3680 Schriber Pass, North Catalina</p>
          <p className="text-xs">01984-8381</p>
        </div>
        <div className="bg-indigo-100 p-4 rounded-lg">
          <p className="font-bold text-sm mb-1 flex items-center">
            <FaPhoneAlt className="mr-2" /> Contact
          </p>
          <p className="text-xs">Talk to us and see how we can work</p>
          <p className="text-xs">1-800-14-0147</p>
        </div>
        <div className="bg-indigo-100 p-4 rounded-lg">
          <p className="font-bold text-sm mb-1 flex items-center">
            <FaEnvelope className="mr-2" /> Email
          </p>
          <p className="text-xs">We are usually replying within 24 hours</p>
          <p className="text-xs">pageone024@gmail.com</p>
        </div>
        <div className="bg-indigo-100 p-4 rounded-lg">
          <p className="font-bold text-sm mb-1 flex items-center">
            <FaClock className="mr-2" /> Working Hours
          </p>
          <p className="text-xs">Mon - Sat: 7 am to 7 pm</p>
          <p className="text-xs">Sun: 11 am to 5 pm</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
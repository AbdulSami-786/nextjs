import React from 'react';
import { Mail, Phone, MapPin, Send, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white px-4 py-12 flex flex-col items-center space-y-20">
      {/* Header */}
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg">We’re here to help! Reach out for any queries or feedback.</p>
      </div>

      {/* Contact Info + Form */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
          <div className="flex items-center space-x-4">
            <Phone className="text-blue-600" />
            <span className="text-gray-700">+1 (234) 567-890</span>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="text-blue-600" />
            <span className="text-gray-700">support@example.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-blue-600" />
            <span className="text-gray-700">123 Main Street, New York, USA</span>
          </div>
          <div className="flex items-center space-x-4">
            <Clock className="text-blue-600" />
            <span className="text-gray-700">Mon–Fri: 9AM–6PM</span>
          </div>
        </div>

        {/* Form */}
        <form className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Message</label>
            <textarea
              placeholder="Write your message here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            <Send size={18} />
            <span>Send Message</span>
          </button>
        </form>
      </div>

      {/* Google Map Embed */}
      <div className="w-full max-w-6xl rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9051219783493!2d-74.00601568459474!3d40.712776279331746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMTUuOCJX!5e0!3m2!1sen!2sus!4v1616954418994!5m2!1sen!2sus"
          className="w-full h-96 border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">How soon will I get a response?</h3>
            <p className="text-gray-600">We usually respond within 24 hours during business days.</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Can I schedule a call?</h3>
            <p className="text-gray-600">Yes, please reach out via email and we’ll arrange a convenient time.</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Do you support other languages?</h3>
            <p className="text-gray-600">Currently, we provide support in English and Spanish.</p>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="text-center space-y-3">
        <p className="text-gray-600">Follow us on social media:</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <Facebook />
          </a>
          <a href="#" className="text-pink-600 hover:text-pink-800">
            <Instagram />
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-600">
            <Twitter />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Page;

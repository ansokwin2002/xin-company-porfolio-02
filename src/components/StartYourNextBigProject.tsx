import React from 'react';
import { FaFacebookF, FaTiktok, FaYoutube, FaTelegramPlane, FaArrowRight } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const StartYourNextBigProject: React.FC = () => {
  return (
    <section className="py-20 bg-[#f7f9fa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight mb-4">
            START YOUR NEXT <span className="text-blue-500">BIG PROJECT</span>
          </h2>
          <p className="text-gray-600 font-medium">
            Got an idea? Tell us about it, and we'll bring it to life with world-class execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Office Info Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-6 flex-shrink-0">
                   {/* Cambodia Flag Icon/Image */}
                   <img src="https://flagcdn.com/kh.svg" alt="KH" className="w-full h-full object-cover rounded-sm" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">QiYou Tech Office</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mt-1">
                    No. 37, St. 315, Sangkat Boeung Kak I, Khan Toul Kork, 12151 Phnom Penh.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-900 font-bold">
                  <div className="text-blue-500 text-2xl"><MdPhone /></div>
                  <span>(+855) 86 68 2000</span>
                </div>
                <div className="flex items-center gap-4 text-gray-900 font-bold">
                  <div className="text-blue-500 text-2xl"><MdEmail /></div>
                  <span>info@qiyou-kh.com</span>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-black rounded-3xl p-6 flex items-center justify-between text-white">
              <span className="font-bold uppercase tracking-wider ml-2">Follow Us</span>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <FaFacebookF size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <FaTiktok size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <FaYoutube size={22} />
                </a>
              </div>
            </div>

            {/* Telegram Card */}
            <a href="https://t.me/yourusername" target="_blank" rel="noreferrer" 
               className="block bg-gradient-to-r from-blue-400 to-blue-500 rounded-3xl p-6 text-white group shadow-lg shadow-blue-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                    <FaTelegramPlane size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Chat on Telegram</h4>
                    <p className="text-sm text-white/80">Get instant response</p>
                  </div>
                </div>
                <FaArrowRight className="transform group-hover:translate-x-2 transition-transform" />
              </div>
            </a>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-blue-100/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-blue-900 mb-8">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-blue-900">Your Name? <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Enter your full name" className="w-full px-4 py-3 rounded-xl border bg-white/90 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-blue-900">Your Work Email? <span className="text-red-500">*</span></label>
                  <input type="email" placeholder="Enter your Work email" className="w-full px-4 py-3 rounded-xl border bg-white/90 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-blue-900">Your Mobile? <span className="text-red-500">*</span></label>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 bg-white px-4 py-4 rounded-xl min-w-[100px] border-none">
                    <img src="https://flagcdn.com/kh.svg" alt="KH" className="w-6 h-4 object-cover" />
                    <span className="text-sm font-bold">+855</span>
                  </div>
                  <input type="tel" placeholder="123 456 789" className="flex-1 px-4 py-3 rounded-xl border bg-white/90 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-blue-900">Your Budget? <span className="text-red-500">*</span></label>
                <select className="w-full px-4 py-3 rounded-xl border bg-white/90 border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select your budget range</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000+</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-blue-900">Project Details</label>
                <textarea rows={4} placeholder="Tell us more about your project, goals, and timeline..." className="w-full px-4 py-3 rounded-xl border bg-white/90 border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
              </div>

              <button type="submit" className="w-full flex items-center justify-center space-x-2 bg-gradient-blue text-white px-6 py-4 rounded-button font-semibold text-base transition-all duration-300 shadow-button hover:shadow-lg hover:scale-105">
                Send Message <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartYourNextBigProject;
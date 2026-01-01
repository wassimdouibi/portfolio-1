import { FaLocationArrow, FaPhone, FaCalendarCheck } from "react-icons/fa6";
import { IoMdMail, IoIosCopy } from "react-icons/io";
import { useState } from "react";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("lw_douibi@esi.dz");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full pt-20 pb-10 relative bg-white dark:bg-black-100" id="contact">
      <div className="max-w-7xl mx-auto px-5">
        <div className="border-4 border-black dark:border-white overflow-hidden flex flex-col md:flex-row shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
          {/* Vertical Sidebar */}
          <div className="bg-white dark:bg-black-100 border-b-4 md:border-b-0 md:border-r-4 border-black dark:border-white py-4 md:py-0 px-4 flex md:items-center justify-center">
            <h2 className="text-black dark:text-white font-black text-xl md:rotate-[-90deg] whitespace-nowrap tracking-widest uppercase">
              Contact Me
            </h2>
          </div>

          <div className="flex-1 flex flex-col">
            {/* Header section with Pink background */}
            <div className="bg-[#FFD1DC] dark:bg-pink-900/30 p-10 md:p-20 border-b-4 border-black dark:border-white relative flex items-center justify-center overflow-hidden">
               {/* Decorative shapes */}
               <div className="absolute top-5 right-10 w-12 h-12 bg-purple-400/40 rounded-lg rotate-12" />
               <div className="absolute bottom-5 left-10 w-10 h-10 bg-teal-400/40 [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)]" />
               
               <h1 className="text-3xl md:text-5xl font-black text-black dark:text-white text-center uppercase tracking-tighter">
                Get in touch, any time!
               </h1>
            </div>

            <div className="flex flex-col lg:flex-row">
               <div className="flex-1 p-6 md:p-10 space-y-10">
                  {/* Top Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* E-mail Card */}
                    <div className="border-4 border-black dark:border-white p-6 bg-white dark:bg-black-200 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                      <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-black dark:text-white">E-mail</h3>
                      <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-6 leading-tight">
                        My email is available at all times, so feel free to contact me anytime!
                      </p>
                      <button 
                        onClick={handleCopy}
                        className="w-full py-4 px-2 bg-[#FFFF00] text-black border-4 border-black font-black text-sm md:text-lg break-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase"
                      >
                        {copied ? "Copied!" : "lw_douibi@esi.dz"}
                      </button>
                    </div>

                    {/* Meeting Card */}
                    <div className="border-4 border-black dark:border-white p-6 bg-white dark:bg-black-200 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                      <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-black dark:text-white">Meeting</h3>
                      <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-6 leading-tight">
                        I am available based on the calendar, don&apos;t hesitate to book during that time!
                      </p>
                      <a 
                        href="https://calendly.com/lw_douibi-esi/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-4 bg-[#E0FBE2] text-black border-4 border-black font-black text-center text-lg hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>

                  {/* Contact Form Section */}
                  <div className="bg-[#FFCC99] dark:bg-orange-900/30 border-4 border-black dark:border-white p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-black uppercase text-black dark:text-white">Name <span className="text-red-500">*</span></label>
                          <input 
                            type="text" 
                            placeholder="Name"
                            className="w-full p-4 border-4 border-black bg-white text-black font-bold focus:outline-none focus:ring-0 placeholder:text-gray-400"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-black uppercase text-black dark:text-white">Email Address <span className="text-red-500">*</span></label>
                          <input 
                            type="email" 
                            placeholder="Email"
                            className="w-full p-4 border-4 border-black bg-white text-black font-bold focus:outline-none focus:ring-0 placeholder:text-gray-400"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-black uppercase text-black dark:text-white">Company</label>
                        <input 
                          type="text" 
                          placeholder="Company"
                          className="w-full p-4 border-4 border-black bg-white text-black font-bold focus:outline-none focus:ring-0 placeholder:text-gray-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-black uppercase text-black dark:text-white">Your Message <span className="text-red-500">*</span></label>
                        <textarea 
                          placeholder="Message"
                          rows={4}
                          className="w-full p-4 border-4 border-black bg-white text-black font-bold focus:outline-none focus:ring-0 placeholder:text-gray-400"
                        />
                      </div>
                      <div className="flex justify-end">
                        <button 
                          type="submit"
                          className="bg-black text-white px-10 py-4 font-black text-lg flex items-center gap-2 hover:bg-gray-800 transition-colors uppercase tracking-widest"
                        >
                          Submit <FaLocationArrow className="rotate-45" />
                        </button>
                      </div>
                    </form>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4 border-t-4 border-black dark:border-white pt-8">
          <p className="text-black dark:text-white font-black uppercase tracking-tight">
            Copyright © 2026 Wassim Douibi
          </p>

          <div className="flex items-center gap-4">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-4 border-black dark:border-white bg-white dark:bg-black-200 flex justify-center items-center hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
              >
                <img src={info.img} alt="social-icon" width={24} height={24} className="dark:invert" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

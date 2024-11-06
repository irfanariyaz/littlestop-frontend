import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 px-6 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        
        {/* Left Section */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img src="/images/littlestop.png" alt="Logo" className="h-16 w-auto mb-4" />
          <p className="text-gray-400 mb-4">Your one-stop shop for everything you need.</p>
          <div className="flex space-x-4 mb-4 ">
            <a href="https://facebook.com" className="hover:bg-white w-[48px] h-[48px]    text-black rounded-full border border-[#cfcccc] p-3" aria-label="Facebook">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com" className="hover:bg-white w-[48px] h-[48px]    text-black rounded-full border border-[#cfcccc] p-3" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com" className="hover:bg-white w-[48px] h-[48px]   text-black rounded-full border border-[#cfcccc] p-3" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
          </div>
          <p className="text-gray-400">2024 all Right Reserved Term of use LITTLESTOP</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Information Column */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold text-lg mb-4 text-black">Information</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-gray-200">About Us</a></li>
              <li><a href="#" className="hover:text-gray-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-200">Returns</a></li>
              <li><a href="#" className="hover:text-gray-200">FAQ</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold text-lg mb-4 text-black">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-gray-200">Careers</a></li>
              <li><a href="#" className="hover:text-gray-200">Blog</a></li>
              <li><a href="#" className="hover:text-gray-200">Press</a></li>
              <li><a href="#" className="hover:text-gray-200">Affiliates</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-black">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-gray-200">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-200">Support</a></li>
              <li><a href="#" className="hover:text-gray-200">Locations</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

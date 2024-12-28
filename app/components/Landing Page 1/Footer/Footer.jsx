import React from "react";

// react icons
import {
  FaApple,
  FaGooglePlay,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <main className="bg-[#040b1f]">
      <div className="container mx-auto px-3 lg:px-0">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-5 justify-center items-center md:items-start">
            <ul className="flex flex-col gap-3 justify-center items-center md:items-start">
              <li className="text-white font-bold text-2xl mb-3 mt-20">
                Company
              </li>
              <li className="text-white text-sm">About Us</li>
              <li className="text-white text-sm">Blog</li>
              <li className="text-white text-sm">Service</li>
              <li className="text-white text-sm">FAQs</li>
              <li className="text-white text-sm">Terms</li>
              <li className="text-white text-sm">Contact Us</li>
            </ul>
            <ul className="flex flex-col gap-3 justify-center items-center md:items-start">
              <li className="text-white font-bold text-2xl mb-3 mt-20">
                Quick Links
              </li>
              <li className="text-white text-sm">Get in Touch</li>
              <li className="text-white text-sm">Help center</li>
              <li className="text-white text-sm">Live chat</li>
              <li className="text-white text-sm">How it works</li>
            </ul>
            <ul className="flex flex-col gap-3 justify-center items-center md:items-start">
              <li className="text-white font-bold text-2xl mb-3 mt-20">
                Our Brands
              </li>
              <li className="text-white text-sm">Toyota</li>
              <li className="text-white text-sm">Porsche</li>
              <li className="text-white text-sm">Audi</li>
              <li className="text-white text-sm">BMW</li>
              <li className="text-white text-sm">Ford</li>
              <li className="text-white text-sm">Nissan</li>
              <li className="text-white text-sm">Peugeot</li>
              <li className="text-white text-sm">Volkswagen</li>
            </ul>
            <ul className="flex flex-col gap-3 justify-center items-center md:items-start">
              <li className="text-white font-bold text-2xl mb-3 mt-20">
                Vehicles Type
              </li>
              <li className="text-white text-sm">Sedan</li>
              <li className="text-white text-sm">Hatchback</li>
              <li className="text-white text-sm">SUV</li>
              <li className="text-white text-sm">Hybrid</li>
              <li className="text-white text-sm">Electric</li>
              <li className="text-white text-sm">Coupe</li>
              <li className="text-white text-sm">Truck</li>
              <li className="text-white text-sm">Convertible</li>
            </ul>

            <div className="flex flex-col justify-center items-center md:items-start">
              <h2 className="text-white font-bold text-2xl mb-3 mt-20">
                Our Mobile App
              </h2>
              <div className="flex flex-col items-start gap-5">
                <button className="bg-[#151c2f] flex items-center px-5 py-2 shadow-xl rounded-xl gap-3">
                  <div>
                    <FaApple className="text-white text-2xl" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-white text-sm">Download on the</span>
                    <span className="text-white text-base">Apple Store</span>
                  </div>
                </button>
                <button className="bg-[#151c2f] flex items-center px-5 py-2 shadow-xl rounded-xl gap-3">
                  <div>
                    <FaGooglePlay className="text-white text-2xl" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-white text-sm">Get in on</span>
                    <span className="text-white text-base">Google Play</span>
                  </div>
                </button>

                <div className="mt-5">
                  <h2 className="text-white text-xl">Connect With Us</h2>
                  <div className="flex items-center gap-5 mt-5">
                    <FaFacebookF className="text-white text-sm" />
                    <FaTwitter className="text-white text-sm" />
                    <FaInstagram className="text-white text-sm" />
                    <FaLinkedinIn className="text-white text-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#1e2436] my-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center pb-5">
          <p className="text-white text-sm">
            &copy; 2024 exemple.com. All rights reserved.
          </p>
          <div className="flex items-center gap-5 mt-3 md:mt-0">
            <p className="text-white text-sm list-disc">Terms & Conditions</p>
            <p className="text-white text-sm list-disc">Privacy Notice</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;

'use client';
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <section className="bg-gray-900 py-16 ">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2
          className="text-3xl mb-12 font-light tracking-wide"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <strong className="text-4xl text-[#005dac]">Get in</strong> touch
        </h2>

        <div
          className="grid md:grid-cols-3 gap-10 text-left px-6 py-10 bg-gray-800 shadow-2xl rounded-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="p-6 rounded-xl hover:bg-gray-700 transition transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-[#005dac]">Phone Number</h3>
            <div className="flex items-start space-x-4 mb-4">
              <FaPhoneAlt className="text-blue-400 text-2xl mt-1 hover:animate-pulse" />
              <div>
                <h4 className="font-medium text-gray-200">Pakistan</h4>
                <p className="text-gray-400">(+92) 325 443 8897</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl hover:bg-gray-700 transition transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-[#005dac]">Email</h3>
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-red-400 text-2xl mt-1 hover:animate-bounce" />
              <div>
                <h4 className="font-medium text-gray-200">Mail us</h4>
                <p>
                  <a
                    href="mailto:javedadeel52@gmail.com"
                    className="text-gray-400 hover:text-white hover:underline"
                  >
                    info@brightstepconsulting.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl hover:bg-gray-700 transition transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-[#005dac]">Address</h3>
            <div className="flex items-start space-x-4 mb-4">
              <FaMapMarkerAlt className="text-green-400 text-2xl mt-1 hover:animate-pulse" />
              <p className="text-gray-400 leading-relaxed">
                Lahore, Pakistan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;

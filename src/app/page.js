/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";

import Image from "next/image";
import {
  MdOutlineArrowForward
} from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GetInTouch from "@/components/Contact";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import Calendly from "@/components/Calendly";
import Footer from "@/components/Footer";
import ClientCarousel from "@/components/Client";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpen = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedService("");
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();


    handleClose();

    navigator.clipboard.writeText("+97338303637").catch(console.error);

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = "tel:+97338303637";
    } else {
      alert("Thank you for your request. We’ll redirect you shortly to call us.");

      setTimeout(() => {
        window.location.href = "tel:+97338303637";

        setTimeout(() => {
          alert("If your device did not open the dialer, please call us manually at +973 3830 3637.");
        }, 1500);
      }, 1000);

    }
  };




  return (
    <div className="relative box-border overflow-x-hidden overflow-y-hidden bg-black text-black font-montserrat" id="home">
      <Header />
      <div className="relative w-full lg:h-[90vh] h-[50vh] flex items-center justify-center" >

        <Image
          src="/header.jpg"
          alt="Header Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute w-full h-full">

          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <Swiper
              className="w-full "
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              modules={[Autoplay]}
            >
              <SwiperSlide>

                <section className="text-center my-10 text-white">
                  <h2 className="text-3xl md:text-5xl font-bold">
                    Your success is our commitment.
                  </h2>
                  <p className="text-lg mt-4 max-w-3xl mx-auto">
                    Welcome to Brightstep Consulting WLL — your trusted partner in financial, technological, and business advisory solutions.
                    With a commitment to excellence and innovation, we help businesses navigate challenges, unlock opportunities, and achieve sustainable growth.
                  </p>
                  <button
                    onClick={() => {
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="bg-[#005dac] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-[#2fa037] transition-all transform hover:translate-x-2 duration-300 mt-6 text-2xl flex justify-center items-center space-x-2 mx-auto"
                  >
                    <span>Contact Us</span>
                    <MdOutlineArrowForward className="text-3xl animate-[moveArrow_1.5s_ease-in-out_infinite]" />
                  </button>
                </section>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>

      <section id="about" className="py-16">
        <div className="container mx-auto max-w-[1440px] px-4">
          <h2
            className="text-4xl font-extrabold text-center text-[#005dac] mb-6"
            data-aos="fade-up"
          >
            About Us
          </h2>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 w-full">
              <h3 className="text-3xl font-bold text-[#005dac] mb-4" data-aos="fade-up"
                data-aos-delay="200">
                Brightstep Consulting WLL
              </h3>
              <p className="text-white text-justify leading-relaxed mb-6" data-aos="fade-up"
                data-aos-delay="300">
                At Brightstep Consulting WLL, we believe that every business deserves a
                clear path to success. Our multi-disciplinary team brings together
                expertise in finance, auditing, technology, logistics, and human
                resources to provide comprehensive, customized solutions.
              </p>

              <h4 className="text-2xl font-semibold text-[#005dac] mb-2" data-aos="fade-up"
                data-aos-delay="300">Our Vision</h4>
              <p className="text-white text-justify leading-relaxed mb-6" data-aos="fade-up"
                data-aos-delay="400">
                To be a leading consulting firm recognized for driving growth, innovation,
                and compliance, empowering businesses across industries to thrive.
              </p>

              <h4 className="text-2xl font-semibold text-[#005dac] mb-2" data-aos="fade-up"
                data-aos-delay="300">Our Mission</h4>
              <p className="text-white text-justify leading-relaxed mb-6" data-aos="fade-up"
                data-aos-delay="400">
                To deliver value-driven consulting services through accuracy, innovation,
                and integrity — building long-lasting partnerships with clients while
                supporting their journey toward sustainable success.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Accuracy", "Innovation", "Integrity"].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 rounded-lg px-4 py-2 shadow-sm"
                  >
                    <IoShieldCheckmarkOutline className="text-2xl text-[#005dac]" />
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center">
              <div className="relative  shadow-lg w-72 h-72 lg:w-96 lg:h-96">
                <Image
                  src="/about.png"
                  alt="About Us"
                  fill={true}
                  className="hover:scale-105 object-contain
                  transition-transform duration-300 "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ClientCarousel/>
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-[#005dac] mb-12">
            Why Choose Brightstep Consulting WLL?
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                text: "Expertise across finance, technology, and operations",
                icon: "💡",
              },
              {
                text: "Commitment to compliance, accuracy, and innovation",
                icon: "✅",
              },
              {
                text: "Tailored solutions designed for long-term growth",
                icon: "📈",
              },
              {
                text: "A trusted partner dedicated to your success",
                icon: "🤝",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 hover:bg-gray-700 transition transform hover:scale-105 hover:shadow-lg p-6 rounded-2xl shadow-lg  flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="text-gray-300 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold text-center text-[#005dac] mb-12">
            Our Services
          </h2>

          <div
            id="services"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {[
              {
                title: "📊 Bookkeeping & Accounting",
                desc: "Professional bookkeeping and accounting tailored across the globe to your reporting needs.",
              },
              {
                title: "🧾 VAT Returns",
                desc: "Simplifying VAT compliance with accurate preparation, review, and timely filing.",
              },
              {
                title: "📑 Economic Substance Report (ESR)",
                desc: "Helping businesses comply with ESR requirements with accurate reporting.",
              },
              {
                title: "✅ Annual Audit",
                desc: "Independent auditing services that strengthen credibility and ensure compliance.",
              },
              {
                title: "💻 Web & App Development",
                desc: "Custom websites and mobile apps designed for usability, scalability, and performance.",
              },
              {
                title: "🚚 Logistics Consulting",
                desc: "Optimizing supply chain efficiency, reducing costs, and ensuring smooth operations.",
              },
              {
                title: "👥 HR Consulting",
                desc: "Recruitment, compliance, and workforce strategy aligned with your goals.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="mb-4 text-gray-300">{service.desc}</p>
                <button
                  onClick={() => handleOpen(service.title)}
                  className="bg-[#005dac] px-4 py-2 rounded-lg font-medium text-white hover:bg-[#2fa037] transition-all duration-300 transform hover:scale-105"
                >
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
            <div
              className="bg-gray-900 w-full max-w-lg p-8 rounded-2xl shadow-2xl relative animate-fadeIn"
              data-aos="zoom-in"
            >
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold text-[#005dac] mb-4">
                Request a Quote
              </h3>
              <p className="mb-6 text-gray-400">
                Service Selected:{" "}
                <span className="text-white font-semibold">
                  {selectedService}
                </span>
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-[#005dac] outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-[#005dac] outline-none"
                  required
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-[#005dac] outline-none"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#005dac] py-3 rounded-lg font-semibold text-white hover:bg-[#2fa037] transition-all duration-300 transform hover:scale-105"
                >
                  Submit Request
                </button>
              </form>

            </div>
          </div>
        )}
      </section>
      <Calendly />
      <GetInTouch />
      <Footer />
    </div>
  );
}
